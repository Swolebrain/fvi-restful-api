module.exports = function(exercises){
  return function(req, res){
    if (req.params.arg1==="all"){
        var retVal = [];
        res.setHeader('Content-Type', 'application/json');
        for (var i = 0; i < exercises.length; i++){
            retVal.push({
                "shortName" : exercises[i].shortName,
                "url" : exercises[i].url
            });
        }
        res.end(JSON.stringify(  retVal  ) );
        return;
    } //end all case
    else if(req.params.arg1.indexOf("$diff") === 0){
      var diff = req.params.arg1.split("-")[1];
      var retVal = exercises.filter( e => e.difficulty===diff );
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(retVal));
      return;
    }
    var index = 0;
    for (var i = 0; i < exercises.length; i++){
        if (exercises[i].url === req.params.arg1){
            index = i;
            break;
        }
    } 
    var retVal = exercises[i]; 	
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(retVal));
  }
}