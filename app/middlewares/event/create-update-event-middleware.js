"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates or updates an event from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified event.
 */
function createUpdateEvent() {
    return function (req, res, next) {
        // TODO
        return next();
    };
}
exports.default = createUpdateEvent;
;
//# sourceMappingURL=create-update-event-middleware.js.map