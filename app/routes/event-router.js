"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const authenticated_middleware_1 = require("../middlewares/authenticated-middleware");
const get_modified_event_middleware_1 = require("../middlewares/event/get-modified-event-middleware");
const participate_middleware_1 = require("../middlewares/event/participate-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const create_update_event_middleware_1 = require("../middlewares/event/create-update-event-middleware");
const delete_event_middleware_1 = require("../middlewares/event/delete-event-middleware");
const list_users_middleware_1 = require("../middlewares/user/list-users-middleware");
const router = express.Router();
// Global middlewares for this router.
router.use(authenticated_middleware_1.default());
// GET create event form
router.get("/", list_users_middleware_1.default(), render_middleware_1.default("create"));
// POST create event form
router.post("/", create_update_event_middleware_1.default(), redirect_middleware_1.default("/"));
// GET modify event form
router.get("/:eventId", list_users_middleware_1.default(), get_modified_event_middleware_1.default(), render_middleware_1.default("create"));
// POST modify event form
router.post("/:eventId", get_modified_event_middleware_1.default(), create_update_event_middleware_1.default(), redirect_middleware_1.default("/"));
// POST change event status
router.post("/:eventId/status", participate_middleware_1.default(), redirect_middleware_1.default("/"));
// DELETE event
router.delete("/:eventId", get_modified_event_middleware_1.default(), delete_event_middleware_1.default(), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=event-router.js.map