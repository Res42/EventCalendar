import * as express from "express";
import { UserDb } from "../../repositories/user";

/**
 * Resets the password of the user which has the token specified in req.params.token.
 * If the token is not found -> 404.
 * After the reset save the user so it can automatically login with the login middleware.
 */
export default function resetPassword() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.userPassword !== req.body.userPasswordAgain) {
            return next(new Error("Given passwords does not match."));
        }

        UserDb.findOneAndUpdate({ passwordResetToken: req.params.token }, { password: req.body.userPassword })
        .exec((err, user) => {
            if (err) {
                return res.status(404).end();
            }

            // Hack: this way the login middleware can login the user.
            req.body.userName = user.userName;
            // req.body.userPassword is already set

            return next();
        });
    };
};
