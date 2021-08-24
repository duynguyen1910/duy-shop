"use strict";
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
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductByCategoryPaginate = exports.getProductByCategory = exports.getProductByPaginate = exports.getProductBySlug = exports.getAllProduct = void 0;
const repository_1 = require("../repository");
function getAllProduct() {
    return repository_1.productRepository.find();
}
exports.getAllProduct = getAllProduct;
function getProductBySlug(slug) {
    return repository_1.productRepository.findOne({
        slug,
    });
}
exports.getProductBySlug = getProductBySlug;
function getProductByPaginate(page, perPage) {
    return repository_1.productRepository.findByPaginate(page, perPage);
}
exports.getProductByPaginate = getProductByPaginate;
function getProductByCategory(categoryId) {
    return repository_1.productRepository.find({
        category: categoryId,
    });
}
exports.getProductByCategory = getProductByCategory;
function getProductByCategoryPaginate(categoryId, page, perPage) {
    return repository_1.productRepository.findByPaginate(page, perPage, {
        category: categoryId,
    });
}
exports.getProductByCategoryPaginate = getProductByCategoryPaginate;
function addProduct(productInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return repository_1.productRepository.saveWithSlug(productInfo);
    });
}
exports.addProduct = addProduct;
function updateProduct(productId, productInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return repository_1.productRepository.update(productId, productInfo);
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(productId) {
    return repository_1.productRepository.delete(productId);
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.service.js.map