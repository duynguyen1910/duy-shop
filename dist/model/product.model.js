"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number },
    promotionPrice: { type: Number },
    slug: { type: String, unique: true },
}, { timestamps: true });
exports.Product = mongoose_1.default.model("Product", ProductSchema);
//# sourceMappingURL=product.model.js.map