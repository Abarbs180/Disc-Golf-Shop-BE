import sgMail from "@sendgrid/mail";

const forgotPasswordEmail = (email, id, uuid) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    // Include user's actual email in production
    to: "austinbarber180@gmail.com",
    from: "discgolfstore2022@gmail.com",
    subject: "Reset Password",
    html: `
      <div>
        Please click the link below to reset your password.
      </div> 
      <br></br>
      <a href="http://localhost:3001/user/verifyAccount?user=${id}&auth=${uuid}">Reset Password</a>
      <div></div>
      <br></br>
      <div><strong>DO NOT REPLY TO THIS EMAIL</strong></div>
    `,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default forgotPasswordEmail;
