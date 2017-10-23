import * as express from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { EventDb } from "../../repositories/event";
import { IEvent } from "../../typings/i-event";

/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
export default function createUpdateEvent() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!res.locals.model) {
            EventDb.findByIdAndUpdate(new mongoose.Types.ObjectId(), {
                name: req.body.eventName,
                from: moment(req.body.eventStart).utc().toDate(),
                to: moment(req.body.eventEnd).utc().toDate(),
                location: req.body.eventLocation,
                comment: req.body.eventComment,
                owner: new mongoose.Types.ObjectId(req.session.userId),
                participations: (req.body.participants || []).map(p => new mongoose.Types.ObjectId(p)),
            } as IEvent, { upsert: true }).exec((err, result) => next(err));
            // TODO add participants  to join table
            // add event to participants' user rows
            // add event to owners' user row
        } else {
            // TODO
            return next();
        }
    };
};
