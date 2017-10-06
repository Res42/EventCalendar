"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../../repositories/event");
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