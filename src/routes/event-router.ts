import * as express from "express";
import render from "../middlewares/render-middleware";
import authenticated from "../middlewares/authenticated-middleware";
import getModifiedEvent from "../middlewares/event/get-modified-event-middleware";
import participate from "../middlewares/event/participate-middleware";
import redirect from "../middlewares/redirect-middleware";
import createUpdateEvent from "../middlewares/event/create-update-event-middleware";
import deleteEvent from "../middlewares/event/delete-event-middleware";
import listUsers from "../middlewares/user/list-users-middleware";

const router = express.Router();

// Global middlewares for this router.
router.use(
    authenticated(),
);

// GET create event form
router.get("/",
    listUsers(),
    render("create"),
);

// POST create event form
router.post("/",
    createUpdateEvent(),
    redirect("/"),
);

// GET modify event form
router.get("/:eventId",
    listUsers(),
    getModifiedEvent(),
    render("create"),
);

// POST modify event form
router.post("/:eventId",
    getModifiedEvent(),
    createUpdateEvent(),
    redirect("/"),
);

// POST change event status
router.post("/:eventId/status",
    participate(),
    redirect("/"),
);

// DELETE event
router.delete("/:eventId",
    getModifiedEvent(),
    deleteEvent(),
    redirect("/"),
);

export default router;
