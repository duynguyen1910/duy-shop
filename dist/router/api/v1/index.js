"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiV1Router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user.router");
const category_router_1 = require("./category.router");
const product_router_1 = require("./product.router");
const apiV1Router = express_1.Router();
exports.apiV1Router = apiV1Router;
apiV1Router.use(user_router_1.userRouter, category_router_1.categoryRouter, product_router_1.productRouter);
//# sourceMappingURL=index.js.map