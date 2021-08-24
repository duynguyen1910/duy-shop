import { Router } from "express";
import { cartController } from "../../../controller";
import { authMiddleware } from "../../../middleware";

const cartRouter = Router();

cartRouter.get("/cart", authMiddleware, cartController.getCart);
cartRouter.post("/cart", authMiddleware, cartController.addToCart);
cartRouter.delete("/cart/:id", authMiddleware, cartController.deleteCart);

export { cartRouter };
