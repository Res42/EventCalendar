"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Logs in the user from the request data.
 */
function login() {
    return function (req, res, next) {
        // TODO check the user from db.
        req.session.userId = 1;
        req.session.authenticated = true;
        req.session.save((err) => {
            if (err) {
                return next(err);
            }
            return next();
        });
    };
}
exports.default = login;
;
//# sourceMappingURL=login-middleware.js.map