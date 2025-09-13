import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Valid email is required." });
  }

  const msg = {
    to: email,
    from: "srimankowshik005@gmail.com", // must be verified in SendGrid
    subject: "Welcome to DEV@Deakin!",
    text: "Thank you for joining DEV@Deakin. We're excited to have you!",
    html: `<strong>Thanks for subscribing to DEV@Deakin!</strong><br>You're now part of our developer community.`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: "Welcome email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error.message);
    return res.status(500).json({ message: "Failed to send welcome email." });
  }
}
