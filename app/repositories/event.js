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
    participants: [{
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            state: Number,
        }],
});
let EventDb = mongoose.model("Event", eventSchema, "Event");
exports.EventDb = EventDb;
//# sourceMappingURL=event.js.map