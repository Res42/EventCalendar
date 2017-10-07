import * as express from "express";

/**
 * Logs out the current user.
 */
export default function logout() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }

            return next();
        });
    };
};
