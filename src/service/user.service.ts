import md5 from "md5";
import { UserInfoType } from "../model";
import jwt from "jsonwebtoken";
import { userRepository, tokenRepository } from "../repository";
import { config } from "../config";

class UserService {
  register(userInfo: UserInfoType) {
    return userRepository.save({
      email: userInfo.email,
      password: md5(userInfo.password),
      fullName: userInfo.fullName,
      role: "user",
    });
  }

  async login(
    userInfo: Pick<UserInfoType, "email" | "password">
  ) {
    const user = await userRepository.findOne({
      email: userInfo.email,
      password: md5(userInfo.password),
    });
    if (user) {
      const token = jwt.sign({ id: user._id }, config.jwtSecrettKey);
      await tokenRepository.save({
        user: user._id,
        token,
        expiry: new Date(new Date().getTime() + 2592000000),
      });
      return {
        token,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      };
    }
    return undefined;
  }

  getUserInfo(userId: string) {
    return userRepository.findOne({ _id: userId });
  }
}

export const userService = new UserService();
