import * as express from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { EventEntity } from "../../repositories/event";
import { IUser, IFormattedUser } from "../../typings/i-user";

/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
export default function listEvents(eventDb: mongoose.Model<EventEntity>, formatUser: (u: IUser) => IFormattedUser) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let now = moment().utc().toDate();
        eventDb.find({
            $and: [{
                $or: [{ owner: req.session.userId }, { "participants.user": req.session.userId }],
            }, {
                $or: [{ from: { $gt: now } }, { to: { $gt: now } }],
            }],
        })
        .populate("owner")
        .populate("participants.user")
        .exec((err, result) => {
            if (err) {
                return next(err);
            }

            res.locals.model = result
                .map(e => {
                    return {
                        id: e.id,
                        name: e.name,
                        location: e.location,
                        comment: e.comment,
                        from: moment(e.from).format("YYYY-MM-DD HH:mm"),
                        to: moment(e.to).format("YYYY-MM-DD HH:mm"),
                        owner: formatUser(e.owner as IUser),
                        participants: (e.participants || []).map(p => { return { ...formatUser(p.user as IUser), state: p.state }; }),
                    };
                });

            return next();
        });

    };
};
