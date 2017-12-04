"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 404.
 * If there is no event with the given eventId -> 404.
 */
function participate(eventDb) {
    return function (req, res, next) {
        eventDb.findOneAndUpdate({ _id: req.params.eventId, "participants.user": req.session.userId }, { "participants.$.state": req.body.participationStatus })
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