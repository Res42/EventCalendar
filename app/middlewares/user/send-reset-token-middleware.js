"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the user by email from the request body. Then generate and send a password reset token to the users email.
 * If the user is not found -> 404.
 */
function sendPasswordResetToken() {
    return function (req, res, next) {
        // TODO
        return next();
    };
}
exports.default = sendPasswordResetToken;
;
//# sourceMappingURL=send-reset-token-middleware.js.map