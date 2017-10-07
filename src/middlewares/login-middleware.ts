import * as express from "express";

/**
 * Logs in the user from the request data.
 * If no user is found with the given username and password -> 404.
 */
export default function login() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO check the user from db.
        req.session.userId = 1;
        req.session.authenticated = true;
        req.session.save((err) => {
            if (err) {
                return next(err);
            }

            return next();
        });
    };
};
