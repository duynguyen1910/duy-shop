import { Router } from "express";
import { orderController } from "../../../controller";
import { authMiddleware } from "../../../middleware";

const orderRouter = Router();

orderRouter.get("/order", authMiddleware, orderController.getAllOrder);
orderRouter.get("/order/:id", authMiddleware, orderController.getOrderById);
orderRouter.post("/order", authMiddleware, orderController.addOrder);
orderRouter.put("/order/:id", authMiddleware, orderController.updateOrder);
orderRouter.delete("/order/:id", authMiddleware, orderController.deleteOrder);

export { orderRouter };
