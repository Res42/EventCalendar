"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const home_router_1 = require("./routes/home-router");
const event_router_1 = require("./routes/event-router");
const user_router_1 = require("./routes/user-router");
const login_router_1 = require("./routes/login-router");
const register_router_1 = require("./routes/register-router");
const password_reset_router_1 = require("./routes/password-reset-router");
const app = express();
// Database
mongoose.connect("mongodb://localhost/EventCalendar", {
    useMongoClient: true,
}).then(() => {
    console.log("Connected to MongoDB");
}, (err) => {
    console.log(err.message);
    console.log(err);
});
// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout extractScripts", true);
// Global middlewares
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "kutya",
}));
// Routes
app.use("/", home_router_1.default);
app.use("/login", login_router_1.default);
app.use("/register", register_router_1.default);
app.use("/passwordreset", password_reset_router_1.default);
app.use("/event", event_router_1.default);
app.use("/user", user_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map