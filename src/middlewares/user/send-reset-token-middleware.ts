import * as express from "express";

/**
 * Finds the user by email from the request body. Then generate and send a password reset token to the users email.
 * If the user is not found -> 404.
 * After the reset save the user so it can automatically login with the login middleware.
 */
export default function sendPasswordResetToken() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        return next();
    };
};
