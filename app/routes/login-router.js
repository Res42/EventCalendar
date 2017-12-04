"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const login_middleware_1 = require("../middlewares/login-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const user_1 = require("../repositories/user");
const format_user_1 = require("../helpers/format-user");
const router = express.Router();
// GET login form
router.get("/", render_middleware_1.default("login"));
// POST login form
router.post("/", login_middleware_1.default(user_1.UserDb, format_user_1.formatUser), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=login-router.js.map