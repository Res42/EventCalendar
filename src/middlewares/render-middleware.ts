import * as express from "express";
import * as path from "path";

/**
 * Renders the html file.
 * @param viewPath The html file's path.
 */
export default function render(viewPath: string) {
    return function (req: express.Request, res: express.Response) {
        // TODO: change this to ejs in the 4th homework
        // use res.locals.model to populate the template with the data.
        // let model = res.locals.model;
        return res.sendFile(viewPath, { root: path.join(__dirname, "../views") });
    };
};
