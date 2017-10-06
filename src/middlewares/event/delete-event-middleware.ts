import * as express from "express";

/**
 * Deletes the event found in res.locals.model.
 */
export default function deleteEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        return next();
    };
};
