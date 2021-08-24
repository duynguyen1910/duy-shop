"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
    icon: { type: String },
    slug: { type: String, unique: true },
}, { timestamps: true });
exports.Category = mongoose_1.default.model("Category", CategorySchema);
//# sourceMappingURL=category.model.js.map