import mongoose from "mongoose";

export type CategoryType = {
  name: string;
  description: string;
  icon: string;
  color: string;
  slug?: string;
};

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    icon: { type: String },
    color: { type: String },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CategorySchema);
