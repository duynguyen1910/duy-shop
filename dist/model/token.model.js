"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TokenSchema = new mongoose_1.default.Schema({
    user: { type: String, required: true },
    token: { type: String, required: true },
    expiry: { type: Date, required: true },
}, { timestamps: true });
exports.Token = mongoose_1.default.model("Token", TokenSchema);
//# sourceMappingURL=token.model.js.map