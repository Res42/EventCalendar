"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../../repositories/event");
/**
 * Checks if a user can modify an event.
 * - If the user can modify it -> save the event to res.locals.model;
 * - If the user cannot modify it -> 403;
 */
function getModifiedEvent() {
    return function (req, res, next) {
        let event = event_1.default.find((e) => e.id === req.params.eventId && e.ownerId === req.session.userId);
        if (event) {
            res.locals.model = event;
            return next();
        }
        return res.status(403).end();
    };
}
exports.default = getModifiedEvent;
;
//# sourceMappingURL=get-modified-event-middleware.js.map