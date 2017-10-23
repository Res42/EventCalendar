"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../repositories/user");
/**
 * Gets the current user and saves it in res.locals.model.
 */
function getCurrentUser() {
    return function (req, res, next) {
        user_1.UserDb.findById(req.session.userId)
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