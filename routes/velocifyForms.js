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
          if (error){
            console.log(error);
            res.end(error);
          }
          else {
            console.log(resp);
            res.end(resp);
          }
        });
    };
  }
}

function validateForm(frm){
  if (!frm.fname){
    frm.first_name = frm.fname;
    frm.last_name = frm.lname;
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
