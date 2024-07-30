import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userprofilecontroller.js";
const router = express.Router();

router.get("/get/:email", getUserProfile);
router.patch("/update", updateUserProfile);

export default router;
