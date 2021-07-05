import admin from "../firebase/index.js";
// import Mongoose from "mongoose";
// import UserModel from "../models/user.js";
// import nodemailer from "nodemailer";

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "t3stmail25@gmail.com",
//     pass: "#testmail@25",
//   },
// });

export const authCheck = async (req, res, next) => {
  // console.log(req.headers); //token
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

export const adminCheck = async (req, res, next) => {
  try {
    const admin = req.cookies["$op_ad"];
    if (admin) {
      next();
    } else {
      res.status(404).json({
        error: "Unauthorized access, Please login and try again",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loggedInCheck = async (req, res, next) => {
  try {
    const user = req.cookies["user-cookie"];
    if (user) {
      next();
    } else {
      res.status(404).json({
        error: "Unauthorized access, Please login and try again",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// export const sentEmail = async (req, res, next) => {
//   console.log("entering mail");
//   try {
//     // const user = await UserModel.findById(req.params.id);
//     let mailOptions = {
//       from: "t3stmail25@gmail.com",
//       to: "georgejeswin2000@gmail.com,jeswinmyladoor@gmail.com",
//       subject: "testing from testmail",
//       text: "sent mail>>>....",
//     };
//     transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("email sent new>>>>...");
//       }
//     });
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };
