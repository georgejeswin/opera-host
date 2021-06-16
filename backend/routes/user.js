import express from "express";
import {
  deleteUser,
  updateUserName,
  userController,
} from "../controllers/user.js";

const router = express.Router();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.get("/", userController);
router.patch("/:id", updateUserName);
router.delete("/:id", deleteUser);

export default router;
