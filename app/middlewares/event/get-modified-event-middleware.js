"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
/**
 * Checks if a user can modify an event.
 * - If the user can modify it -> save the event to res.locals.model;
 * - If the user cannot modify it -> 403;
 * - If there is no event with the given eventId -> 404;
 */
function getModifiedEvent(eventDb) {
    return function (req, res, next) {
        let users = res.locals.users;
        eventDb.findById(req.params.eventId).exec((err, event) => {
            if (err) {
                return next(err);
            }
            if (!event) {
                return res.status(404).end();
            }
            if (event.owner.toString() !== req.session.userId) {
                return res.status(403).end();
            }
            res.locals.model = {
                id: event.id,
                name: event.name,
                from: moment(event.from).format("YYYY-MM-DDTHH:mm"),
                to: moment(event.to).format("YYYY-MM-DDTHH:mm"),
                location: event.location,
                comment: event.comment,
                participants: users ? event.participants.map(p => users.find(u => u.id === p.user.toString())) : event.participants,
            };
            return next();
        });
    };
}
exports.default = getModifiedEvent;
;
//# sourceMappingURL=get-modified-event-middleware.js.map