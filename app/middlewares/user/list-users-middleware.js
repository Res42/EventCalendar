"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../repositories/user");
/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
function listUsers() {
    return function (req, res, next) {
        // TODO: db
        res.locals.users = user_1.default.map(u => {
            return {
                id: u.id,
                name: `${u.displayName} (${u.username})`,
            };
        });
        return next();
    };
}
exports.default = listUsers;
;
//# sourceMappingURL=list-users-middleware.js.map