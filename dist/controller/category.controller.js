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
exports.deleteCategory = exports.updateCategory = exports.addCategory = exports.getCategoryBySlug = exports.getAllCategory = void 0;
const CategoryService = __importStar(require("../service/category.service"));
function getAllCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = +req.query.page;
            const perpage = +req.query.perpage;
            if (page && perpage) {
                const categories = yield CategoryService.getCategoryByPaginate(page, perpage);
                return res.status(200).json(categories);
            }
            const allCategory = yield CategoryService.getAllCategory();
            return res.status(200).json(allCategory);
        }
        catch (error) {
            return res.status(500).json({ message: "Error when get categories" });
        }
    });
}
exports.getAllCategory = getAllCategory;
function getCategoryBySlug(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield CategoryService.getCategoryBySlug(req.params.slug);
            if (category)
                return res.status(200).json(category);
            return res.status(500).json({ message: "Error when get category" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when get category" });
        }
    });
}
exports.getCategoryBySlug = getCategoryBySlug;
function addCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield CategoryService.addCategory(req.body);
            if (category) {
                return res.status(200).json(category);
            }
            return res.status(500).json({ message: "Error when add category" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when add category" });
        }
    });
}
exports.addCategory = addCategory;
function updateCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryId = req.params.id;
        try {
            const category = yield CategoryService.updateCategory(categoryId, req.body);
            if (category) {
                return res.status(200).json(category);
            }
            return res.status(500).json({ message: "Error when update category" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when update category" });
        }
    });
}
exports.updateCategory = updateCategory;
function deleteCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield CategoryService.deleteCategory(req.params.id);
            if (category) {
                return res.status(200).json({ message: "deleted" });
            }
            return res.status(500).json({ message: "Error when delete category" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error when delete category" });
        }
    });
}
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category.controller.js.map