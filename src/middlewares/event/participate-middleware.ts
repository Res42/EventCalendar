import * as express from "express";
import * as mongoose from "mongoose";
import { EventEntity } from "../../repositories/event";

/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 404.
 * If there is no event with the given eventId -> 404.
 */
export default function participate(eventDb: mongoose.Model<EventEntity>) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        eventDb.findOneAndUpdate({ _id: req.params.eventId, "participants.user": req.session.userId }, { "participants.$.state": req.body.participationStatus })
            .exec((err, result) => {
                if (err) {
                    return res.status(404).end();
                }

                return next();
            });
    };
};
