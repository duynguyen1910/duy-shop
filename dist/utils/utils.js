"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubfixSlug = void 0;
function addSubfixSlug(slug) {
    return `${slug}-${new Date().getTime()}`;
    ;
}
exports.addSubfixSlug = addSubfixSlug;
//# sourceMappingURL=utils.js.map