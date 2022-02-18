const nodemailer = require("nodemailer");
require("dotenv").config();

// console.log(process.env.mail_host);
// console.log(process.env.Username);



module.exports = nodemailer.createTransport({
    host: process.env.mail_host,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "b8d1a691d7c7da", // generated ethereal user
        pass: process.env.Password, // generated ethereal password
    },
});
