import express from "express";
import {
  deleteFeedback,
  feedbackController,
  getAllFeedbacks,
} from "../contrrollers/feedback.controllers.js";
const router = express.Router();
router.post("/", feedbackController);
router.get("/get", getAllFeedbacks);
router.delete("/delete/:id", deleteFeedback);
export default router;
