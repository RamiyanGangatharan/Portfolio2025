// api/contact.js (Vercel serverless using SMTP)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { firstname, lastname, emailaddress, subject, emailmessage } = req.body;

  // Create SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstname} ${lastname}" <${process.env.FROM_EMAIL}>`,
    to: process.env.MY_EMAIL,
    subject: subject || "No Subject",
    text: `${firstname} ${lastname} - ${emailaddress}\n\n${emailmessage || "No Message"}`,
    html: `
      <div style="font-family: Georgia, serif; line-height: 1.6; padding: 30px; max-width: 600px; margin: auto; border: 1px solid #ccc;">
        <div style="margin-bottom: 10px;">
          <p><strong>From:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${emailaddress}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        <div style="white-space: pre-wrap;">
          <p>${emailmessage || "No message provided."}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("SMTP error:", error);
    return res.status(500).json({ success: false, message: "Email failed to send." });
  }
}
