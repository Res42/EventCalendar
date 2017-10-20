"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates or updates an user from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified user.
 */
function createUpdateUser() {
    return function (req, res, next) {
        // TODO
        return next();
    };
}
exports.default = createUpdateUser;
;
//# sourceMappingURL=create-update-user-middleware.js.map