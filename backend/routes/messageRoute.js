import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessages,
} from "../controllers/messageControllers.js";
import { adminCheck } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", adminCheck, getMessages);

router.post("/", postMessages);

router.delete("/:id", adminCheck, deleteMessage);

export default router;
