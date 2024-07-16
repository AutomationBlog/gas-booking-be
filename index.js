//Create express server
import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import { connect } from "mongoose";
import { config } from "dotenv";

config();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
