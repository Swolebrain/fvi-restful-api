var port = 4004;
var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");
var http = require('request');


var app = express();
app.set("abspath", __dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', "Content-Type")
	next();
});


// ******************QUOTES ***********************************//
var quotes = require("./files/quotes.js");
app.get("/quote", function(req, res){
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

app.get(["/exercise/:arg1", "/exercises/:arg1"],
        require("./routes/getEx.js")(exercises));

app.post("/get-results", require("./routes/gradeEx.js")(exercises));


//***************************SUDOKU**********************************//
app.get("/sudoku", require('./routes/sudoku.js')(http));
app.post("/sudoku", require('./routes/sudoku-validator.js'));

//***************************SUGGESTION BOX**************************//
app.post('/suggestions', require('./routes/suggestions')());

//*****************RESUME EMAILER & CONTACT FORM*********************//
app.post("/resume-emailer", require('./routes/resume-emailer.js')(fs));
app.post("/email", require('./routes/contact-email.js').post(fs));
app.get("/email", require('./routes/contact-email.js').get);
app.post("/guide", require('./routes/contact-email.js').guide(app));
app.get("/guide", function(req, res){res.send("You need a post request")});

//*****************ONLINE AVOCATIONAL ENROLLMENT*********************//
app.post("/enrollment", require('./routes/contact-email.js')
		.genericForm(app,'New enrollment to FVI Avocational Program', 'vmoreno@fvi.edu'));


//*****************FAKE FORM FOR FINAL EXAM 1*********************//
app.post('/fakeform', require('./routes/contact-email.js').fakeform);

//*****************QUIZ APP******************************************//
app.get("/quiz", require('./routes/quiz-app.js').getQuestions );
app.get("/quiz-get-answer/:id", require('./routes/quiz-app.js').checkAnswer );
app.post("/quiz-question", require('./routes/quiz-app.js').postQuestion );
app.get("/quiz-question", require('./routes/quiz-app.js').getPostQuestion );

//*****************CODING ASSESSMENT********************************//
app.post("/assessment1", require('./routes/contact-email').assessment1);

//*****************CODE CAMP APPLICATION FORM*************************//
app.post("/ccapply", require('./routes/contact-email.js').ccapply);

//********************LANDING PAGES ********************************//
app.post('/submitITform', require('./routes/velocifyForms.js').itcampaign1(http, "https://secure.velocify.com/Import.aspx?Provider=LandingPageB&Client=30010&CampaignId=1087"));
app.post('/submittechfviform', require('./routes/velocifyForms.js').itcampaign1(http, "https://secure.velocify.com/Import.aspx?Provider=FVI&Client=30010&CampaignId=1093"));

app.listen(port);
console.log("Server listening on port "+port);
