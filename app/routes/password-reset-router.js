"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const reset_password_middleware_1 = require("../middlewares/user/reset-password-middleware");
const login_middleware_1 = require("../middlewares/login-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const send_reset_token_middleware_1 = require("../middlewares/user/send-reset-token-middleware");
const user_1 = require("../repositories/user");
const list_users_middleware_1 = require("../middlewares/user/list-users-middleware");
const email_1 = require("../email");
const router = express.Router();
// GET password reset request form
router.get("/", render_middleware_1.default("password-reset-request"));
// POST password reset request form
router.post("/", send_reset_token_middleware_1.default(user_1.UserDb, email_1.EmailService), redirect_middleware_1.default("/login"));
// GET password reset form
router.get("/:token", render_middleware_1.default("password-reset"));
// POST password reset form
router.post("/:token", reset_password_middleware_1.default(user_1.UserDb), login_middleware_1.default(user_1.UserDb, list_users_middleware_1.formatUser), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=password-reset-router.js.map