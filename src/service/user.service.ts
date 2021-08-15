import md5 from "md5";
import { SERECT_KEY, User, Token, UserInfoType } from "../model";
import jwt from "jsonwebtoken";

export function register(userInfo: UserInfoType) {
  const user = new User({
    email: userInfo.email,
    password: md5(userInfo.password),
    fullName: userInfo.fullName,
    role: "user",
  });
  return user.save();
}

export async function login(
  userInfo: Pick<UserInfoType, "email" | "password">
) {
  const user = await User.findOne({
    email: userInfo.email,
    password: md5(userInfo.password),
  }).exec();
  if (user) {
    const token = jwt.sign({ id: user._id }, SERECT_KEY);
    const saveToken = new Token({
      user: user._id,
      token,
      expiry: new Date(new Date().getTime() + 2592000000),
    });
    const tokenRecord = await saveToken.save();
    return {
      token,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    };
  }
  return undefined;
}
