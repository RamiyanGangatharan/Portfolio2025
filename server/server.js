require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - only allow your frontend origin
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Simple root route
app.get('/', (req, res) => { res.json({ message: "Hello from the backend!" });});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

// Verify mail server connection
transporter.verify((error, success) => {
  if (error) console.error("Nodemailer error:", error);
  else console.log("Server is ready to take messages");
});

// Contact form POST route
app.post("/contact", (req, res) => {
  const { firstname, lastname, emailaddress, subject, emailmessage } = req.body;

  // Respond right away for the redirect and prevent resubmission
  res.status(200).json({ success: true, message: "Message received, sending email..." });

  // Send email async using an HTML template
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
  .then(info => console.log("Email sent:", info.messageId))
  .catch(error => console.error("Email failed:", error));
});

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
