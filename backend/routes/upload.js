import express from "express";
import {
  singleFileUpload,
  getallSingleFiles,
  cvFileUpload,
  getallMultipleFiles,
  psFileUpload,
  sslcFileUpload,
  plusTwoFileUpload,
  degreeFileUpload,
  ieltsFileUpload,
  experienceFileUpload,
  sopFileUpload,
  lorFileUpload,
  deleteUpload,
  sentEmailMiddleWare,
} from "../controllers/fileUploaderController.js";
import { upload } from "../helpers/filehelper.js";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "t3stmail25@gmail.com",
    pass: "#testmail@25",
  },
});

const router = express.Router();

// //middleware
// import { authCheck } from "../middlewares/auth.js";

//router
router.post("/singleFile", upload.single("file"), singleFileUpload);
router.get("/getSingleFiles", getallSingleFiles);
router.get("/getMultipleFiles", getallMultipleFiles);
router.post("/cvFiles/:id", upload.single("cvfile"), cvFileUpload);
router.post("/psFiles/:id", upload.single("psfile"), psFileUpload);
router.post("/sslcFiles/:id", upload.single("sslcfile"), sslcFileUpload);
router.post("/plustwoFiles/:id", upload.single("plustwofile"), (req, res) => {
  plusTwoFileUpload(req, res).then(async () => {
    let mailOptions = {
      from: "t3stmail25@gmail.com",
      to: "georgejeswin2000@gmail.com,jeswinmyladoor@gmail.com",
      subject: "testing from testmail",
      text: "sent mail>>>....",
    };
    await transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("user>>>", user);
        console.log("email sent new>>>>...");
      }
    });
    res.status(200).send("email sent");
  });
});
router.post(
  "/degreeFiles/:id",
  upload.single("degreefile"),
  sentEmailMiddleWare,
  degreeFileUpload
);
router.post("/ieltsFiles/:id", upload.single("ieltsfile"), ieltsFileUpload);
router.post(
  "/experienceFiles/:id",
  upload.single("experiencefile"),
  experienceFileUpload
);
router.post("/sopFiles/:id", upload.single("sopfile"), sopFileUpload);
router.post("/lorFiles/:id", upload.single("lorfile"), lorFileUpload);
// router.post("/sentmail", sentEmail);
router.delete("/getMultipleFiles/:id", deleteUpload);

export default router;
