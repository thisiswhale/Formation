/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.

 https://leetcode.com/problems/sudoku-solver/
 */
var solveSudoku = function(board) {
    const n = board.length
    dfs(board,n)
};

function dfs(board,n){
    //Traverse the whole board
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){

            //Only looking for empty squares
            if(board[r][c] !== '.') continue

            //Start trying values 1-9
            for(let val = 1; val <= n; val++){

                //stringfy bc the grid is string type
                val = val.toString()

                //Check the board for no repeat number in 
                // line row, line col, and 3x3 grid
                if(isValid(board, r, c, n, val)){
                    board[r][c] = val
                    // continue search for that board, ret true if solution is reached
                    if(dfs(board,n)) return true
                    
                }
                
            }

            // solution wasnt found for any num 1-9 here, must be a dead end...
            // set the current cell back to empty
            board[r][c] = '.'
            return false
        }
    }

    // all cells filled, must be a solution
    return true
}

function isValid(board, row, col, n, val){

    for(let i = 0; i < n; i++){
        //Checks for no repeating values for row and col
        if(board[row][i] === val || board[i][col] === val) return false

        //Checks for no repeating values in 3x3 grid
        const squareRow = Math.floor(row/3) * 3 //output either 0,3,6
        const squareCol = Math.floor(col/3) * 3 //output either 0,3,6
        const curRow = squareRow + Math.floor(i/3) //within
        const curCol = squareCol + Math.floor(i%3) 
        if(board[curRow][curCol] === val) return false
    }
    return true
}
