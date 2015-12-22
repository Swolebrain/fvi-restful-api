module.exports = function(exercises){
  var cl = console.log;
  //needs to receive an object with url, language, studentCode, executionContext
  return function(req,res){
    var studentSoln = req.body;
    try{
      var theProblem = locateProblem(studentSoln.url, studentSoln.language );
    }
    catch (e){
      res.end(e);
    }
    res.setHeader('Content-Type', 'application/json');
    if (!theProblem.hasOwnProperty("language") || theProblem.language === "JS"){
      //here is where i would branch off to do shit like store the students
      //results before sending the response back
      var rez = evalJS(studentSoln, theProblem);
      console.log(JSON.stringify(rez));
      res.end(JSON.stringify(rez));
    }
    
    
    
    
    
    /*
    
    */
    function evalJS(studentSoln, theProblem){
      //retObj is an array of JSON objects containing test case, expected
      //result, actual result
      var retObj = [];
      //if it has prop testCases then it's a function, so eval as such
      if (theProblem.hasOwnProperty("testCases")){
        theProblem.testCases.forEach(function(elem, idx){
          try{
            var result = eval(studentSoln.studentCode+elem);
          }catch(e){
            var result = e;
          }
          retObj.push({
            testCase: elem,
            expected: theProblem.testResults[idx],
            actual: result
          })
        });
      }
      else{ //not a function, need to either get console output or eval expr
        var expr1 = evalExprJS(theProblem.testResults[0], studentSoln.executionContext);
        console.log(expr1);
        retObj.push({
          testCase: "Run",
          expected: expr1,
          actual : evalExprJS(studentSoln.studentCode, studentSoln.executionContext)
        });
      }
      return retObj;
      
      function evalExprJS(str, context, problem) {
        var stringifiedContext = "";
        for (var i in context){
          //if str is a template, replace variables with values from context
          var re = new RegExp("{{"+i+"}}", "g");
          str = str.replace(re, context[i])
          //append current variable to stringified context
          stringifiedContext+= "var "+i+"="+context[i]+";";
        }
        cl(stringifiedContext);
        var stdout = "";
        var console = {
          log: function (str) {
            stdout += str + "\n";
          }
        };
        try {
          var result = eval(stringifiedContext+str);
        } catch (e) {
          result = e;
        }
        return stdout.length > 0 ? stdout : result;
      }
    }
    
    function locateProblem(url, language){
      var index = -1;
      for (var i = 0; i < exercises.length; i++){
        if (exercises[i].url === url && 
            (!exercises[i].hasOwnProperty("language") ||
            exercises[i].language === language)) {
          index = i;
          break;
        }
      }
      if (index < 0) throw "Error - problem url not found";
      return exercises[i];
    }
    
    
  }
};