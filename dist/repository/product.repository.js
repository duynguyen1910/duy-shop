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
exports.productRepository = void 0;
const base_repository_1 = require("./base.repository");
const model_1 = require("../model");
class ProductRepository extends base_repository_1.BaseRepository {
    save(data) {
        return super.save(data, ["category"]);
    }
    saveWithSlug(data) {
        const _super = Object.create(null, {
            saveWithSlug: { get: () => super.saveWithSlug }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.saveWithSlug.call(this, data, ["category"]);
        });
    }
    find(query = {}) {
        return super.find(query, ["category"]);
    }
    findOne(query = {}) {
        return super.findOne(query, ["category"]);
    }
    findByPaginate(page = 1, perPage = 10, query = {}) {
        const _super = Object.create(null, {
            findByPaginate: { get: () => super.findByPaginate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.findByPaginate.call(this, page, perPage, query, ["category"]);
        });
    }
    update(_id, data) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.update.call(this, _id, data, ["category"]);
        });
    }
}
exports.productRepository = new ProductRepository(model_1.Product);
//# sourceMappingURL=product.repository.js.map