import { userService } from "../service";
import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response) {
    try {
      const user = await userService.register(req.body);
      if (user) {
        return res.status(200).json({ message: "Register success!" });
      }
      res.status(500).json({ message: "register error" });
    } catch (error) {
      return res.status(500).json({ message: "register error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const userSession = await userService.login(req.body);
      if (userSession) {
        return res.status(200).json(userSession);
      }
      return res.status(401).json({ message: "Đăng nhập sai rồi" });
    } catch (error) {
      return res.status(401).json({ message: "Đăng nhập sai rồi" });
    }
  }

  async getUserInfo(req: Request, res: Response) {
    try {
      const userInfo = await userService.getUserInfo(
        req.headers.userId as string
      );
      if (userInfo) {
        return res.status(200).json(userInfo);
      }
      return res
        .status(501)
        .json({ message: "Đã xảy ra lỗi khi lấy thông tin user" });
    } catch (error) {
      return res
        .status(501)
        .json({ message: "Đã xảy ra lỗi khi lấy thông tin user" });
    }
  }
}

export const userController = new UserController();
