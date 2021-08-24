import { Router } from "express";
import { userRouter } from "./user.router";
import { categoryRouter } from "./category.router";
import { productRouter } from "./product.router";
import { cartRouter } from "./cart.router";

const apiV1Router = Router();
apiV1Router.use(userRouter, categoryRouter, productRouter, cartRouter);

export { apiV1Router };
