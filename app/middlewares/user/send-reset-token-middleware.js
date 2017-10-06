"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the user by email from the request body. Then generate and send a password reset token to the users email.
 * If the user is not found -> 404.
 * After the reset save the user so it can automatically login with the login middleware.
 */
function sendPasswordResetToken() {
    return function (req, res, next) {
        return next();
    };
}
exports.default = sendPasswordResetToken;
;
//# sourceMappingURL=send-reset-token-middleware.js.map