var questions = [
  {
    id: 0,
    questionText: `What is the value of x after the following statements?<br>
                  <code>var x = 5;<br>x = x + x*x;<br>
                  var y = "hello";<br>
                  x += y;</code>`,
  answers: ["An error occurs", "30", "30hello", "hello"],
  correctAnswerIndex:2},
  {
    id: 1,
    questionText: `What is the value of str?<br>
<code>
var obj = {crazy: "town", data: {pet: "rock", hobby: "rockin"}};<br>
var propName1 = "data";<br>
var propName2 = "hobby";<br>
var str = obj[propName1][propName2];<br>
</code>`,
    answers: ["rock", "rockin", "town"],
    correctAnswerIndex: 1
  },
  {
    id:2,
    questionText: `What is the value of the variable drumpf?<br>
<code>
var str = 'Make Donald Drumpf again';<br>
var drumpf = str.substring(5, 18);<br>
</code>`,
    answers: ["Donald Drumpf", "drumpf", "Drumpf"],
    correctAnswerIndex: 0
  },
  {
    id: 3,
    questionText: `What is the value of the variable x after the following code executes?<br>
<code>
var x = 0;<br>
var arr = [45,25,10,20,30];<br>
for (var i =0; i < arr.length; i++)<br>
&nbsp;&nbsp;&nbsp;&nbsp; x += arr[i];
</code>`,
    answers: ["0", "30", "130"],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    questionText: `What is the value of the variable x after the following code executes?<br>
<code>
var x = 1;<br>
var arr = [1,2,3,4,5];<br>
for (var i =0; i < arr.length; i++)<br>
&nbsp;&nbsp;&nbsp;&nbsp; x *= arr[i];<br>
</code>`,
    answers: ["120", "60", "90", "15"],
    correctAnswerIndex: 0
  }
];

module.exports = {
  getQuestions: function(req,res){
    var l = Object.keys(questions).length;
    var start = Math.floor(Math.random()*l);
    var increment = Math.floor(Math.random()*l);
    var ret = [];
    for (var i =0; i < 5; i++){
      var q = questions[ (start + i*increment)%questions.length ];
      ret.push({id: q.id, questionText: q.questionText, answers: q.answers});
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(ret));
  },
  checkAnswer: function(req,res){
    var reqID = req.params.id;
    var q = questions.filter( e => e.id==reqID?true:false );
    console.log("Got a hit for question "+reqID+", found "+JSON.stringify(q));
    if(q.length > 0){
      res.setHeader('Content-Type', 'text/html');
      res.end(JSON.stringify(q[0].answers[q[0].correctAnswerIndex]));
    }
    else
      res.end("error - question not found");
  },
  postQuestion: function(req,res){
    res.end("not supported yet");
  },
  getPostQuestion: function(req,res){
    res.end(`The fields to post to '/quiz-question' are:
questionText: string,
answers: Array,
correctAnswerIndex: 0`);
  }
};