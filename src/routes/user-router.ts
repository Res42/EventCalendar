import * as express from "express";
import render from "../middlewares/render-middleware";
import authenticated from "../middlewares/authenticated-middleware";
import getCurrentUser from "../middlewares/user/get-current-user-middleware";
import createUpdateUser from "../middlewares/user/create-update-user-middleware";
import redirect from "../middlewares/redirect-middleware";

const router = express.Router();

// Global middlewares for this router.
router.use(
    authenticated(),
);

// GET current user form
router.get("/me",
    getCurrentUser(),
    render("user"),
);

// POST current user form
router.post("/me",
    getCurrentUser(),
    createUpdateUser(),
    redirect("/"),
);

export default router;
