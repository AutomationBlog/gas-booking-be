import express from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.get("/logout", authMiddleware, authController.logoutUser);

export default router;