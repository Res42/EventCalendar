import * as express from "express";
import { EventDb, EventEntity } from "../../repositories/event";
import { UserDb } from "../../repositories/user";

/**
 * Deletes the event by id found in res.params.eventId.
 */
export default function deleteEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        EventDb.findOneAndRemove({ _id: req.params.eventId, owner: req.session.userId })
        .exec((err, result) => {
            if (err) {
                return next(err);
            }

            return res.status(200).end();
        });
    };
};
