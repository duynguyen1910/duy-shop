"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_bearer_token_1 = __importDefault(require("express-bearer-token"));
const config_1 = require("./config");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_bearer_token_1.default());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use("/api", router_1.apiRouter);
mongoose_1.default.connect(`mongodb://${config_1.config.mongoDbHost}/${config_1.config.mongoDbCollection}`);
mongoose_1.default.set("debug", true);
app.listen(config_1.config.port, () => {
    console.log(`Listening in ${config_1.config.port}`);
});
//# sourceMappingURL=index.js.map