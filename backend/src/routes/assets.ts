import express from "express";
import path from "path";

const router = express.Router();

router.get("/uploads/:id", (req, res) => {
    const { id } = req.params;
    res.sendFile(path.join(path.resolve(), "uploads", id));
});

router.get("/css", (req, res) => {
  res.sendFile(path.join(path.resolve(), "src", "assets", "main.css"));
});

export default router;
