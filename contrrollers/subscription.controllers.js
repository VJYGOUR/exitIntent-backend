import Email from "../models/email.model.js";

export const subscriptionController = async (req, res) => {
  try {
    const emailDoc = await Email.create({ email: req.body.email });
    res.status(201).json({ success: true, email: emailDoc.email });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ success: false, error: err.message });
    }
    if (err.code === 11000) {
      // duplicate key error
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getAllSubscriptions = async (req, res) => {
  try {
    const subs = await Email.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteSubscriptions = async (req, res) => {
  const { id } = req.params;
  try {
    await Email.findByIdAndDelete(id);

    res.json({ message: "Email deleted successfully" });
  } catch (error) {
    console.error("Error deleting email:", error);
    res.status(500).json({ message: "Server error" });
  }
};
