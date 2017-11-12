"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const event_1 = require("../../repositories/event");
const list_users_middleware_1 = require("../user/list-users-middleware");
/**
 * Lists the current users events which are currently happening or will be happening in the future.
 * Saves the list in res.locals.model.
 */
function listEvents() {
    return function (req, res, next) {
        let now = moment().utc().toDate();
        event_1.EventDb.find({
            $and: [{
                    $or: [{ owner: req.session.userId }, { "participants.user": req.session.userId }],
                }, {
                    $or: [{ from: { $gt: now } }, { to: { $gt: now } }],
                }],
        })
            .populate("owner")
            .populate("participants.user")
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            res.locals.model = result
                .map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    location: e.location,
                    comment: e.comment,
                    from: moment(e.from).format("YYYY-MM-DD HH:mm"),
                    to: moment(e.to).format("YYYY-MM-DD HH:mm"),
                    owner: list_users_middleware_1.formatUser(e.owner),
                    participants: (e.participants || []).map(p => { return Object.assign({}, list_users_middleware_1.formatUser(p.user), { state: p.state }); }),
                };
            });
            return next();
        });
    };
}
exports.default = listEvents;
;
//# sourceMappingURL=list-events-middleware.js.map