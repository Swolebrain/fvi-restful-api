var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var wellknown = require('nodemailer-wellknown');

var transporter= nodemailer.createTransport({
service: 'gmail',
  auth:{
    user:'fvialumn@gmail.com',
    pass:'fvifvifvi!987'
  }
});
var mailOptions = {
  from: 'Contact from your Website <noreply@gmail.com',
  subject: 're: Your website'
};

module.exports = {
  
  post: function(fs){
    return function(req, res){
      for (var i in req) console.log(req[i]);
      var emailBody = "New email from: " + req.body.full_name;     
      emailBody += "<br>Phone: " + req.body.phone + "<br>Date: "+req.body.ddate+"<br>Time: "+
        req.body.hora+"<br>Email: "+req.body.email+"<br>Message: "+req.body.message;

      if (req.body.subject){
        mailOptions.subject = req.body.subject;
      }
      mailOptions.to = req.body.dest_email;

      mailOptions.html = emailBody;

      transporter.sendMail(mailOptions, function(error, info){
        if (error){
          console.log("Something went wrong with sending email - \n"+error);
          res.end("Something went wrong with sending email\n"+error);

        }
        else{
          console.log("Message sent "+info.response);
          res.end("Email sent to "+mailOptions.to);
        }
      });
    };

  },
  get: function(req, res) {
      res.end("post the contact form to the /email URL in order to have "+
              "it forwarded to the email in the dest_email form field."+
      "\nVariable names are full_name, phone, ddate, hora, email, message, subject, and the dest_email hidden input.");
    }
};