// Test script to send an email using Brevo (Sendinblue) API from terminal
require('dotenv').config();
const SibApiV3Sdk = require('sib-api-v3-sdk');

const apiKey = process.env.SMTP_PASS;
const from = process.env.SMTP_FROM;
const to = process.env.TEST_EMAIL_TO || process.env.SMTP_FROM.match(/<(.+?)>/)?.[1]; // fallback to sender

if (!apiKey || !from || !to) {
  console.error('Missing SMTP_PASS (Brevo API key), SMTP_FROM, or TEST_EMAIL_TO in environment variables.');
  process.exit(1);
}

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = apiKey;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
sendSmtpEmail.sender = { name: from.replace(/<.*?>/, '').trim(), email: from.match(/<(.+?)>/)?.[1] || from };
sendSmtpEmail.to = [{ email: to }];
sendSmtpEmail.subject = 'Test Email from Brevo API';
sendSmtpEmail.textContent = 'This is a test email sent from the Brevo API using sib-api-v3-sdk.';
sendSmtpEmail.htmlContent = '<strong>This is a test email sent from the Brevo API using sib-api-v3-sdk.</strong>';

apiInstance.sendTransacEmail(sendSmtpEmail)
  .then(() => {
    console.log('Test email sent successfully to', to);
  })
  .catch((error) => {
    console.error('Failed to send test email:', error.message || error);
    process.exit(1);
  });
