import * as express from "express";
import * as path from "path";

/**
 * Checks if the user is authenticated.
 * If not authenticated, redirect to "/login".
 */
export default function authenticated() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.session && req.session.authenticated) {
            return next();
        }

        return res.redirect("/login");
    };
};
