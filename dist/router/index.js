"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const api_1 = require("./api");
Object.defineProperty(exports, "apiRouter", { enumerable: true, get: function () { return api_1.apiRouter; } });
const router = express_1.Router();
router.use("api", api_1.apiRouter);
//# sourceMappingURL=index.js.map