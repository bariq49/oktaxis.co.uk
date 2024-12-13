import nodemailer from "nodemailer";

interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: EmailParams) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@oktaxis.co.uk", 
        pass: ";U3nJxy=hs",
      },
    });

    const mailOptions = {
      from: "info@oktaxis.co.uk",
      to,
      subject,
      html,
    };

    // Debug: log mail options
    console.log("Mail Options:", mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error details:", error); // Log full error details
    throw new Error("Email sending failed");
  }
};

export default sendEmail;
