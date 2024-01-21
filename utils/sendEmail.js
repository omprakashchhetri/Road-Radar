// const nodemailer = require("nodemailer");
const sendgrid = require("@sendgrid/mail");

const sendEmail = async (options) => {
  sendgrid.setApiKey(process.env.API_KEY);

  // const transporter = await nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  //   // service: process.env.EMAIL_SERVICE,
  //   // auth: {
  //   //   user: process.env.EMAIL_USERNAME,
  //   //   pass: process.env.EMAIL_PASSWORD,
  //   // },
  // });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  sendgrid
    .send(mailOptions)
    .then((response) => console.log("Sent Successfully!"))
    .catch((err) => console.log(err.mailOptions));

  //   transporter.sendMail(mailOptions, function (err, info) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(info);
  //     }
  //   });
};

module.exports = sendEmail;

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'carroll.nitzsche@ethereal.email',
//       pass: '7tYArVXeTJUJgvjdvZ'
//   }
// });
