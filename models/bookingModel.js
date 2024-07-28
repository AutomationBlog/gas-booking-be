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
  gasagencyname: {
    type: Number,
    required: true,
  },
  signupid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  datetime: {
    type: string,
    required: true,
  },
  bookingid: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema, "booking");
export default Booking;
