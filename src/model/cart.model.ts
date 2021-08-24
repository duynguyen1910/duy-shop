import mongoose from "mongoose";

export type CartStatus = "draft" | "booked";

export type CartType = {
  product: string;
  amount: number;
  creator: string;
  status: CartStatus;
};

const CartSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    amount: { type: Number },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", CartSchema);
