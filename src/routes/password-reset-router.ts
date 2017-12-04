import * as express from "express";
import render from "../middlewares/render-middleware";
import resetPassword from "../middlewares/user/reset-password-middleware";
import login from "../middlewares/login-middleware";
import redirect from "../middlewares/redirect-middleware";
import sendPasswordResetToken from "../middlewares/user/send-reset-token-middleware";
import { UserDb } from "../repositories/user";
import { EmailService } from "../email";
import { formatUser } from "../helpers/format-user";

const router = express.Router();

// GET password reset request form
router.get("/",
    render("password-reset-request"),
);

// POST password reset request form
router.post("/",
    sendPasswordResetToken(UserDb, EmailService),
    redirect("/login"),
);

// GET password reset form
router.get("/:token",
    render("password-reset"),
);

// POST password reset form
router.post("/:token",
    resetPassword(UserDb),
    login(UserDb, formatUser),
    redirect("/"),
);

export default router;
