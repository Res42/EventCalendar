"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login() {
    return function (req, res, next) {
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