import { Server } from "socket.io";
import httpServer from "node:http";
import express from "express";

const app = express();
const server = httpServer.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
    // transports: ["websocket", "polling"]
  },
});

export function getReceiverSocketId(userId: string) {
  return userSocketMap[userId];
}

const userSocketMap: { [userId: string]: string } = {};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId = socket.handshake.query.userId as string;

  // if (typeof userId === "string") {
  //   userSocketMap[userId] = socket.id;
  // }

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
