import * as express from "express";

/**
 * Gets the current user and saves it in res.locals.model.
 */
export default function getCurrentUser() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        return next();
    };
};
