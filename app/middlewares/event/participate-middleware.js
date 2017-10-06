"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function participate() {
    return function (req, res, next) {
        let eventId = req.params.eventId;
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