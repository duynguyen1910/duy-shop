"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.addCategory = exports.getCategoryByPaginate = exports.getCategoryBySlug = exports.getAllCategory = void 0;
const repository_1 = require("../repository");
function getAllCategory() {
    return repository_1.categoryRepository.find();
}
exports.getAllCategory = getAllCategory;
function getCategoryBySlug(slug) {
    return repository_1.categoryRepository.findOne({
        slug,
    });
}
exports.getCategoryBySlug = getCategoryBySlug;
function getCategoryByPaginate(page, perPage) {
    return repository_1.categoryRepository.findByPaginate(page, perPage);
}
exports.getCategoryByPaginate = getCategoryByPaginate;
function addCategory(categoryInfo) {
    return repository_1.categoryRepository.saveWithSlug(categoryInfo);
}
exports.addCategory = addCategory;
function updateCategory(categoryId, categoryInfo) {
    return repository_1.categoryRepository.update(categoryId, categoryInfo);
}
exports.updateCategory = updateCategory;
function deleteCategory(categoryId) {
    return repository_1.categoryRepository.delete(categoryId);
}
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category.service.js.map