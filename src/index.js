import express from "express";
import MongoConnection from "./db/index.js";
import { config } from "dotenv";

config({
  path: "./config.env",
});

const app = express();
MongoConnection();
app.listen(process.env.PORT, () => {
  console.log(`Server connected successfully on PORT ${process.env.PORT}`);
});
