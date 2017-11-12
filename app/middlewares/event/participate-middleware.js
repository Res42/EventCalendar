"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../../repositories/event");
/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 404.
 * If there is no event with the given eventId -> 404.
 */
function participate() {
    return function (req, res, next) {
        event_1.EventDb.findOneAndUpdate({ _id: req.params.eventId, "participants.user": req.session.userId }, { "participants.$.state": req.body.participationStatus })
            .exec((err, result) => {
            if (err) {
                return res.status(404).end();
            }
            return next();
        });
    };
}
exports.default = participate;
;
//# sourceMappingURL=participate-middleware.js.map