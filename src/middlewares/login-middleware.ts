import * as express from "express";
import * as mongoose from "mongoose";
import { UserEntity } from "../repositories/user";
import { IUser, IFormattedUser } from "../typings/i-user";

/**
 * Logs in the user from the request data.
 * If no user is found with the given username and password -> 404.
 */
export default function login(userDb: mongoose.Model<UserEntity>, formatUser: (u: IUser) => IFormattedUser) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        userDb.findOne({ userName: req.body.userName, password: req.body.userPassword})
            .exec((err, result) => {
                if (err) {
                    return next(err);
                }

                if (result == null) {
                    return res.status(404).end();
                }

                req.session.userId = result.id;
                req.session.authenticated = true;
                req.session.displayName = formatUser(result).name;

                req.session.save((saveErr) => {
                    if (saveErr) {
                        return next(saveErr);
                    }

                    return next();
                });
            });
    };
};
