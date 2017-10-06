"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const render_middleware_1 = require("../middlewares/render-middleware");
const login_middleware_1 = require("../middlewares/login-middleware");
const redirect_middleware_1 = require("../middlewares/redirect-middleware");
const router = express.Router();
router.get("/", render_middleware_1.default("login.html"));
router.post("/", login_middleware_1.default(), redirect_middleware_1.default("/"));
exports.default = router;
//# sourceMappingURL=login-router.js.map