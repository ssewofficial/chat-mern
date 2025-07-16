import mongoose from "mongoose";

const nameSchema = new mongoose.Schema(
  {
    first: {
      type: String,
      required: true,
      trim: true,
    },
    middle: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      // required: true, // Uncomment if last name is mandatory
      trim: true,
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: { type: nameSchema, required: true },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
