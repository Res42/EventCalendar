import * as express from "express";
import * as moment from "moment";
import { EventDb } from "../../repositories/event";

/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
export default function listEvents() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO: db
        // res.locals.model = eventDb
        //     // TODO: only show currently happening or future events
        //     .filter(e => e.ownerId === req.session.userId || e.participants.some(p => p === req.session.userId))
        //     .map(e => {
        //         return {
        //             ...e,
        //             from: moment(e.from).format("YYYY-MM-DD HH:mm"),
        //             to: moment(e.to).format("YYYY-MM-DD HH:mm"),
        //             participants: res.locals.users ? e.participants.map(id => res.locals.users.find(u => u.id === id)) : e.participants,
        //         };
        //     });
        return next();
    };
};
