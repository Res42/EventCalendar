"use strict";

import * as express from "express";
import * as path from "path";
import * as helmet from "helmet";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as session from "express-session";
import homeRouter from "./routes/home-router";
import eventRouter from "./routes/event-router";
import userRouter from "./routes/user-router";
import loginRouter from "./routes/login-router";
import registerRouter from "./routes/register-router";
import passwordResetRouter from "./routes/password-reset-router";

const app = express();

// Global middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "kutya",
}));

// Routes
app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/passwordreset", passwordResetRouter);
app.use("/event", eventRouter);
app.use("/user", userRouter);


export default app;
