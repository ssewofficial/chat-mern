import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "SSE_Secret";
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/sse-chat";
export const PORT = process.env.PORT || 3000;
