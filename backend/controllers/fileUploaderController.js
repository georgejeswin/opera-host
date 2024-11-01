import SingleFile from "../models/singlefile.js";
import MultipleFile from "../models/multiplefile.js";
import UserModel from "../models/user.js";
import Mongoose from "mongoose";
// import nodemailer from "nodemailer";

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "noreply.operainternational@gmail.com",
//     pass: "#opera@international",
//   },
// });

// export const sentEmail = async (user) => {
//   let mailOptions = {
//     from: "noreply.operainternational@gmail.com",
//     to: "georgejeswin2000@gmail.com",
//     subject: "Opera International",
//     text: "Files Subitted",
//   };
//   await transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("user>>>", user);
//       console.log("email sent new>>>>...");
//     }
//   });
//   res.status(200).send("email sent");
// };

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
};
const psFileUpload = async (req, res, next) => {
  try {
    let user = await UserModel.findById(req.params.id);
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
      psfile: filesArray,
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

const plusTwoFileUpload = async (req, res) => {
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
// export const sentEmailMiddleWare = async (req, res, next) => {
//   console.log("entering mail");
//   try {
//     let mailOptions = {
//       from: "noreply.operainternational@gmail.com",
//       to: "georgejeswin2000@gmail.com",
//       subject: "Opera International",
//       text: "Files Subitted",
//     };
//     await transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("user>>>", user);
//         console.log("email sent new>>>>...");
//       }
//     });
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

const degreeFileUpload = async (req, res, next) => {
  console.log("degree file>>>>");
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
const universityUpload = async (req, res, next) => {
  try {
    console.log(req.body.data)
    await MultipleFile.updateOne(
      { user: req.params.id },
      {university: req.body.data}
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
    const admin=req.cookies['$op_ad'];
    const id=req.cookies['opid'];
    var _id = Mongoose.Types.ObjectId(id);
    if(admin){
      const files = await MultipleFile.find().sort({ date: -1 });
      res.status(200).send(files);
    }else if(_id){
      const files=await MultipleFile.findOne({user:_id});
      res.status(200).send(files);
    }else{
      res.status(404).send("Error 404")
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// const getUserFiles=async(req,res)=>{
//   try {
//     const id=req.cookies['opid'];
//     var _id = Mongoose.Types.ObjectId(id);
//     const userFiles=await MultipleFile.findOne({user:_id});
//     res.status(200).send(userFiles)
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

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
  universityUpload,
  getallMultipleFiles,
};
