import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER_OFERT,
        pass: process.env.EMAIL_KEY_OFERT
    }
});

export default transporter;