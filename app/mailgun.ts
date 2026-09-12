import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

export function getMailgunClient() {
  const apiKey = process.env.MAILGUN_API_KEY;

  if (!apiKey) {
    throw new Error("MAILGUN_API_KEY is not configured");
  }

  return mailgun.client({
    username: "api",
    key: apiKey,
    url: process.env.MAILGUN_BASE_URL || "https://api.mailgun.net",
  });
}
