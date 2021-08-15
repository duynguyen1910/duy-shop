import { Router } from "express";
import * as UserController from "../../../controller/user.controller";

const userRouter = Router();

userRouter.post("/user/register", UserController.register);
userRouter.post("/user/login", UserController.login);

export { userRouter };
