"use strict";

import * as express from "express";
import * as path from "path";
import * as helmet from "helmet";
import homeRouter from "./routes/home-router";
import eventRouter from "./routes/event-router";
import userRouter from "./routes/user-router";
import loginRouter from "./routes/login-router";

const app = express();

// Global middlewares
app.use(helmet());
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.use("/", homeRouter);
app.use("/", loginRouter);
app.use("/event", eventRouter);
app.use("/user", userRouter);


export default app;
