import mongoose from "mongoose";
import slugify from "slugify";

export type CategoryType = {
  name: string;
  description: string;
  icon: string;
  slug?: string;
};

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    icon: { type: String },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

interface ICategory extends mongoose.Document {
  name: string;
  icon: string;
  description: string;
  slug: string;
}

CategorySchema.pre<ICategory>("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export const Category = mongoose.model("Category", CategorySchema);
