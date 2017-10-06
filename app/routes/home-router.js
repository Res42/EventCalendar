"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const authenticated_middleware_1 = require("../middlewares/authenticated-middleware");
const list_events_middleware_1 = require("../middlewares/event/list-events-middleware");
const logout_middleware_1 = require("../middlewares/logout-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const router = express.Router();
router.get("/", authenticated_middleware_1.default(), list_events_middleware_1.default(), render_middleware_1.default("list.html"));
router.post("/logout", authenticated_middleware_1.default(), logout_middleware_1.default(), redirect_middleware_1.default("/login"));
exports.default = router;
//# sourceMappingURL=home-router.js.map