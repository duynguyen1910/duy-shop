import { Router } from "express";
import { userRouter } from "./user.router";
import { categoryRouter } from "./category.router";
import { productRouter } from "./product.router";
import { cartRouter } from "./cart.router";
import { orderRouter } from "./order.router";

const apiV1Router = Router();
apiV1Router.use(
  userRouter,
  categoryRouter,
  productRouter,
  cartRouter,
  orderRouter
);

export { apiV1Router };
