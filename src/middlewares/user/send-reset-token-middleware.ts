import * as express from "express";
import * as uuidv4 from "uuid/v4";
import * as mongoose from "mongoose";
import * as nodemailer from "nodemailer";
import { UserEntity } from "../../repositories/user";

/**
 * Finds the user by email from the request body. Then generate and send a password reset token to the users email.
 * If the user is not found -> 404.
 */
export default function sendPasswordResetToken(userDb: mongoose.Model<UserEntity>, emailService: Promise<nodemailer.Transporter>) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let token = uuidv4();

        userDb.findOneAndUpdate({ emailAddress: req.body.userEmail }, { passwordResetToken: token })
        .exec((err, user) => {
            if (err) {
                return res.status(404).end();
            }

            emailService.then(mailer => {
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
};
