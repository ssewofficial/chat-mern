import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoute from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import { app, server } from "./lib/socket.js";
import { PORT } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "..", "frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(path.resolve(), "..", "frontend", "dist", "index.html")
    );
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  console.log("Route: ", path.resolve());
  connectDB();
});
