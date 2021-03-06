import mongoose from "mongoose";

export type UserRoleType = "user" | "employee" | "admin";
export type UserInfoType = {
  email: string;
  password: string;
  fullName: string;
  role: UserRoleType;
};

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    role: { type: String, require: true },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
