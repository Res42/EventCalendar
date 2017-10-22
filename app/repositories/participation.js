"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let participationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    state: Number,
});
participationSchema.index({ user: 1, event: 1 }, { unique: true });
let ParticipationDb = mongoose.model("EventCalendar", participationSchema, "Participation");
exports.ParticipationDb = ParticipationDb;
//# sourceMappingURL=participation.js.map