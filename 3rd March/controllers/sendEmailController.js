var nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
           auth: {
                user: 'random',
                pass: 'random',
             },
        secure: true,
        });
    
const mailData = {
            from: 'aquib@tabdeel.in',  // sender address
              to: 'aquib.ajani@herovired.com',   // list of receivers
              subject: 'Sending Email using Node.js',
              text: 'That was easy!',
              html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };
transporter.sendMail(mailData, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
}

module.exports = {sendEmail}