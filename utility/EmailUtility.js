import nodemailer from "nodemailer";
export async function sendMail(email, subject, message) {
  const transproter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: "Out of Bugs News Portal <info@teamrabbil.com>",
    to: email,
    subject,
    text: message,
  };

  return await transproter.sendMail(mailOptions);
}
