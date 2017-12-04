import * as express from "express";
import render from "../middlewares/render-middleware";
import authenticated from "../middlewares/authenticated-middleware";
import getCurrentUser from "../middlewares/user/get-current-user-middleware";
import createUpdateUser from "../middlewares/user/create-update-user-middleware";
import redirect from "../middlewares/redirect-middleware";
import { UserDb } from "../repositories/user";

const router = express.Router();

// Global middlewares for this router.
router.use(
    authenticated(),
);

// GET current user form
router.get("/me",
    getCurrentUser(UserDb),
    render("user"),
);

// POST current user form
router.post("/me",
    getCurrentUser(UserDb),
    createUpdateUser(UserDb),
    redirect("/"),
);

export default router;
