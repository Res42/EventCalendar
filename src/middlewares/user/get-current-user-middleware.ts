import * as express from "express";
import * as mongoose from "mongoose";
import { UserEntity } from "../../repositories/user";

/**
 * Gets the current user and saves it in res.locals.model.
 */
export default function getCurrentUser(userDb: mongoose.Model<UserEntity>) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        userDb.findById(req.session.userId)
            .exec((err, result) => {
                if (err) {
                    return next(err);
                }

                res.locals.model = result;
                return next();
            });
    };
};
