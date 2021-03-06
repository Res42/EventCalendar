import * as express from "express";
import * as mongoose from "mongoose";
import { UserEntity } from "../../repositories/user";
import { IUser } from "../../typings/i-user";

/**
 * Creates or updates an user from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified user.
 */
export default function createUpdateUser(userDb: mongoose.Model<UserEntity>) {
    return async function (req: express.Request, res: express.Response, next: express.NextFunction) {

        if (req.body.userPassword !== req.body.userPasswordAgain) {
            return next(new Error("Given passwords does not match."));
        }

        if (!res.locals.model) {
            await userDb.create({
                userName: req.body.userName,
                displayName: req.body.userDisplayName,
                // plaintext password because laziness
                password: req.body.userPassword,
                emailAddress: req.body.userEmail,
            } as IUser);
            return next();
        } else {
            userDb.findByIdAndUpdate(res.locals.model.id, {
                displayName: req.body.userDisplayName,
                password: req.body.userPassword,
                emailAddress: req.body.userEmail,
            }).exec((err, result) => next(err));
        }
    };
};
