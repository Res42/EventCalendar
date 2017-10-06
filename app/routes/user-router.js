"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const authenticated_middleware_1 = require("../middlewares/authenticated-middleware");
const get_current_user_middleware_1 = require("../middlewares/user/get-current-user-middleware");
const create_update_user_middleware_1 = require("../middlewares/user/create-update-user-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const router = express.Router();
router.use(authenticated_middleware_1.default());
router.get("/me", get_current_user_middleware_1.default(), render_middleware_1.default("user.html"));
router.post("/me", get_current_user_middleware_1.default(), create_update_user_middleware_1.default(), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=user-router.js.map