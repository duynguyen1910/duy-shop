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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const slugify_1 = __importDefault(require("slugify"));
const utils_1 = require("../utils");
class BaseRepository {
    constructor(Model) {
        this.collection = Model;
    }
    save(data, populate = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new this.collection(data);
            const rs = yield model.save();
            return this.findOne(rs._id, populate);
        });
    }
    saveWithSlug(data, populate = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let slug = slugify_1.default(data.name);
            const checkExist = yield this.collection.findOne({ slug });
            if (checkExist) {
                slug = utils_1.addSubfixSlug(slug);
            }
            const rs = yield this.save(Object.assign(Object.assign({}, data), { slug }));
            return this.findOne(rs._id, populate);
        });
    }
    find(query = {}, populate = []) {
        let result = this.collection.find(query);
        if (populate.length) {
            populate.forEach((expandField) => {
                result = result.populate(expandField);
            });
        }
        return result;
    }
    findOne(query = {}, populate = []) {
        let result = this.collection.findOne(query);
        if (populate.length) {
            populate.forEach((expandField) => {
                result = result.populate(expandField);
            });
        }
        return result;
    }
    findByPaginate(page = 1, perPage = 10, query = {}, populate = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const total = yield this.collection.count();
            if (!populate.length) {
                const result = yield this.collection
                    .find(query)
                    .limit(perPage)
                    .skip(perPage * (page - 1));
                return {
                    data: result,
                    total,
                };
            }
            let rs = this.collection.find(query);
            populate.forEach((expandField) => __awaiter(this, void 0, void 0, function* () {
                rs = rs.populate(expandField);
            }));
            rs = yield rs.limit(perPage).skip(perPage * (page - 1));
            return {
                data: rs,
                total,
            };
        });
    }
    update(_id, data, populate = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.collection.findByIdAndUpdate(_id, data);
            if (result) {
                const rs = this.findOne({ _id }, populate);
                console.log(rs);
                return rs;
            }
            return undefined;
        });
    }
    delete(_id) {
        return this.collection.findByIdAndDelete(_id);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map