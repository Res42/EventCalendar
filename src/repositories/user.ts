import { IUser } from "../typings/i-user";
import * as mongoose from "mongoose";

interface UserEntity extends IUser, mongoose.Document {}

let userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    displayName: String,
    emailAddress: { type: String, unique: true },
    password: String,
    passwordResetToken: String,

    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    participations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Participation" }],
});

let UserDb = mongoose.model<UserEntity>("User", userSchema, "User");

export { UserEntity, UserDb };
