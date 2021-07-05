import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessages,
} from "../controllers/messageControllers.js";

const router = express.Router();

router.get("/", getMessages);

router.post("/", postMessages);

router.delete("/:id", deleteMessage);

export default router;
