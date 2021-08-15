import { Token } from "../model";
import { Request, Response, NextFunction } from "express";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token } = req;
    if (!token)
      return res.status(401).json({ message: "Bạn cần phải đăng nhập" });
    const tokenResult = await Token.findOne({ token: token });
    if (!tokenResult)   
      return res.status(401).json({ message: "Phiên đăng nhập không hợp lệ" });
    if (tokenResult && tokenResult.expiry < new Date())
      return res.status(401).json({ message: "Phiên hết hạn" });
    req.body.userId = tokenResult.user;
    return next();
  } catch (error) {
    console.log("add todo error", error);
  }
}
