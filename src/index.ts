import express from "express";
import { apiRouter } from "./router";
import cors from "cors";
import mongoose from "mongoose";
import bearerToken from "express-bearer-token";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bearerToken());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRouter);
mongoose.connect(
  `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_COLLECTION}`
);
mongoose.set("debug", true);

app.listen(process.env.PORT, () => {
  console.log(`Listening in ${process.env.PORT}`);
});
