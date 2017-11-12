"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Renders the ejs file.
 * @param viewPath The ejs file's name / path starting from the views folder.
 */
function render(viewPath) {
    return function (req, res) {
        return res.render(viewPath, {
            model: res.locals.model,
            isAuthenticated: !!req.session.authenticated,
            currentUserId: req.session.userId,
            currentDisplayName: req.session.displayName,
        });
    };
}
exports.default = render;
;
//# sourceMappingURL=render-middleware.js.map