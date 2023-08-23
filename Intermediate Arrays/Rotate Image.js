/**
https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    const ROWS = matrix.length
    /* Transpose matrix */
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) { // 0 < 2
            /* Swap cells diagonally */
            let tempCell = matrix[i][j]; 
            matrix[i][j] = matrix[j][i]; 
            matrix[j][i] = tempCell;    
        }
    }

    matrix.map((row) => row.reverse())

    return matrix
};
