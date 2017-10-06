"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const home_router_1 = require("./routes/home-router");
const event_router_1 = require("./routes/event-router");
const user_router_1 = require("./routes/user-router");
const login_router_1 = require("./routes/login-router");
const app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname, "views")));
app.use("/", home_router_1.default);
app.use("/", login_router_1.default);
app.use("/event", event_router_1.default);
app.use("/user", user_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map