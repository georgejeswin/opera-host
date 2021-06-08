import MessageModel from "../models/messageModel.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply.operainternational@gmail.com",
    pass: "#opera@international",
  },
});
let mailOptions = {
  from: "noreply.operainternational@gmail.com",
  to: "jeswinmyladoor@gmail.com",
  subject: "testing from opera",
  text: "sent message to opera>>>....",
};

export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();

    res.status(200).json(messages);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export const postMessages = async (req, res) => {
  const message = req.body;
  const newMessage = new MessageModel(message);
  try {
    await newMessage.save();

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent new>>>>...");
      }
    });
    res.status(201).json("message sent");
  } catch (error) {
    console.log(error);
  }
};

export const deleteMessage = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.send("no object with that id ");

  await MessageModel.findByIdAndRemove(_id);
  res.send("message deleted successfully");
};
