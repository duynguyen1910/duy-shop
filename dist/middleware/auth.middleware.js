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
exports.authMiddleware = void 0;
const repository_1 = require("../repository");
const UserService = __importStar(require("../service/user.service"));
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { token } = req;
            if (!token)
                return res.status(401).json({ message: "Bạn cần phải đăng nhập" });
            const tokenResult = yield repository_1.tokenRepository.findOne({ token });
            if (!tokenResult)
                return res.status(401).json({ message: "Phiên đăng nhập không hợp lệ" });
            if (tokenResult && tokenResult.expiry < new Date())
                return res.status(401).json({ message: "Phiên hết hạn" });
            const userInfo = yield UserService.getUserInfo(tokenResult.user);
            req.headers.userId = userInfo._id;
            req.headers.role = userInfo.role;
            return next();
        }
        catch (error) {
            console.log("add todo error", error);
        }
    });
}
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map