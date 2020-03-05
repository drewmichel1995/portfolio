const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENTID,
  process.env.GMAIL_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

router.post("/", function(req, res) {
  res.set("Content-Type", "application/json");

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "drewmichel1995@gmail.com",
      clientId: process.env.GMAIL_CLIENTID,
      clientSecret: process.env.GMAIL_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  var mailOptions = {
    from: req.body.fromEmail,
    to: "drewmichel1995@gmail.com",
    subject: "fromPortfolio" + req.body.subject,
    text: req.body.emailContent
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });

  res.send('{"message":"Email sent."}');
});

module.exports = router;
