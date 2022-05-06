async function sendEmail(
  message,
  SENDGRID_API_KEY,
  SENDGRID_SENDER_EMAIL,
  SENDGRID_SENDER_NAME
) {
  const email = await fetch("https://api.sendgrid.com/v3/mail/send", {
    body: JSON.stringify({
      from: {
        email: SENDGRID_SENDER_EMAIL,
      },
      subject: "SendGrid Form",
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
      personalizations: [
        {
          to: [{ email: "jocvegar@gmail.com", name: SENDGRID_SENDER_NAME }],
        },
      ],
    }),
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return new Response(email);
}

export async function onRequestPost(context) {
  const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME } =
    process.env;
  const { request } = context;
  const body = JSON.parse(request.body);
  const message = body.message;

  sendEmail(
    message,
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME
  );
}
