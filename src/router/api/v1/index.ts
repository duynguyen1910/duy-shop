import { Router } from "express";
import { userRouter } from "./user.router";
import { categoryRouter } from "./category.router";
import { productRouter } from "./product.router";

const apiV1Router = Router();
apiV1Router.use(userRouter, categoryRouter, productRouter);

export { apiV1Router };
