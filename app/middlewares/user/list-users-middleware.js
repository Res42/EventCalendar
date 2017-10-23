"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const user_1 = require("../../repositories/user");
/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
function listUsers() {
    return function (req, res, next) {
        user_1.UserDb.find({ _id: { $ne: new mongoose.Types.ObjectId(req.session.userId) } })
            .exec((err, result) => {
            if (err) {
                return next(err);
            }
            res.locals.users = result.map(u => formatUser(u));
            return next();
        });
    };
}
exports.default = listUsers;
;
function formatUser(u) {
    return {
        id: u.id,
        name: `${u.displayName} (${u.userName})`,
    };
}
exports.formatUser = formatUser;
//# sourceMappingURL=list-users-middleware.js.map