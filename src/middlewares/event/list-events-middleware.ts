import * as express from "express";

/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
export default function listEvents() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        return next();
    };
};
