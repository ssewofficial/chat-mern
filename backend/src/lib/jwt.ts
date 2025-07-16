import { Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./env.js";
import mongoose from "mongoose";

export const generateToken = (
  userId: string | mongoose.Types.ObjectId,
  res: Response
): string => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "strict",
  });

  return token;
};
