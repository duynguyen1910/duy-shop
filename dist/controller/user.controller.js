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
exports.getUserInfo = exports.login = exports.register = void 0;
const UserService = __importStar(require("../service"));
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserService.register(req.body);
            if (user) {
                return res.status(200).json({ message: "Register success!" });
            }
            res.status(500).json({ message: "register error" });
        }
        catch (error) {
            return res.status(500).json({ message: "register error" });
        }
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userSession = yield UserService.login(req.body);
            if (userSession) {
                return res.status(200).json(userSession);
            }
            return res.status(401).json({ message: "????ng nh???p sai r???i" });
        }
        catch (error) {
            return res.status(401).json({ message: "????ng nh???p sai r???i" });
        }
    });
}
exports.login = login;
function getUserInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req);
            // const userInfo = await UserService.getUserInfo(req.headers.userId as string);
            // if (userInfo) {
            //   return res.status(200).json(userInfo);
            // }
            return res.status(501).json({ message: '???? x???y ra l???i khi l???y th??ng tin user' });
        }
        catch (error) {
            return res.status(501).json({ message: '???? x???y ra l???i khi l???y th??ng tin user' });
        }
    });
}
exports.getUserInfo = getUserInfo;
module.exports = { register, login };
//# sourceMappingURL=user.controller.js.map