import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessages,
} from "../controllers/messageControllers.js";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "t3stmail25@gmail.com",
    pass: "#testmail@25",
  },
});

const router = express.Router();

router.get("/", getMessages);

router.post("/", postMessages);

router.delete("/:id", deleteMessage);

export default router;
