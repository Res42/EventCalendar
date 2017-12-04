import * as express from "express";
import render from "../middlewares/render-middleware";
import login from "../middlewares/login-middleware";
import redirect from "../middlewares/redirect-middleware";
import { UserDb } from "../repositories/user";
import { formatUser } from "../helpers/format-user";

const router = express.Router();

// GET login form
router.get("/",
    render("login"),
);

// POST login form
router.post("/",
    login(UserDb, formatUser),
    redirect("/"),
);

export default router;
