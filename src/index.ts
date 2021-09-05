import express from "express";
import { apiRouter } from "./router";
import cors from "cors";
import mongoose from "mongoose";
import bearerToken from "express-bearer-token";
import { config } from "./config";
import fileupload from "express-fileupload";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.static(config.filePath));
app.use(bearerToken());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRouter);
app.use("/uploads", express.static(config.filePath));
mongoose.connect(`mongodb://${config.mongoDbHost}/${config.mongoDbCollection}`);
mongoose.set("debug", true);

app.listen(config.port, () => {
  console.log(`Listening in ${config.port}`);
});
