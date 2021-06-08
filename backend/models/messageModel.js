import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const MessageModel = mongoose.model("MessageModel", messageSchema);

export default MessageModel;
