import * as express from "express";
import * as path from "path";

/**
 * Redirects to the specified path,
 */
export default function redirect(path: string) {
    return function (req: express.Request, res: express.Response) {
        return res.redirect(path);
    };
};
