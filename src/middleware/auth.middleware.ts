import { Request, Response, NextFunction } from "express";
import { tokenRepository } from "../repository";
import { userService } from "../service";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token } = req;
    if (!token)
      return res.status(401).json({ message: "Bạn cần phải đăng nhập" });
    const tokenResult = await tokenRepository.findOne({ token });
    if (!tokenResult)
      return res.status(401).json({ message: "Phiên đăng nhập không hợp lệ" });
    if (tokenResult && tokenResult.expiry < new Date())
      return res.status(401).json({ message: "Phiên hết hạn" });
    const userInfo = await userService.getUserInfo(tokenResult.user);
    req.headers.userId = userInfo._id;
    req.headers.role = userInfo.role;
    return next();
  } catch (error) {
    console.log("add todo error", error);
  }
}
