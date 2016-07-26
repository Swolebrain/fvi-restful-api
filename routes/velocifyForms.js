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
var mailOptions = { from: "noreply@fvi-grad.com",
          to: "thecodingteacher@gmail.com"
  };

module.exports =  {
  itcampaign1: function(request, campaignUrl){
    return function(req, res){
      var frmResult = validateForm(req.body);
      if ( frmResult != "valid"){
        res.end(frmResult);
        return;
      }
      request.post(campaignUrl,
        {form: req.body },
        function(error, xhr, resp){
          var resText;
          if (error){
            mailOptions.subject = "Form submission from techhire/overtown";
            mailOptions.html = "This form was NOT posted to velocify"+
                            JSON.stringify(req.body, null, 4);

            resText = error;
          }
          else {
            mailOptions.subject = "Form submission from techhire/overtown";
            mailOptions.html = "This form was successfully posted to velocify"+
                            JSON.stringify(req.body, null, 4);
            resText = resp;
          }
          transporter.sendMail(mailOptions, function(error2, info){
            if (error2) console.log("Error sending mail for "+JSON.stringify(req.body));
            else console.log("Sent mail on behalf of techhire/overtown");
            console.log(resText);
            res.end(resText);
          });
        });
    };
  }
}

function validateForm(frm){
  if (!frm.fname){
    frm.fname = frm.first_name;
    frm.lname = frm.last_name;
    frm.phone = frm.phone1;
  }
	if ( frm.fname.length < 2 || frm.lname.length < 2)
		return "Please include your first name";

	if (!frm.email.match(/^[A-z-_.]{4,50}@[A-z-_.]+\.[A-z]{2,4}$/) )
		return "Please enter an email with the structure address@domain.com (or .net, .co, etc)";

	if (!frm.phone.match(/^[( ]*[0-9]{3}[) -]*[0-9]{3}[ -]*[0-9]{4}$/) )
		return "Please enter a nine-digit US phone number in the format xxx-xxx-xxxx.";

	return "valid";

}
