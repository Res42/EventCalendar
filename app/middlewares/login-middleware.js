"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Logs in the user from the request data.
 * If no user is found with the given username and password -> 404.
 */
function login(userDb, formatUser) {
    return function (req, res, next) {
        userDb.findOne({ userName: req.body.userName, password: req.body.userPassword })
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            if (result == null) {
                return res.status(404).end();
            }
            req.session.userId = result.id;
            req.session.authenticated = true;
            req.session.displayName = formatUser(result).name;
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