import mongoose from "mongoose";

const Schema = mongoose.Schema;

const singleFileSchema = new Schema(
  {
    userId: {
      type: String,
      default: "user-id",
      // required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SingleFile = mongoose.model("SingleFile", singleFileSchema);

export default SingleFile;
