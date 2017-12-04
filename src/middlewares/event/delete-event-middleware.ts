import * as express from "express";
import * as mongoose from "mongoose";
import { EventEntity } from "../../repositories/event";

/**
 * Deletes the event by id found in res.params.eventId.
 */
export default function deleteEvent(eventDb: mongoose.Model<EventEntity>) {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        eventDb.findOneAndRemove({ _id: req.params.eventId, owner: req.session.userId })
        .exec((err, result) => {
            if (err) {
                return next(err);
            }

            return res.status(200).end();
        });
    };
};
