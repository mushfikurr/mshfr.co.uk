"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transportOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(transportOptions);

export type StatusType = {
  status: string;
  message: string;
};

export async function sendMailAction(
  prevState: StatusType,
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const captchaToken = formData.get("cf-turnstile-response");

  if (!captchaToken) {
    return {
      status: "error",
      message: "Captcha verification failed. Please try again.",
    };
  }

  try {
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_KEY!,
          response: captchaToken.toString(),
        }),
      }
    );

    const verifyJson = await verifyRes.json();

    if (!verifyJson.success) {
      return {
        status: "error",
        message:
          "Captcha verification failed. Please try again or refresh the page.",
      };
    }
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return {
      status: "error",
      message:
        "Error verifying captcha. Please refresh the page and try again.",
    };
  }

  // Send mail
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "[mshfr.co.uk] Contact form enquiry",
      text: `${message}`,
      html: `<p><strong>From:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);

    return {
      status: "success",
      message:
        "Thanks for reaching out! I'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Mailer error:", error);
    return {
      status: "error",
      message:
        "Error submitting form. Please try emailing me directly at mushfikur0@gmail.com.",
    };
  }
}
