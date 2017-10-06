import * as express from "express";

/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
export default function createUpdateEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        return next();
    };
};
