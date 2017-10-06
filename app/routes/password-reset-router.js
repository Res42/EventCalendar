"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const reset_password_middleware_1 = require("../middlewares/user/reset-password-middleware");
const login_middleware_1 = require("../middlewares/login-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const send_reset_token_middleware_1 = require("../middlewares/user/send-reset-token-middleware");
const router = express.Router();
// GET password reset request form
router.get("/", render_middleware_1.default("password-reset-request.html"));
// POST password reset request form
router.post("/", send_reset_token_middleware_1.default(), redirect_middleware_1.default("/login"));
// GET password reset form
router.get("/:token", render_middleware_1.default("password-reset.html"));
// POST password reset form
router.post("/:token", reset_password_middleware_1.default(), login_middleware_1.default(), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=password-reset-router.js.map