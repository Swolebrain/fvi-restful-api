module.exports =  {
  itcampaign1: function(request){
    return function(req, res){
      var result = validateForm(req.body);
      console.log(req.body);
      /*request.post("https://secure.velocify.com/Import.aspx?Provider=LandingPageB&Client=30010&CampaignId=1087",
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
        });*/
    };
  }
}

function validateForm(frm){
		if ( frm.full_name.length < 3 ||
		/*$("#full_name").val().split(" ").length <= 1)
			return "Please include your full name";

		if (!$("#email").val().match(/^[A-z-_.]{4,50}@[A-z-_.]+\.[A-z]{2,4}$/) )
			return "Please enter an email with the structure address@domain.com (or .net, .co, etc)";

		if (!$("#phone").val().match(/^[( ]*[0-9]{3}[) -]*[0-9]{3}[ -]*[0-9]{4}$/) )
			return "Please enter a nine-digit US phone number in the format xxx-xxx-xxxx.";

		if ( $("#parent_name").val().length < 3 || $("#parent_name").val().split(" ").length <= 1 )
			return "Please include your parent's full name.";

			if (!$("#parent_phone").val().match(/^[( ]*[0-9]{3}[) -]*[0-9]{3}[ -]*[0-9]{4}$/) ||
						$("#parent_phone").val() === $("#phone").val())
				return "Please your parent's phone number in the format xxx-xxx-xxxx.";*/

		return "valid";
	}
