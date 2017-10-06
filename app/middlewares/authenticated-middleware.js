"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if the user is authenticated.
 * If not authenticated, redirect to "/login".
 */
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