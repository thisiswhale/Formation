/**
 * @param {character[][]} board
 * @return {boolean}
 https://leetcode.com/problems/valid-sudoku/
 */
var isValidSudoku = function (board) {
    const ROWS = board.length;
    const COLS = board[0].length;

    let rowSet = new Array(9).fill(null).map(() => new Set());
    let colSet = new Array(9).fill(null).map(() => new Set());
    let square = new Array(9).fill(null).map(() => new Set());

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let val = board[r][c];
            if (val === '.') continue; 

            // row square index Math.floor(r / 3) * 3, 
            // **multiplying 3 provide the next index of grid
            // 0-2 -> 0, 3-5 -> 1, 6-8 -> 2
            // col square index Math.floor(c / 3) 
            // 0-2 -> 0, 3-5 -> 1, 6-8 -> 2

            let sqIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (rowSet[r].has(val) || colSet[c].has(val) || square[sqIndex].has(val)) {
                return false;
            }

            rowSet[r].add(val);
            colSet[c].add(val);
            square[sqIndex].add(val);
        }
    }

    return true;
}
