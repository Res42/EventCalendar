"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const home_router_1 = require("./routes/home-router");
const event_router_1 = require("./routes/event-router");
const user_router_1 = require("./routes/user-router");
const login_router_1 = require("./routes/login-router");
const register_router_1 = require("./routes/register-router");
const password_reset_router_1 = require("./routes/password-reset-router");
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "kutya",
}));
app.use("/", home_router_1.default);
app.use("/login", login_router_1.default);
app.use("/register", register_router_1.default);
app.use("/passwordreset", password_reset_router_1.default);
app.use("/event", event_router_1.default);
app.use("/user", user_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map