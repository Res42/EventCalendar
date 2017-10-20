import * as express from "express";

/**
 * Resets the password of the user which has the token specified in req.params.token.
 * If the token is not found -> 404.
 * After the reset save the user so it can automatically login with the login middleware.
 */
export default function resetPassword() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO
        return next();
    };
};
