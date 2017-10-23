import * as express from "express";
import { UserDb } from "../../repositories/user";

/**
 * Gets the current user and saves it in res.locals.model.
 */
export default function getCurrentUser() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        UserDb.findById(req.session.userId)
            .exec((err, result) => {
                if (err) {
                    return next(err);
                }

                res.locals.model = result;
                return next();
            });
    };
};
