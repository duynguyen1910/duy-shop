import { Router } from "express";
import { userRouter } from "./user.router";
import { categoryRouter } from "./category.router";

const apiV1Router = Router();
apiV1Router.use(userRouter, categoryRouter);

export { apiV1Router };
