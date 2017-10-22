import * as express from "express";
import * as path from "path";

/**
 * Renders the ejs file.
 * @param viewPath The ejs file's name / path starting from the views folder.
 */
export default function render(viewPath: string) {
    return function (req: express.Request, res: express.Response) {
        return res.render(viewPath, {
            model: res.locals.model,
            isAuthenticated: !!req.session.authenticated,
            currentUserId: req.session.userId,
        });
    };
};
