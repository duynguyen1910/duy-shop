import { Router } from "express";
import { userController } from "../../../controller";
import { authMiddleware } from "../../../middleware";

const userRouter = Router();

userRouter.post("/user/register", userController.register);
userRouter.post("/user/login", userController.login);
userRouter.get("/user/me", authMiddleware, userController.getUserInfo);

export { userRouter };
