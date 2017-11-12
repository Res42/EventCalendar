import * as express from "express";
import { UserDb } from "../repositories/user";
import { formatUser } from "./user/list-users-middleware";

/**
 * Logs in the user from the request data.
 * If no user is found with the given username and password -> 404.
 */
export default function login() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        UserDb.findOne({ userName: req.body.userName, password: req.body.userPassword})
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
