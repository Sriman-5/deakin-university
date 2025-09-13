const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  try {
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required." }),
      };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: "srimankowshik005@gmail.com", 
      subject: "Welcome to DEV@Deakin!",
      text: "Thank you for joining DEV@Deakin. We're excited to have you!",
      html: `<strong>Thanks for subscribing to DEV@Deakin!</strong><br>You're now part of Deakin community.`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome email sent successfully!" }),
    };
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send welcome email." }),
    };
  }
};
