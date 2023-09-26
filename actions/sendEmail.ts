"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactEmailForm from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;

  try {
    await resend.emails.send({
      from: "Contact Form <onboard@resend.dev>",
      to: "wajidkashoo14@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmailForm, { 
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data
  }
};
