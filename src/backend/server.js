const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/send-welcome", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const msg = {
    to: email,
    from: "srimankowshik005@gmail.com", 
    subject: "Welcome to DEV@Deakin!",
    text: "Thank you for joining DEV@Deakin. We're excited to have you!",
    html: `<strong>Thanks for subscribing to DEV@Deakin!</strong><br>You're now part of deakin community.`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Welcome email sent to ${email}`);
    res.status(200).json({ message: "Welcome email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error.message);
    res.status(500).json({ message: "Failed to send welcome email." });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

