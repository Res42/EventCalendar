"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
let EmailService = new Promise((resolve, reject) => {
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            reject(err);
        }
        // create reusable transporter object using the default SMTP transport
        resolve(nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass,
            },
        }));
    });
});
exports.EmailService = EmailService;
//# sourceMappingURL=email.js.map