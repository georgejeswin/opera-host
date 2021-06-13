import express from "express";
import {
  singleFileUpload,
  getallSingleFiles,
  cvFileUpload,
  getallMultipleFiles,
  psFileUpload,
  sslcFileUpload,
  plusTwoFileUpload,
  degreeFileUpload,
  ieltsFileUpload,
  experienceFileUpload,
  sopFileUpload,
  lorFileUpload,
  deleteUpload,
  universityUpload,
} from "../controllers/fileUploaderController.js";
import { upload } from "../helpers/filehelper.js";

const router = express.Router();

// //middleware
// import { authCheck } from "../middlewares/auth.js";

//router
router.post("/singleFile", upload.single("file"), singleFileUpload);
router.get("/getSingleFiles", getallSingleFiles);
router.get("/getMultipleFiles", getallMultipleFiles);
router.post("/cvFiles/:id", upload.single("cvfile"), cvFileUpload);
router.post("/psFiles/:id", upload.single("psfile"), psFileUpload);
router.post("/sslcFiles/:id", upload.single("sslcfile"), sslcFileUpload);
router.post(
  "/plustwoFiles/:id",
  upload.single("plustwofile"),
  plusTwoFileUpload
);
router.post("/degreeFiles/:id", upload.single("degreefile"), degreeFileUpload);
router.post("/ieltsFiles/:id", upload.single("ieltsfile"), ieltsFileUpload);
router.post(
  "/experienceFiles/:id",
  upload.single("experiencefile"),
  experienceFileUpload
);
router.post("/sopFiles/:id", upload.single("sopfile"), sopFileUpload);
router.post("/lorFiles/:id", upload.single("lorfile"), lorFileUpload);
router.post("/university/:id", universityUpload);
// router.post("/sentmail", sentEmail);
router.delete("/getMultipleFiles/:id", deleteUpload);

export default router;
