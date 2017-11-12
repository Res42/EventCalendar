"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const mongoose = require("mongoose");
const event_1 = require("../../repositories/event");
const enumerations_1 = require("../../enumerations");
/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
function createUpdateEvent() {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let event = {
                name: req.body.eventName,
                from: moment(req.body.eventStart).utc().toDate(),
                to: moment(req.body.eventEnd).utc().toDate(),
                location: req.body.eventLocation,
                comment: req.body.eventComment,
                owner: new mongoose.Types.ObjectId(req.session.userId),
                participants: (req.body.participants || []).map(p => {
                    return {
                        user: new mongoose.Types.ObjectId(p),
                        state: enumerations_1.ParticipationState.None,
                    };
                }),
            };
            if (res.locals.model) {
                event_1.EventDb.findByIdAndUpdate(req.params.eventId, event)
                    .exec((err, result) => next(err));
            }
            else {
                yield event_1.EventDb.create(event);
                return next();
            }
        });
    };
}
exports.default = createUpdateEvent;
;
//# sourceMappingURL=create-update-event-middleware.js.map