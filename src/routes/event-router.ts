import * as express from "express";
import render from "../middlewares/render-middleware";
import authenticated from "../middlewares/authenticated-middleware";
import getModifiedEvent from "../middlewares/event/get-modified-event-middleware";
import participate from "../middlewares/event/participate-middleware";
import redirect from "../middlewares/redirect-middleware";
import createUpdateEvent from "../middlewares/event/create-update-event-middleware";
import deleteEvent from "../middlewares/event/delete-event-middleware";
import listUsers from "../middlewares/user/list-users-middleware";
import { UserDb } from "../repositories/user";
import { EventDb } from "../repositories/event";
import { formatUser } from "../helpers/format-user";

const router = express.Router();

// Global middlewares for this router.
router.use(
    authenticated(),
);

// GET create event form
router.get("/",
    listUsers(UserDb, formatUser),
    render("create"),
);

// POST create event form
router.post("/",
    createUpdateEvent(EventDb),
    redirect("/"),
);

// GET modify event form
router.get("/:eventId",
    listUsers(UserDb, formatUser),
    getModifiedEvent(EventDb),
    render("create"),
);

// POST modify event form
router.post("/:eventId",
    getModifiedEvent(EventDb),
    createUpdateEvent(EventDb),
    redirect("/"),
);

// POST change event status
router.post("/:eventId/status",
    participate(EventDb),
    redirect("/"),
);

// DELETE event
router.delete("/:eventId",
    deleteEvent(EventDb),
);

export default router;
