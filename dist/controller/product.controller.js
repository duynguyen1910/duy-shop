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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductByCategory = exports.getProductBySlug = exports.getAllProduct = void 0;
const ProductService = __importStar(require("../service/product.service"));
function getAllProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = +req.query.page;
            const perpage = +req.query.perpage;
            if (page && perpage) {
                const products = yield ProductService.getProductByPaginate(page, perpage);
                return res.status(200).json(products);
            }
            const allProduct = yield ProductService.getAllProduct();
            return res.status(200).json(allProduct);
        }
        catch (error) {
            return res.status(500).json({ message: "Error when get products" });
        }
    });
}
exports.getAllProduct = getAllProduct;
function getProductBySlug(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield ProductService.getProductBySlug(req.params.slug);
            if (product)
                return res.status(200).json(product);
            return res.status(500).json({ message: "Error when get product" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when get product" });
        }
    });
}
exports.getProductBySlug = getProductBySlug;
function getProductByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = +req.query.page;
            const perpage = +req.query.perpage;
            const categoryId = req.params.categoryId;
            if (page && perpage) {
                const products = yield ProductService.getProductByCategoryPaginate(categoryId, page, perpage);
                return res.status(200).json(products);
            }
            const allProduct = yield ProductService.getProductByCategory(categoryId);
            return res.status(200).json(allProduct);
        }
        catch (error) {
            return res.status(500).json({ message: "Error when get products" });
        }
    });
}
exports.getProductByCategory = getProductByCategory;
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield ProductService.addProduct(req.body);
            if (product) {
                return res.status(200).json(product);
            }
            return res.status(500).json({ message: "Error when add product" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when add product" });
        }
    });
}
exports.addProduct = addProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = req.params.id;
        try {
            const product = yield ProductService.updateProduct(productId, req.body);
            if (product) {
                return res.status(200).json(product);
            }
            return res.status(500).json({ message: "Error when update product" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when update product" });
        }
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield ProductService.deleteProduct(req.params.id);
            if (product) {
                return res.status(200).json({ message: "deleted" });
            }
            return res.status(500).json({ message: "Error when delete product" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when delete product" });
        }
    });
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map