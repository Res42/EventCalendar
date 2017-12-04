"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the current user and saves it in res.locals.model.
 */
function getCurrentUser(userDb) {
    return function (req, res, next) {
        userDb.findById(req.session.userId)
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            res.locals.model = result;
            return next();
        });
    };
}
exports.default = getCurrentUser;
;
//# sourceMappingURL=get-current-user-middleware.js.map