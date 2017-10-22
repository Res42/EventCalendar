"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the current user and saves it in res.locals.model.
 */
function getCurrentUser() {
    return function (req, res, next) {
        // TODO: db
        // res.locals.model = userDb.find(u => u.id === req.session.userId);
        return next();
    };
}
exports.default = getCurrentUser;
;
//# sourceMappingURL=get-current-user-middleware.js.map