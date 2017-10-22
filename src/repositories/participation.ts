import { IParticipation } from "../typings/i-participation";
import { ParticipationState } from "../enumerations";
import * as mongoose from "mongoose";

interface ParticipationEntity extends IParticipation, mongoose.Document {}

let participationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },

    state: Number,
});

participationSchema.index({ user: 1, event: 1 }, { unique: true });


let ParticipationDb = mongoose.model<ParticipationEntity>("EventCalendar", participationSchema, "Participation");

export { ParticipationEntity, ParticipationDb };
