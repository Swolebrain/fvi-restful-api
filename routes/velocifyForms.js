module.exports =  {
  itcampaign1: function(request){
    return function(req, res){
      request.post("https://secure.velocify.com/Import.aspx?Provider=LandingPageB&Client=30010&CampaignId=1087",
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
