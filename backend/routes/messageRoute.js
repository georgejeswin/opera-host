import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessages,
  //   updateMessages,
} from "../controllers/messageControllers.js";

const router = express.Router();

router.get("/", getMessages);

router.post("/", postMessages);

// router.patch("/:id", updateMessages);

router.delete("/:id", deleteMessage);

export default router;
