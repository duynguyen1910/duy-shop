import mongoose from "mongoose";
import slugify from "slugify";

export type ProductType = {
    name: string;
    description: string;
    category: string;
    price: number;
    promotionPrice?: number;
    slug?: string;
};

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String },
        description: { type: String },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        price: { type: Number },
        promotionPrice: { type: Number },
        slug: { type: String, unique: true },
    },
    { timestamps: true }
);

interface IProduct extends mongoose.Document {
    name: string;
    description: string;
    category: string;
    price: number;
    promotionPrice: number;
    slug: string;
}

ProductSchema.pre<IProduct>("save", function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

export const Product = mongoose.model("Product", ProductSchema);
