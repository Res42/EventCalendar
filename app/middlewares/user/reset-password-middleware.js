"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resets the password of the user which has the token specified in req.params.token.
 * If the token is not found -> 404.
 * After the reset save the user so it can automatically login with the login middleware.
 */
function resetPassword() {
    return function (req, res, next) {
        // TODO
        return next();
    };
}
exports.default = resetPassword;
;
//# sourceMappingURL=reset-password-middleware.js.map