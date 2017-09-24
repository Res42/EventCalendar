"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer(app_1.default)
    .listen(port);
//# sourceMappingURL=startup.js.map