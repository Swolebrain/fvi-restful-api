var port = 4004;
var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");



var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
});


// ******************QUOTES ***********************************//
var quotes = require("./files/quotes.js");
app.post("/quote", function(req, res){
	//console.log("Responding on /quotes: ");
	var quoteVal =  quotes[Math.floor(Math.random()*quotes.length)].split("--");
	var quote = quoteVal[0];
	var author = quoteVal[1];
	var topic = quoteVal[2];
	var obj = { quote: quote, author: author, timeStamp: new Date(), topic: topic };
	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(obj));	
});

var riddles = require("./files/riddles.js");
//*****************riddle of the day**********************************//
app.get("/riddles", function(req, res){
	var theRiddle = riddles[Math.floor(Math.random()*riddles.length)];	
	console.log("received request for riddle, sending back: "+JSON.stringify(theRiddle));
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(theRiddle));
});

//*****************EXERCISE GRADER**********************************//
var exercises = require('./files/jsproblems.js');
app.get(["/exercise/:arg1", "/exercises/:arg1"], function(req, res){
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
});



app.listen(port);
console.log("Server listening on port "+port);
