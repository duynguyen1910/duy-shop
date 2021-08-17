import * as UserService from "../service";
import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  try {
    const user = await UserService.register(req.body);
    if (user) {
      return res.status(200).json({ message: "Register success!" });
    }
    res.status(500).json({ message: "register error" });
  } catch (error) {
    return res.status(500).json({ message: "register error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const userSession = await UserService.login(req.body);
    if (userSession) {
      return res.status(200).json(userSession);
    }
    return res.status(401).json({ message: "Đăng nhập sai rồi" });
  } catch (error) {
    return res.status(401).json({ message: "Đăng nhập sai rồi" });
  }
}
module.exports = { register, login };
