
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);

    const msg = {
      to: email,
      from: "srimankowshik005@gmail.com", 
      subject: "Welcome to DEV@Deakin!",
      text: "Thanks for signing up ",
      html: "<strong>Thanks for signing up</strong>",
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Welcome email sent to ${email}` }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
