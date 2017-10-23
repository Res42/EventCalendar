"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const participation_1 = require("../../repositories/participation");
/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 404.
 * If there is no event with the given eventId -> 404.
 */
function participate() {
    return function (req, res, next) {
        participation_1.ParticipationDb.findOneAndUpdate({ user: new mongoose.Types.ObjectId(req.session.userId), event: new mongoose.Types.ObjectId(req.params.eventId) }, { state: req.body.participationStatus }).exec((err, result) => {
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