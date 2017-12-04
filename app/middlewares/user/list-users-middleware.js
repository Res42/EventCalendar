"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
function listUsers(userDb) {
    return function (req, res, next) {
        userDb.find({ _id: { $ne: new mongoose.Types.ObjectId(req.session.userId) } })
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