"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 403.
 * If there is no event with the given eventId -> 404.
 */
function participate() {
    return function (req, res, next) {
        let eventId = req.params.eventId;
        // TODO: if an user is invited to an event the user can change it's participation status
        let isUserInvited = true;
        if (isUserInvited) {
            return next();
        }
        return res.status(403).end();
    };
}
exports.default = participate;
;
//# sourceMappingURL=participate-middleware.js.map