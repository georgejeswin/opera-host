import Mongoose from "mongoose";
import UserModel from "../models/user.js";

export const userController = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};
export const updateUserName = async (req, res) => {
  const { id: _id } = req.params;
  const name = req.body.name;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No user with id: ${_id}`);

  const user = await UserModel.findByIdAndUpdate(
    _id,
    {
      name: name,
    },
    { new: true }
  );
  console.log(user);
  res.json(user);
};
export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.send("no object with that id ");

  await UserModel.findByIdAndRemove(_id);
  res.status(202).json({ success: "delete success" });
};
