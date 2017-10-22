"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
function listEvents() {
    return function (req, res, next) {
        // TODO: db
        // res.locals.model = eventDb
        //     // TODO: only show currently happening or future events
        //     .filter(e => e.ownerId === req.session.userId || e.participants.some(p => p === req.session.userId))
        //     .map(e => {
        //         return {
        //             ...e,
        //             from: moment(e.from).format("YYYY-MM-DD HH:mm"),
        //             to: moment(e.to).format("YYYY-MM-DD HH:mm"),
        //             participants: res.locals.users ? e.participants.map(id => res.locals.users.find(u => u.id === id)) : e.participants,
        //         };
        //     });
        return next();
    };
}
exports.default = listEvents;
;
//# sourceMappingURL=list-events-middleware.js.map