/**
https://leetcode.com/problems/reshape-the-matrix

 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(!mat.length) return mat

    const arr = []
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[0].length; c++){
            arr.push(mat[r][c])
        }
    }
    
    if(arr.length !== r*c) return mat

    const newShape = [];
    let k = 0;
    for(let i = 0; i < r; i++){
        const newRow = []
        for(let j = 0; j < c; j++){
            newRow.push(arr[k])
            k++
        }
        newShape.push(newRow)
    }

    return newShape
};
