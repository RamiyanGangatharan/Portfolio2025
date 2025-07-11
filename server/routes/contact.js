const express = require('express');
const router = express.Router();
const transporter = require('../config/mailer');

router.post('/', (req, res) => {
  const { firstname, lastname, emailaddress, subject, emailmessage } = req.body;

  transporter.sendMail({
    from: `"${firstname} ${lastname}" <${emailaddress}>`,
    to: process.env.SMTP_USER,
    subject: subject || "No Subject",
    text: `${firstname} ${lastname} - ${emailaddress}\n\n${emailmessage || "No Message"}`,
    html: `
      <div style="font-family: Georgia, serif; line-height: 1.6; padding: 30px; max-width: 600px; margin: auto; border: 1px solid #ccc;">
        <div style="margin-bottom: 10px;">
          <p><strong>From:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${emailaddress}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        <div style="margin-bottom: 5px;"><p>To whom it may concern,</p></div>
        <div style="white-space: pre-wrap;"><p>${emailmessage || "No message provided."}</p></div>
        <div style="margin-top: 30px;"><p>Sincerely,</p><p>${firstname} ${lastname}</p></div>
      </div>
    `,
  })
  .then(info => {
    console.log("Email sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully." });
  })
  .catch(error => {
    console.error("Email failed:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  });
}); 

module.exports = router;
