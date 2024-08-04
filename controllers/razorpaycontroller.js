import Razorpay from "razorpay";
import crypto from "crypto";

export const createOrder = async (req, res, next) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "order_rcptid_" + Math.floor(Math.random() * 1000),
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
      status: "success",
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id, "utf-8")
      .digest("hex");
    if (generated_signature === razorpay_signature) {
      res.status(200).json({
        status: "success",
        orderid: razorpay_order_id,
        paymentid: razorpay_payment_id,
        message: "Payment verified successfully",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    next(error);
  }
};
