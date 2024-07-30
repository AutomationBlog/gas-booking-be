import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  agencyname: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  bookingid: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema, "booking");
export default Booking;
