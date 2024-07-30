import User from "../models/userModel.js";

export const getUserProfile = async (req, res, next) => {
  try {
    let emailObj = { email: req.params.email };
    const user = await User.findOne(emailObj);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.updateOne({ email: req.body.email }, req.body);
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
