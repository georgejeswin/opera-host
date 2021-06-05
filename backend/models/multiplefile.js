import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    paided: {
      type: Boolean,
      default: false,
      // captured
    },

    cvfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
    psfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
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
    ],
    sslcfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
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
    ],
    plustwofile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
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
    ],
    degreefile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
    ieltsfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
    experiencefile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
    sopfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
    lorfile: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        fileName: {
          type: String,
        },
        filePath: {
          type: String,
        },
        fileType: {
          type: String,
        },
        fileSize: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
const MultipleFile = mongoose.model("MultipleFile", mulitipleFileSchema);

export default MultipleFile;
