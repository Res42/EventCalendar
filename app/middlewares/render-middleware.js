"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function render(viewPath) {
    return function (req, res) {
        return res.sendFile(viewPath, { root: path.join(__dirname, "../views") });
    };
}
exports.default = render;
;
//# sourceMappingURL=render-middleware.js.map