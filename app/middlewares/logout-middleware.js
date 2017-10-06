"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Logsoutin the current user.
 */
function logout() {
    return function (req, res, next) {
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            return next();
        });
    };
}
exports.default = logout;
;
//# sourceMappingURL=logout-middleware.js.map