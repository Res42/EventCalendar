import * as express from "express";
import render from "../middlewares/render-middleware";
import authenticated from "../middlewares/authenticated-middleware";
import listEvents from "../middlewares/event/list-events-middleware";
import logout from "../middlewares/logout-middleware";
import redirect from "../middlewares/redirect-middleware";

const router = express.Router();

// DO NOT register global middlewares for this router.
// Because this is the "/" root router, and the registered middlewares will be registered to the other routers.
// https://github.com/pillarjs/router/issues/38
// router.use(
//     // NO
// );

// GET event list
router.get("/",
    authenticated(),
    listEvents(),
    render("list.html"),
);

// POST logout
router.post("/logout",
    authenticated(),
    logout(),
    redirect("/login"),
);

export default router;
