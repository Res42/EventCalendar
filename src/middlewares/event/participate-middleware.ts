import * as express from "express";

/**
 * Checks if a user can participate in an event.
 * If the user can participate -> set participation from request data.
 * If the user cannot participate -> 403.
 * If there is no event with the given eventId -> 404.
 */
export default function participate() {
    return function (req: express.Request, res: express.Response, next: express.NextFunction) {
        let eventId = req.params.eventId;
        // TODO: if an user is invited to an event the user can change it's participation status
        let isUserInvited = true;
        if (isUserInvited) {
            return next();
        }

        return res.status(403).end();
    };
};
