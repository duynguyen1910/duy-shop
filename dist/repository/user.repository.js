"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const base_repository_1 = require("./base.repository");
const model_1 = require("../model");
class UserRepository extends base_repository_1.BaseRepository {
}
exports.userRepository = new UserRepository(model_1.User);
//# sourceMappingURL=user.repository.js.map