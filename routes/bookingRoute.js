import express from "express";
import {
  createBooking,
  getAllBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingcontroller.js";
const router = express.Router();

router.post("/create", createBooking);

router.get("/:id", getBooking);

router.patch("/:id", updateBooking);

router.delete("/:id", deleteBooking);

router.get("/get/all", getAllBookings);

export default router;
