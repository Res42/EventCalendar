"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let eventSchema = new mongoose.Schema({
    name: String,
    from: Date,
    to: Date,
    location: String,
    comment: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Participation" }],
});
let EventDb = mongoose.model("EventCalendar", eventSchema, "Event");
exports.EventDb = EventDb;
//# sourceMappingURL=event.js.map