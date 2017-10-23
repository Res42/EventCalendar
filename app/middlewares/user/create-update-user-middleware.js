"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../repositories/user");
/**
 * Creates or updates an user from the request data.
 * - Creates if there is no res.locals.model;
 * - Updates if there is res.locals.model -> the model is the modified user.
 */
function createUpdateUser() {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.userPassword !== req.body.userPasswordAgain) {
                return next(new Error("Given passwords does not match."));
            }
            if (!res.locals.model) {
                yield user_1.UserDb.create({
                    userName: req.body.userName,
                    displayName: req.body.userDisplayName,
                    // plaintext password because laziness
                    password: req.body.userPassword,
                    emailAddress: req.body.userEmail,
                    events: [],
                    participations: [],
                });
                return next();
            }
            else {
                return next();
            }
            // TODO: update
        });
    };
}
exports.default = createUpdateUser;
;
//# sourceMappingURL=create-update-user-middleware.js.map