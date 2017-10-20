import * as express from "express";
import userDb from "../../repositories/user";

/**
 * Gets the current user and saves it in res.locals.model.
 */
export default function getCurrentUser() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO: db
        res.locals.model = userDb.find(u => u.id === req.session.userId);
        return next();
    };
};
