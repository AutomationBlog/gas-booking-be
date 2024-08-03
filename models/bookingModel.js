import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
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
