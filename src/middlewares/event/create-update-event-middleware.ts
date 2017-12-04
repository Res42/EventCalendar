import * as express from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { EventEntity } from "../../repositories/event";
import { IEvent } from "../../typings/i-event";
import { ParticipationState } from "../../enumerations";

/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
export default function createUpdateEvent(eventDb: mongoose.Model<EventEntity>) {
    return async function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let event: IEvent = {
            name: req.body.eventName,
            from: moment(req.body.eventStart).utc().toDate(),
            to: moment(req.body.eventEnd).utc().toDate(),
            location: req.body.eventLocation,
            comment: req.body.eventComment,
            owner: new mongoose.Types.ObjectId(req.session.userId),
            participants: (req.body.participants || []).map(p => {
                return {
                    user: new mongoose.Types.ObjectId(p),
                    state: ParticipationState.None,
                };
            }),
        };

        if (res.locals.model) {
            eventDb.findByIdAndUpdate(req.params.eventId, event)
                .exec((err, result) => next(err));
        } else {
            await eventDb.create(event);
            return next();
        }
    };
};
