import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res, next) => {
  try {
    let bookingID = Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    );
    const booking = await Booking.create({
      ...req.body,
      bookingid: bookingID,
      status: "Open",
    });
    res.status(201).json({
      status: "success",
      message: "Booking created successfully",
      bookingID: booking.bookingid,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json({
      status: "success",
      bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.find({ name: req.params.id });
    res.status(200).json({
      status: "success",
      message: "Booking fetched successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.updateOne(
      { bookingid: Number(req.params.id) },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      message: "Booking updated successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.deleteOne({
      bookingid: Number(req.params.id),
    });
    res.status(200).json({
      status: "success",
      message: req.params.id + " - Booking deleted successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};
