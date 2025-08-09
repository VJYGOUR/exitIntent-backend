import Feedback from "../models/feedback.model.js";

export const feedbackController = async (req, res) => {
  //collect data
  const { checkbox } = req.body;
  //check if array or not
  const reasonArray = Array.isArray(checkbox) ? checkbox : [checkbox];
  //create and save database
  try {
    const feedback = await Feedback.create({ reason: reasonArray });

    res.status(200).json({ success: true, feedback: feedback.reason });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbackData = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbackData);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
