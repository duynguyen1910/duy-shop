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
exports.getUserInfo = exports.login = exports.register = void 0;
const md5_1 = __importDefault(require("md5"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const repository_1 = require("../repository");
const config_1 = require("../config");
function register(userInfo) {
    return repository_1.userRepository.save({
        email: userInfo.email,
        password: md5_1.default(userInfo.password),
        fullName: userInfo.fullName,
        role: "user",
    });
}
exports.register = register;
function login(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield repository_1.userRepository.findOne({
            email: userInfo.email,
            password: md5_1.default(userInfo.password),
        });
        if (user) {
            const token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.config.jwtSecrettKey);
            yield repository_1.tokenRepository.save({
                user: user._id,
                token,
                expiry: new Date(new Date().getTime() + 2592000000),
            });
            return {
                token,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
            };
        }
        return undefined;
    });
}
exports.login = login;
function getUserInfo(userId) {
    return repository_1.userRepository.findOne({ _id: userId });
}
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=user.service.js.map