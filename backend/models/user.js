import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    address: String,
    picture: String,
  },

  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
