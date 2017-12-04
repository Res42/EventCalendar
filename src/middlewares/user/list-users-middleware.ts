import * as express from "express";
import * as mongoose from "mongoose";
import { IUser, IFormattedUser } from "../../typings/i-user";
import { UserEntity } from "../../repositories/user";

/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
export default function listUsers(userDb: mongoose.Model<UserEntity>, formatUser: (u: IUser) => IFormattedUser) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        userDb.find({ _id: { $ne: new mongoose.Types.ObjectId(req.session.userId) }})
            .exec((err, result) => {
                if (err) {
                    return next(err);
                }

                res.locals.users = result.map(u => formatUser(u));

                return next();
            });
    };
};
