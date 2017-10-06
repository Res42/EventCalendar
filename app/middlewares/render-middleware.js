"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * Renders the html file.
 * @param viewPath The html file's path.
 */
function render(viewPath) {
    return function (req, res) {
        // TODO: change this to ejs in the 4th homework
        // use res.locals.model to populate the template with the data.
        // let model = res.locals.model;
        return res.sendFile(viewPath, { root: path.join(__dirname, "../views") });
    };
}
exports.default = render;
;
//# sourceMappingURL=render-middleware.js.map