import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema(
  {
    reason: { type: [String], required: true },
  },
  { timestamps: true }
);
//create model
const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
