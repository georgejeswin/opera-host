import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessages,
  //   updateMessages,
} from "../controllers/messageControllers.js";
import { sentEmail } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getMessages);

router.post("/", sentEmail, postMessages);

// router.patch("/:id", updateMessages);

router.delete("/:id", deleteMessage);

export default router;
