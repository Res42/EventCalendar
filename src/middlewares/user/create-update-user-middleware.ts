import * as express from "express";

/**
 * Creates or updates an user from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified user.
 */
export default function createUpdateUser() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO
        return next();
    };
};
