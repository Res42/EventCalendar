"use strict";

import * as express from "express";
import render from "../middlewares/render-middleware";
import login from "../middlewares/login-middleware";
import redirect from "../middlewares/redirect-middleware";

const router = express.Router();

// GET login form
router.get("/",
    render("login.html"),
);

// POST login form
router.post("/",
    login(),
    redirect("/"),
);

export default router;
