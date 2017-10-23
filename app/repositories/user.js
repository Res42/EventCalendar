"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    displayName: String,
    emailAddress: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    participations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Participation" }],
});
let UserDb = mongoose.model("User", userSchema, "User");
exports.UserDb = UserDb;
//# sourceMappingURL=user.js.map