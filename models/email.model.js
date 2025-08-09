// models/Email.js
import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // prevent duplicates
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // basic email regex
        "Please provide a valid email address",
      ],
    },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);
export default Email;
