"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const event_1 = require("../../repositories/event");
/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
function listEvents() {
    return function (req, res, next) {
        // TODO: db
        res.locals.model = event_1.default
            .filter(e => e.ownerId === req.session.userId || e.participants.some(p => p === req.session.userId))
            .map(e => {
            return Object.assign({}, e, { from: moment(e.from).format("YYYY-MM-DD HH:mm"), to: moment(e.to).format("YYYY-MM-DD HH:mm"), participants: res.locals.users ? e.participants.map(id => res.locals.users.find(u => u.id === id)) : e.participants });
        });
        return next();
    };
}
exports.default = listEvents;
;
//# sourceMappingURL=list-events-middleware.js.map