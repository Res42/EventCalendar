"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the current user and saves it in res.locals.model.
 */
function getCurrentUser() {
    return function (req, res, next) {
        return next();
    };
}
exports.default = getCurrentUser;
;
//# sourceMappingURL=get-current-user-middleware.js.map