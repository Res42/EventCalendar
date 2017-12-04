"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const authenticated_middleware_1 = require("../middlewares/authenticated-middleware");
const get_current_user_middleware_1 = require("../middlewares/user/get-current-user-middleware");
const create_update_user_middleware_1 = require("../middlewares/user/create-update-user-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const user_1 = require("../repositories/user");
const router = express.Router();
// Global middlewares for this router.
router.use(authenticated_middleware_1.default());
// GET current user form
router.get("/me", get_current_user_middleware_1.default(user_1.UserDb), render_middleware_1.default("user"));
// POST current user form
router.post("/me", get_current_user_middleware_1.default(user_1.UserDb), create_update_user_middleware_1.default(user_1.UserDb), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=user-router.js.map