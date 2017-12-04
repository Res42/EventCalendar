"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Deletes the event by id found in res.params.eventId.
 */
function deleteEvent(eventDb) {
    return function (req, res, next) {
        eventDb.findOneAndRemove({ _id: req.params.eventId, owner: req.session.userId })
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            return res.status(200).end();
        });
    };
}
exports.default = deleteEvent;
;
//# sourceMappingURL=delete-event-middleware.js.map