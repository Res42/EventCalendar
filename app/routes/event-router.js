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
const user_1 = require("../repositories/user");
const event_1 = require("../repositories/event");
const format_user_1 = require("../helpers/format-user");
const router = express.Router();
// Global middlewares for this router.
router.use(authenticated_middleware_1.default());
// GET create event form
router.get("/", list_users_middleware_1.default(user_1.UserDb, format_user_1.formatUser), render_middleware_1.default("create"));
// POST create event form
router.post("/", create_update_event_middleware_1.default(event_1.EventDb), redirect_middleware_1.default("/"));
// GET modify event form
router.get("/:eventId", list_users_middleware_1.default(user_1.UserDb, format_user_1.formatUser), get_modified_event_middleware_1.default(event_1.EventDb), render_middleware_1.default("create"));
// POST modify event form
router.post("/:eventId", get_modified_event_middleware_1.default(event_1.EventDb), create_update_event_middleware_1.default(event_1.EventDb), redirect_middleware_1.default("/"));
// POST change event status
router.post("/:eventId/status", participate_middleware_1.default(event_1.EventDb), redirect_middleware_1.default("/"));
// DELETE event
router.delete("/:eventId", delete_event_middleware_1.default(event_1.EventDb));
exports.default = router;
//# sourceMappingURL=event-router.js.map