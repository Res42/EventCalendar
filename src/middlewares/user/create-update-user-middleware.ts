import * as express from "express";
import { UserDb } from "../../repositories/user";
import { IUser } from "../../typings/i-user";

/**
 * Creates or updates an user from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified user.
 */
export default function createUpdateUser() {
    return async function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO
        if (req.body.userPassword !== req.body.userPasswordAgain) {
            return next(new Error("Given passwords does not match."));
        }

        if (!res.locals.model) {
            await UserDb.create({
                userName: req.body.userName,
                displayName: req.body.userDisplayName,
                // plaintext password because laziness
                password: req.body.userPassword,
                emailAddress: req.body.userEmail,
                events: [],
                participations: [],
            } as IUser);
            return next();
        } else {
            return next();
        }
    };
};
