"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const ProductController = __importStar(require("../../../controller/product.controller"));
const productRouter = express_1.Router();
exports.productRouter = productRouter;
productRouter.get("/product", ProductController.getAllProduct);
productRouter.get("/product/:slug", ProductController.getProductBySlug);
productRouter.post("/product", ProductController.addProduct);
productRouter.put("/product/:id", ProductController.updateProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);
productRouter.get("/product-by-category/:categoryId", ProductController.getProductByCategory);
//# sourceMappingURL=product.router.js.map