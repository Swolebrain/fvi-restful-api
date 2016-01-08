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
};

module.exports = function(fs){
  return function(req, res){
    var fromEmail = req.body.from;
    var htmlFileName = req.body.html_file_name;
    var dest = req.body.dest_email;
    var subject = req.body.subject;
    
    fs.readFile("/root/fvi-restful-api/emails/"+htmlFileName, function(err, data){
      if (err) {
        console.log(err);
        res.end("Something went wrong when reading your html file");
        return;
      }
      mailOptions.from = fromEmail;
      mailOptions.to = dest;
      mailOptions.subject = subject;
      mailOptions.html = data;
      transporter.sendMail(mailOptions, function(error, info){
        if (error){
          console.log("Something went wrong with sending email");
          res.end("Something went wrong with sending email");
          
        }
        else{
          console.log("Message sent by "+fromEmail+" to "+dest);
          res.end("Message sent by "+fromEmail+" to "+dest);
        }
      });
    });
  }
}