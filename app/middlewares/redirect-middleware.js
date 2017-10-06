"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function redirect(path) {
    return function (req, res) {
        return res.redirect(path);
    };
}
exports.default = redirect;
;
//# sourceMappingURL=redirect-middleware.js.map