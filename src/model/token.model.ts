import mongoose from "mongoose";
const TokenSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    token: { type: String, required: true },
    expiry: { type: Date, required: true },
  },
  { timestamps: true }
);
export const Token = mongoose.model("Token", TokenSchema);
