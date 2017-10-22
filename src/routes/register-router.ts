import * as express from "express";
import render from "../middlewares/render-middleware";
import redirect from "../middlewares/redirect-middleware";
import createUpdateUser from "../middlewares/user/create-update-user-middleware";
import login from "../middlewares/login-middleware";

const router = express.Router();

// GET register form
router.get("/",
    render("register"),
);

// POST register form
router.post("/",
    createUpdateUser(),
    login(),
    redirect("/"),
);

export default router;
