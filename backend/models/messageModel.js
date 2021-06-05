import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: String,
  email: String,
  //   phone: Number,
  message: String,
});

const MessageModel = mongoose.model("MessageModel", messageSchema);

export default MessageModel;
