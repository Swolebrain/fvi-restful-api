
module.exports = function(http){
  return function(req,res){
    http.get("http://davidbau.com/generated/sudoku.txt", 
             function(error, response, body){
        if (err)
          res.status(400).send('Something happened when we tried to get the sudoku puzzle from http://davidbau.com/generated/sudoku.txt x_X');
        res.setHeader('Content-Type', 'application-json');
        res.end(JSON.stringify(loadSudoku(body)));
    });
    function loadSudoku(puzzle){
      var rowStrings = puzzle.split("\n").slice(1,18).
        filter(function(c){
          if (c.match(/[0-9]/)) return true;
          else return false;
        }).map(function(row){
          return [row[2], row[6], row[10], row[14], row[18],
                 row[22], row[26], row[30], row[34]];
        });
      for (var r = 0; r < rowStrings.length; r++){
        for (Var c = 0; c < rowStrings.length; c++){
          if (rowStrings[r][c] === " ")
            rowStrings[r][c] = "";
        }
      }
      console.log(rowStrings);
      return rowStrings;
    }
  }
};

/*
-------------------------------------
| 4         |           |           |
|   +   +   +   +   +   +   +   +   |
|     9     | 1   7     | 4   x     |
|   +   +   +   +   +   +   +   +   |
|     7     | 8   5     |         6 |
|---+---+---+---+---+---+---+---+---|
| 3         |           |           |
|   +   +   +   +   +   +   +   +   |
|           |     9     |         2 |
|   +   +   +   +   +   +   +   +   |
|         6 | 5   2     | 8       3 |
|---+---+---+---+---+---+---+---+---|
|           |         1 | 9         |
|   +   +   +   +   +   +   +   +   |
|         8 | 6         | 7         |
|   +   +   +   +   +   +   +   +   |
|           |           |     3     |
-------------------------------------
*/