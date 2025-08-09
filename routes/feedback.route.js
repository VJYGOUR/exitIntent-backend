import express from "express";
import {
  feedbackController,
  getAllFeedbacks,
} from "../contrrollers/feedback.controllers.js";
const router = express.Router();
router.post("/", feedbackController);
router.get("/get", getAllFeedbacks);
export default router;
