"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
function listUsers() {
    return function (req, res, next) {
        // TODO: db
        // res.locals.users = userDb.map(u => {
        //     return {
        //         id: u.id,
        //         name: `${u.displayName} (${u.username})`,
        //     };
        // });
        return next();
    };
}
exports.default = listUsers;
;
//# sourceMappingURL=list-users-middleware.js.map