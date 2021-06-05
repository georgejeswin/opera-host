import SingleFile from "../models/singlefile.js";
import MultipleFile from "../models/multiplefile.js";
import UserModel from "../models/user.js";
import Mongoose from "mongoose";
const singleFileUpload = async (req, res, next) => {
  try {
    const file = new SingleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const cvFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        cvfile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const psFileUpload = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    let filesArray = [];
    const file = {
      user: req.params.id,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    filesArray.push(file);
    const multipleFiles = new MultipleFile({
      user: req.params.id,
      name: user.name,
      psfile:filesArray,
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const sslcFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        sslcfile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const plusTwoFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        plustwofile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const degreeFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        degreefile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const ieltsFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        ieltsfile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const experienceFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        experiencefile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const sopFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        sopfile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const lorFileUpload = async (req, res, next) => {
  try {
    await MultipleFile.updateOne(
      { user: req.params.id },
      {
        lorfile: {
          user: req.params.id,
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        },
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getallSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getallMultipleFiles = async (req, res, next) => {
  try {
    const files = await MultipleFile.find().sort({ date: -1 });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

export const deleteUpload = async (req, res) => {
  const { id: _id } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.send("no object with that id ");

  await MultipleFile.findByIdAndRemove(_id);
  res.status(202).json({ success: "delete File upload success" });
};

export {
  singleFileUpload,
  cvFileUpload,
  psFileUpload,
  sslcFileUpload,
  plusTwoFileUpload,
  degreeFileUpload,
  ieltsFileUpload,
  experienceFileUpload,
  getallSingleFiles,
  sopFileUpload,
  lorFileUpload,
  getallMultipleFiles,
};
