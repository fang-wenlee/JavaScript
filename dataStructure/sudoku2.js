function sudoku2Original(grid) {
    var collapsed = [[], [], []];
    //Guaranteed to be 9x9. Guaranteed to have '.' or 1-9
    for(var x = 0; x < grid.length; x++) { //Check row    
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, grid[x].join(""))) { 
                return false;
            }
        }
             
        var column = [];
        for(var y = 0; y < grid.length; y++) { //Check column
            column.push(grid[y][x]);
            collapsed[(x % 3)].push(grid[x][y]);
        }        
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, column.join(""))) { 
                return false;
            }
        }
    }
  
    var squares = [[], [], [], [], [], [], [], [], []];
    var k = 0;
    while(k < 9) {
        for(var j = 0; j < 3; j++) {
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
        }
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, squares[k].join(""))) { 
                return false;
            }
        }
       k++;
    }
   return true;
}
function isValid(i, a) {
    // No number is repeated
    var first = a.indexOf(i);
    if(first >= 0) {
        if(a.indexOf(i, first + 1) >= 0) {
            return false;
        }
    }
    return true;
}


function sudoku2(grid) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var c = grid[i][j];
            if (c !== '.') {
                // check row
                for (var z = 0; z < 9; z++) {
                    if (j !== z && grid[i][z] === c)
                        return false;
                }
                // check column
                for (var z = 0; z < 9; z++) {
                    if (i !== z && grid[z][j] === c)
                        return false;
                }
                // check square
                var a = i - i%3,
                    b = j - j%3;
                for (var x = a; x < a+3; x++) {
                    for (var y = b; y < b+3; y++) {
                        if (x !== i && y !== j && grid[x][y] === c)
                            return false;
                    }
                }
            }
        }
    }
    return true;
}
grid=
[[".",".",".","1","4",".",".","2","."], 
 [".",".","6",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".","1",".",".",".",".",".","."], 
 [".","6","7",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","8","1","."], 
 [".","3",".",".",".",".",".",".","6"], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","5",".",".",".","7","."]] //true;

console.log( sudoku2(grid) )//true;