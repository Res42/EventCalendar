"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Redirects to the specified path,
 */
function redirect(path) {
    return function (req, res) {
        return res.redirect(path);
    };
}
exports.default = redirect;
;
//# sourceMappingURL=redirect-middleware.js.map