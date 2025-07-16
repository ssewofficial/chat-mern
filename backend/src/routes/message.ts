import express from "express";
import { protectRoute } from "../middleware/auth.js";
import * as message from "../controller/message.js"
import upload from "../lib/upload.js";

const router = express.Router();

router.get("/users", protectRoute, message.getUsersForSidebar);
router.get("/:id", protectRoute, message.getMessages);

router.post("/send/:id", protectRoute, upload.single("image"), message.sendMessage);

export default router;
