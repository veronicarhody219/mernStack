import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyPaser from "body-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyPaser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/transaction", (req, res) => {
  const {amount, description, date} = req.body;
  res.json({
    msg: "Hello world",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoDB connection is successful");
  })
  .catch((error) => console.log(error));
