"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const user_1 = require("../../repositories/user");
const email_1 = require("../../email");
/**
 * Finds the user by email from the request body. Then generate and send a password reset token to the users email.
 * If the user is not found -> 404.
 */
function sendPasswordResetToken() {
    return function (req, res, next) {
        let token = uuidv4();
        user_1.UserDb.findOneAndUpdate({ emailAddress: req.body.userEmail }, { passwordResetToken: token })
            .exec((err, user) => {
            if (err) {
                return res.status(404).end();
            }
            email_1.EmailService.then(mailer => {
                mailer.sendMail({
                    to: user.emailAddress,
                    subject: "EventCalendar password reset",
                    html: `<a href="${req.baseUrl}/passwordreset/${encodeURIComponent(token)}">Click here to reset your password!</a>`,
                }, (emailErr) => {
                    return next(emailErr);
                });
            });
        });
    };
}
exports.default = sendPasswordResetToken;
;
//# sourceMappingURL=send-reset-token-middleware.js.map