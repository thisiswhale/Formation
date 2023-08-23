/*
'''
https://leetcode.com/problems/transpose-matrix/

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(mxn)
Space: O(n)
 

'''
*/
var transpose = function(matrix) {
    const ROWS = matrix.length
    const COLS = matrix[0].length

    // let arr = new Array(COLS).fill().map( () => new Array(ROWS).fill())
    
    // for(let c = 0; c < COLS; c++){
    //     for(let r = 0; r < ROWS; r++){
    //         arr[c][r] = matrix[r][c]
    //     }
    // }


    let arr = []

    for(let c = 0; c < COLS; c++){
        let rowArr = []
        for(let r = 0; r < ROWS; r++){
            rowArr.push(matrix[r][c])
        }
        arr.push(rowArr)
    }
    return arr
};
