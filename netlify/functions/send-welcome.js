// netlify/functions/send-welcome.js
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  // Basic preflight handling for CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  try {
    const { email } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    const msg = {
      to: email,
      from: "srimankowshik005@gmail.com",
      subject: "Welcome to DEV@Deakin!",
      text: "Thanks for signing up",
      html: "<strong>Thanks for signing up</strong>",
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: `Welcome email sent to ${email}` }),
    };
  } catch (err) {
    console.error("send-welcome error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message || "Email send failed" }),
    };
  }
};
