import * as express from "express";
import render from "../middlewares/render-middleware";
import redirect from "../middlewares/redirect-middleware";
import createUpdateUser from "../middlewares/user/create-update-user-middleware";
import login from "../middlewares/login-middleware";
import { UserDb } from "../repositories/user";
import { formatUser } from "../middlewares/user/list-users-middleware";

const router = express.Router();

// GET register form
router.get("/",
    render("register"),
);

// POST register form
router.post("/",
    createUpdateUser(UserDb),
    login(UserDb, formatUser),
    redirect("/"),
);

export default router;
