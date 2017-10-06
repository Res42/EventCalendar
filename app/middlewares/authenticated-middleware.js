"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authenticated() {
    return function (req, res, next) {
        if (req.session && req.session.authenticated) {
            return next();
        }
        return res.redirect("/login");
    };
}
exports.default = authenticated;
;
//# sourceMappingURL=authenticated-middleware.js.map