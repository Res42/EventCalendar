"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../repositories/user");
const list_users_middleware_1 = require("./user/list-users-middleware");
/**
 * Logs in the user from the request data.
 * If no user is found with the given username and password -> 404.
 */
function login() {
    return function (req, res, next) {
        user_1.UserDb.findOne({ userName: req.body.userName, password: req.body.userPassword })
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            if (result == null) {
                return res.status(404).end();
            }
            req.session.userId = result.id;
            req.session.authenticated = true;
            req.session.displayName = list_users_middleware_1.formatUser(result).name;
            req.session.save((saveErr) => {
                if (saveErr) {
                    return next(saveErr);
                }
                return next();
            });
        });
    };
}
exports.default = login;
;
//# sourceMappingURL=login-middleware.js.map