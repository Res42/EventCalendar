import * as nodemailer from "nodemailer";

let EmailService = new Promise<nodemailer.Transporter>((resolve, reject) => {
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

export { EmailService };
