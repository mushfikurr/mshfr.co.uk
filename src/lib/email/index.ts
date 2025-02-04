"use server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMailAction(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "[mshfr.co.uk] Contact form enquiry",
      text: `${message}`,
      html: `<p>${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log(prevState);
    return {
      status: "success",
      message:
        "Thanks for reaching out! I'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message:
        "Error submitting form. Please try emailing me directly at mushfikur0@gmail.com",
    };
  }
}
