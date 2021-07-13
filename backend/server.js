import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import uploadRouter from "./routes/upload.js";
import messageRouter from "./routes/messageRoute.js";
import Razorpay from "razorpay";
import shortid from "shortid";
import crypto from "crypto";
import PaymentFile from "./models/payment.js";
import MultipleFile from "./models/multiplefile.js";
dotenv.config({ path: ".env" });

//app
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(__dirname);

//routes middleware
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", uploadRouter);
app.use("/backenduser", userRouter);
app.use("/backenduploads", uploadRouter);
app.use("/backendmessages", messageRouter);

//routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
app.get("/", (req, res) => {
  res.send("<h1>OPERA</h1>");
});

const PORT = process.env.PORT || 3000;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECERET,
});

app.post("/verification", async (req, res) => {
  // do a validation
  const secret = "opera@45678";

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    console.log(req.body.payload);
    try {
      await MultipleFile.updateOne(
        { user: req.body.payload.payment.entity.notes.user_id },
        {
          amount: req.body.payload.payment.entity.amount / 100,
          paided: req.body.payload.payment.entity.captured,
        }
      );
      const payment = new PaymentFile({
        id: req.body.payload.payment.entity.id,
        user_id: req.body.payload.payment.entity.notes.user_id,
        email: req.body.payload.payment.entity.email,
        status: req.body.payload.payment.entity.status,
        amount: req.body.payload.payment.entity.amount / 100,
        method: req.body.payload.payment.entity.method,
        paided: req.body.payload.payment.entity.captured,
      });

      payment.save();
      res.json({ status: "Sucess" });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail" });
    }
  } else {
    // pass it
  }
});

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = "INR";

  const options = {
    currency,
    amount: amount * 100,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});
//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));
