import nodemailer from "nodemailer";
import UserModel from "../models/user";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "t3stmail25@gmail.com",
    pass: "#testmail@25",
  },
});
const user = await UserModel.findById(req.params.id);

let mailOptions = {
  from: "t3stmail25@gmail.com",
  to: `${user.email}`,
  subject: "testing from testmail",
  text: "working....",
};
