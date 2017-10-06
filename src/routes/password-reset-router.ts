import * as express from "express";
import render from "../middlewares/render-middleware";
import resetPassword from "../middlewares/user/reset-password-middleware";
import login from "../middlewares/login-middleware";
import redirect from "../middlewares/redirect-middleware";
import sendPasswordResetToken from "../middlewares/user/send-reset-token-middleware";

const router = express.Router();

// GET password reset request form
router.get("/",
    render("password-reset-request.html"),
);

// POST password reset request form
router.post("/",
    sendPasswordResetToken(),
    redirect("/login"),
);

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
