// const client = require("@sendgrid/mail");

// function sendEmail(client, message, senderEmail, senderName) {
//   return new Response((fulfill, reject) => {
//     const data = {
//       from: {
//         email: senderEmail,
//         name: senderName,
//       },
//       subject: "SendGrid Form",
//       to: "jocvegar@gmail.com",
//       html: `New form submission<br/> ${message}`,
//     };

//     client
//       .send(data)
//       .then(([response]) => {
//         fulfill(response);
//       })
//       .catch((error) => reject(error));
//   });
// }
// export async function onRequestPost(event, context, callback) {
//   // exports.handler = function (event, context, callback) {
//   const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME } =
//     process.env;

//   const body = JSON.parse(event.body);
//   const message = body.message;

//   client.setApiKey(SENDGRID_API_KEY);

//   sendEmail(client, message, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
//     .then((response) => callback(null, { statusCode: response.statusCode }))
//     .catch((err) => callback(err, null));
// }
