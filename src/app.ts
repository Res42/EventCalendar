"use strict";

import * as express from "express";
import * as path from "path";

const app: express.Express = express();

app.use(express.static(path.join(__dirname, "views")));

export default app;
