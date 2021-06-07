import MessageModel from "../models/messageModel.js";
import mongoose from "mongoose";

export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();

    res.status(200).json(messages);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export const postMessages = async (req, res) => {
  console.log("entering post messages");
  const message = req.body;
  const newMessage = new MessageModel(message);
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
  }
};

// export const updateMessages = async (req, res) => {
//   const { id: _id } = req.params;
//   const message = req.body;
//   // const { title, message, creator, selectedFile, tags } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send(`No post with id: ${_id}`);

//   const updatedMessage = await MessageModel.findByIdAndUpdate(
//     _id,
//     {
//       ...message,
//       _id,
//     },
//     { new: true }
//   );

//   res.json(updatedMessage);
// };

export const deleteMessage = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.send("no object with that id ");

  await MessageModel.findByIdAndRemove(_id);
  res.send("message deleted successfully");
};
