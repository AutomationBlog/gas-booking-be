import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

//Routes
app.use("/api/auth", authRoute);

//MongoDB
let URI = process.env.CLOUD_MONGODB_URL;
if (process.env.isLOCAL) {
  URI = process.env.LOCAL_MONGODB_URL;
}

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err.message);
  });

//Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  err.status = err.status || "error";
  console.log(err);
  res.status(err.statusCode).json({ status: err.status, message: err.message });
});

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
