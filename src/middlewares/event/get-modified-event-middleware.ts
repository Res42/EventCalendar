import * as express from "express";
import * as moment from "moment";
import { EventDb } from "../../repositories/event";

/**
 * Checks if a user can modify an event.
 * - If the user can modify it -> save the event to res.locals.model;
 * - If the user cannot modify it -> 403;
 * - If there is no event with the given eventId -> 404;
 */
export default function getModifiedEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO: db
        // let event = eventDb.find((e) => e.id === parseInt(req.params.eventId, 10));

        // if (!event) {
        //     return res.status(404).end();
        // }

        // if (event.ownerId !== req.session.userId) {
        //     return res.status(403).end();
        // }

        // res.locals.model = {
        //     ...event,
        //     from: moment(event.from).format("YYYY-MM-DDTHH:mm"),
        //     to: moment(event.to).format("YYYY-MM-DDTHH:mm"),
        //     participants: res.locals.users ? event.participants.map(id => res.locals.users.find(u => u.id === id)) : event.participants,
        // };

        return next();
    };
};
