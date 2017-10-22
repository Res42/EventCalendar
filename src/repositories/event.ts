import { IEvent } from "../typings/i-event";
import * as mongoose from "mongoose";

interface EventEntity extends IEvent, mongoose.Document {}

let eventSchema = new mongoose.Schema({
    name: String,
    from: Date,
    to: Date,
    location: String,
    comment: String,

    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Participation" }],
});

let EventDb = mongoose.model<EventEntity>("EventCalendar", eventSchema, "Event");

export { EventEntity, EventDb };
