// import express package
import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import subscriptionRouter from "./routes/subscription.route.js";
import feedbackRouter from "./routes/feedback.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
// create object from express
//create a PORT

//parser tp parse json body
const origin =
  process.env.NODE_ENV === "production"
    ? "https://exitintent-frontend.onrender.com"
    : "http://localhost:5174";
app.use(
  cors({
    origin,
    credentials: true, // If you're using cookies/sessions
  })
);
app.use(express.json());
//route
app.use("/api/subscription", subscriptionRouter);
app.use("/api/feedback", feedbackRouter);
//start and creating the server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
