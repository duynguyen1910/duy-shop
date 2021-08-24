"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const v1_1 = require("./v1");
const apiRouter = express_1.Router();
exports.apiRouter = apiRouter;
apiRouter.use("/v1", v1_1.apiV1Router);
//# sourceMappingURL=index.js.map