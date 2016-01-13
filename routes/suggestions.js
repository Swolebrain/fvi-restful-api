module.exports = function(){
  return function(req,res){
    console.log("Request came in: ");
    console.log(JSON.stringify(req.body));
    var x = req.body;
    if (x.hasOwnProperty('fname') &&
       x.hasOwnProperty('lname') && 
       x.hasOwnProperty('message') &&
       x.hasOwnProperty('serviceName'))
      res.end("Message received successfully.");
    else
      res.end("Message failed. Missing one or more of the following properties: fname, lname,"+
             "message, serviceName");
  }
};