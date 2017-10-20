import * as express from "express";
import userDb from "../../repositories/user";

/**
 * Gets the users to populate the typeahead.
 * Saves them in res.locals.users.
 */
export default function listUsers() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO: db
        res.locals.users = userDb.map(u => {
            return {
                id: u.id,
                name: `${u.displayName} (${u.username})`,
            };
        });

        return next();
    };
};
