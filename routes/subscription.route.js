import express from "express";
import {
  deleteSubscriptions,
  getAllSubscriptions,
  subscriptionController,
} from "../contrrollers/subscription.controllers.js";
const router = express.Router();
router.post("/addmail", subscriptionController);
router.get("/getmails", getAllSubscriptions);
router.delete("/delete/:id", deleteSubscriptions);

export default router;
