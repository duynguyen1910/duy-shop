import mongoose from "mongoose";

export type OrderType = {
  product: string[];
  amount: number;
  creator: string;
  status: "pending" | "shipping" | "shipped";
};

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  amount: { type: Number },
});

const OrderSchema = new mongoose.Schema(
  {
    product: [OrderItemSchema],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String },
    totalAmount: { type: Number },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
