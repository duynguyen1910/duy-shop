import mongoose from "mongoose";

export type ProductType = {
  name: string;
  description: string;
  category: string;
  price: number;
  promotionPrice?: number;
  slug?: string;
  images?: string;
};

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number },
    promotionPrice: { type: Number },
    slug: { type: String, unique: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
