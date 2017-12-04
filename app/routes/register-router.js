"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const create_update_user_middleware_1 = require("../middlewares/user/create-update-user-middleware");
const login_middleware_1 = require("../middlewares/login-middleware");
const user_1 = require("../repositories/user");
const list_users_middleware_1 = require("../middlewares/user/list-users-middleware");
const router = express.Router();
// GET register form
router.get("/", render_middleware_1.default("register"));
// POST register form
router.post("/", create_update_user_middleware_1.default(), login_middleware_1.default(user_1.UserDb, list_users_middleware_1.formatUser), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=register-router.js.map