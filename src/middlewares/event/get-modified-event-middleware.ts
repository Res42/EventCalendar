import * as express from "express";
import eventDb from "../../repositories/event";

/**
 * Checks if a user can modify an event.
 * - If the user can modify it -> save the event to res.locals.model;
 * - If the user cannot modify it -> 403;
 */
export default function getModifiedEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {

        let event = eventDb.find((e) => e.id === req.params.eventId && e.ownerId === req.session.userId);

        if (event) {
            res.locals.model = event;
            return next();
        }

        return res.status(403).end();
    };
};
