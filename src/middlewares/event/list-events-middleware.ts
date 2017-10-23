import * as express from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { EventDb } from "../../repositories/event";
import { formatUser } from "../user/list-users-middleware";
import { IUser } from "../../typings/i-user";

/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
export default function listEvents() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let now = moment().utc().toDate();
        EventDb.find({
            $and: [{
                $or: [{ owner: req.session.userId }, { participants: { _id: req.session.userId } }],
            }, {
                $or: [{ from: { $gt: now } }, { to: { $gt: now } }],
            }],
        })
        .populate("owner")
        .populate("participants")
        .exec((err, result) => {
            if (err) {
                return next(err);
            }

            res.locals.model = result
                .map(e => {
                    return {
                        name: e.name,
                        location: e.location,
                        comment: e.comment,
                        from: moment(e.from).format("YYYY-MM-DD HH:mm"),
                        to: moment(e.to).format("YYYY-MM-DD HH:mm"),
                        owner: formatUser(e.owner as IUser),
                        participants: e.participants || [],
                    };
                });

            return next();
        });

    };
};
