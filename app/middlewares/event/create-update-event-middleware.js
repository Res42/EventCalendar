"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const mongoose = require("mongoose");
const event_1 = require("../../repositories/event");
/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
function createUpdateEvent() {
    return function (req, res, next) {
        if (!res.locals.model) {
            event_1.EventDb.findByIdAndUpdate(new mongoose.Types.ObjectId(), {
                name: req.body.eventName,
                from: moment(req.body.eventStart).utc().toDate(),
                to: moment(req.body.eventEnd).utc().toDate(),
                location: req.body.eventLocation,
                comment: req.body.eventComment,
                owner: new mongoose.Types.ObjectId(req.session.userId),
                participations: (req.body.participants || []).map(p => new mongoose.Types.ObjectId(p)),
            }, { upsert: true }).exec((err, result) => next(err));
            // TODO add participants  to join table
            // add event to participants' user rows
            // add event to owners' user row
        }
        else {
            // TODO
            return next();
        }
    };
}
exports.default = createUpdateEvent;
;
//# sourceMappingURL=create-update-event-middleware.js.map