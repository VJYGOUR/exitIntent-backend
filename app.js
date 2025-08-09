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
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://exitintent-frontend.onrender.com",
    ],
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
