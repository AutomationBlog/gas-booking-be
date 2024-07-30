import express from "express";
import { registerUser, loginUser } from "../controllers/authcontroller.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get("/logout", authMiddleware, authController.logoutUser);

export default router;
