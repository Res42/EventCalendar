import * as express from "express";
import * as mongoose from "mongoose";
import { UserDb } from "../../repositories/user";
import { IUser } from "../../typings/i-user";

/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
export default function listUsers() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        UserDb.find({ _id: { $ne: new mongoose.Types.ObjectId(req.session.userId) }})
            .exec((err, result) => {
                if (err) {
                    return next(err);
                }

                res.locals.users = result.map(u => formatUser(u));

                return next();
            });
    };
};

export function formatUser(u: IUser) {
    return {
        id: u.id,
        name: `${u.displayName} (${u.userName})`,
    };
}
