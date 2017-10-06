"use strict";

import * as express from "express";
import render from "../middlewares/render-middleware";
import resetPassword from "../middlewares/user/reset-password-middleware";
import login from "../middlewares/login-middleware";
import redirect from "../middlewares/redirect-middleware";

const router = express.Router();

// GET password reset form
router.get("/:token",
    render("password-reset.html"),
);

// POST password reset form
router.post("/:token",
    resetPassword(),
    login(),
    redirect("/"),
);

export default router;
