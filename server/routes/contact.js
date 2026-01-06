// api/contact.js (works with Vercel serverless)
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { firstname, lastname, emailaddress, subject, emailmessage } = req.body;

  const msg = {
    to: process.env.MY_EMAIL,
    from: process.env.SENDGRID_VERIFIED_SENDER,
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
    await sgMail.send(msg);
    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("SendGrid error:", error);
    return res.status(500).json({ success: false, message: "Email failed to send." });
  }
}
