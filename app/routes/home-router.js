"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const authenticated_middleware_1 = require("../middlewares/authenticated-middleware");
const list_events_middleware_1 = require("../middlewares/event/list-events-middleware");
const logout_middleware_1 = require("../middlewares/logout-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const list_users_middleware_1 = require("../middlewares/user/list-users-middleware");
const router = express.Router();
// DO NOT register global middlewares for this router.
// Because this is the "/" root router, and the registered middlewares will be registered to the other routers.
// https://github.com/pillarjs/router/issues/38
// router.use(
//     // NO
// );
// GET event list
router.get("/", authenticated_middleware_1.default(), list_users_middleware_1.default(), list_events_middleware_1.default(), render_middleware_1.default("list"));
// POST logout
router.post("/logout", authenticated_middleware_1.default(), logout_middleware_1.default(), redirect_middleware_1.default("/login"));
exports.default = router;
//# sourceMappingURL=home-router.js.map