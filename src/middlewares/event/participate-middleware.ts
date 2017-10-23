import * as express from "express";
import * as mongoose from "mongoose";
import { ParticipationDb } from "../../repositories/participation";

/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 404.
 * If there is no event with the given eventId -> 404.
 */
export default function participate() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        ParticipationDb.findOneAndUpdate(
                { user: new mongoose.Types.ObjectId(req.session.userId), event: new mongoose.Types.ObjectId(req.params.eventId)},
                { state: req.body.participationStatus },
            ).exec((err, result) => {
                if (err) {
                    return res.status(404).end();
                }

                return next();
            });
    };
};
