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
//var transporter = nodemailer.createTransport('smtps://fvialumn%40gmail.com:fvifvifvi!987@smtp.gmail.com');


module.exports = {

  post: function(fs){
    var mailOptions = {
      from: 'Contact from your Website <noreply@gmail.com>',
      subject: 'Your website'
    };
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
  },
  fakeform: function(req, res){
    if (!req.query || !req.query.name || !req.query.email || !req.query.phone)
      res.end("error - please fill out all fields");
    else
      res.end("ok");
  },
  ccapply: function(req, res){
    var html = "";
    for (var k in req.body){
      if (req.body[k])
        html += `<p><strong>${k}:</strong> ${req.body[k]}</p>`;
      else{
        console.log("This is the field that was missing: "+k);
        res.end("error: You must fill out all form fields");
        return;
      }
    }

    var mailOptions = {
      from: req.body.email,
      subject: 'New application to FVI summer Code Camp',
      to: 'thecodingteacher@gmail.com',
      html: html
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error){
        console.log(new Date().toString()+"- Something went wrong with sending email - \n"+error);
        res.end("error:\n"+error);

      }
      else{
        console.log(new Date().toString()+"- Message sent "+info.response);
        res.end("Email sent!");
      }
    });
  },
  genericForm: function(app, subject, receiver){
    return function(req, res){
      console.log("Received request for genericForm endpoint");
      var html = "";
      //if (!req.body.dest_email) res.status(400).send("You need a dest_email");
      for (var k in req.body){
        if (typeof req.body[k] !== 'undefined'){
          html += `<p><strong>${k}:</strong> ${req.body[k]}</p>`;
        }
        else{
          console.log("This is the field that was missing: "+k);
          res.json({error: "You must fill out all form fields"});
          return;
        }
      }
      console.log("Built html: "+html);
      var mailOptions = {
        from: req.body.email,
        subject: subject,
        to: receiver,
        //cc: 'bcartaya@fvi.edu',
        html: html
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error){
          console.log(new Date().toString()+"- Something went wrong with sending email - \n"+error);
          res.json({error: error});

        }
        else{
          console.log(new Date().toString()+"- Message sent "+info.response);
          res.json({status: 'success', info: info})
        }
      });
    }
  },
  guide : function(app){
    return function(req, res){
      console.log("Received a request for a guide!\n"+JSON.stringify(req.body));
      var html = "";
      for (var k in req.body){
        if (req.body[k])
          html += `<p><strong>${k}:</strong> ${req.body[k]}</p>`;
        else{
          console.log("This is the field that was missing: "+k);
          res.end("error: You must fill out all form fields");
          return;
        }
      }

      var mailOptions = {
        from: req.body.email,
        subject: 'New Request for WD guide',
        to: 'thecodingteacher@gmail.com',
        html: html
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error){
          console.log(new Date().toString()+"- Something went wrong with sending email - \n"+error);
          res.end("error:\n"+error);

        }
        else{
          console.log(new Date().toString()+"- Message sent "+info.response);
          res.sendFile(app.get("abspath")+"/files/2016_guide.pdf");
        }
      });
    }
  }
};
