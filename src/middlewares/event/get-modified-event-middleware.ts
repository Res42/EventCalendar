import * as express from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { EventDb } from "../../repositories/event";

/**
 * Checks if a user can modify an event.
 * - If the user can modify it -> save the event to res.locals.model;
 * - If the user cannot modify it -> 403;
 * - If there is no event with the given eventId -> 404;
 */
export default function getModifiedEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let users: { id: string, name: string }[] = res.locals.users;

        EventDb.findById(req.params.eventId).exec((err, event) => {
            if (err) {
                return next(err);
            }

            if (!event) {
                return res.status(404).end();
            }

            if (event.owner.toString() !== req.session.userId) {
                return res.status(403).end();
            }

            res.locals.model = {
                id: event.id,
                name: event.name,
                from: moment(event.from).format("YYYY-MM-DDTHH:mm"),
                to: moment(event.to).format("YYYY-MM-DDTHH:mm"),
                location: event.location,
                comment: event.comment,
                participants: users ? event.participants.map(p => users.find(u => u.id === (p.user as mongoose.Types.ObjectId).toString())) : event.participants,
            };

            return next();
        });
    };
};
