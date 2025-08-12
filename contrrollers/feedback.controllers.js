import Feedback from "../models/feedback.model.js";
import nodemailer from "nodemailer";
export const feedbackController = async (req, res) => {
  //collect data
  const { checkbox } = req.body;
  //check if array or not
  const reasonArray = Array.isArray(checkbox) ? checkbox : [checkbox];
  //create and save database
  try {
    const feedback = await Feedback.create({ reason: reasonArray });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kumarvijayy036@gmail.com", // Your Gmail address
        pass: "nhnd uztr spej myec", // Use an app password or your email password
      },
    });
    const mailOptions = {
      from: "kumarvijayy036@gmail.com",
      to: "vishaala999111@gmail.com", // Where you want to receive notifications
      subject: "New Form Submission of reasons",
      text: `You have a new form submission of reason`,
    };

    // Use async/await for sending mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, feedback: feedback.reason });
  } catch (error) {
    console.error("Error in feedbackController:", error);
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
