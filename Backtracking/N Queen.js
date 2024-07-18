/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const visitedCols = new Set()
    const visitedPosDiag = new Set()
    const visitedNegDiag = new Set()

    const board = new Array(n).fill().map(()=> new Array(n).fill('.'))
    const result = new Array()

    function helper(row){
        if(row === n){
            result.push([...board.map(row => row.join(''))])
            return
        }

        for(let col = 0; col < n; col++){
            if(!visitedCols.has(col) && !visitedPosDiag.has(row+col) && !visitedNegDiag.has(row-col)){
                visitedCols.add(col)
                visitedPosDiag.add(row+col)
                visitedNegDiag.add(row-col)

                board[row][col] = 'Q'
                helper(row+1)
                
                visitedCols.delete(col)
                visitedPosDiag.delete(row+col)
                visitedNegDiag.delete(row-col)
                board[row][col] = '.'

            }
        }
    }

    helper(0)
    return result
};




function nQueens(n) {
  const seen_cols = new Set()
  const seen_asc_diag = new Set()
  const seen_des_diag = new Set()

  let result = 0

  function helper(row) {
    if (row == n) {
      result++
      return
    }

    for (let col = 0; col < n; col++){
      if (!seen_cols.has(col) && !seen_asc_diag.has(row + col) && !seen_des_diag.has(row - col)) {
        seen_cols.add(col)
        seen_asc_diag.add(row+col)
        seen_des_diag.add(row - col)
        
        helper(row + 1)
        
        seen_cols.delete(col)
        seen_asc_diag.delete(row+col)
        seen_des_diag.delete(row-col)
      }
    }
  }
  helper(0)
  return result
}

function nQueensPure(n) {
  const seen_cols = new Set()
  const seen_asc_diag = new Set()
  const seen_des_diag = new Set()

  // let result = 0

  function helper(row) {
    if (row == n) {
      // result++
      return 1
    }

    let result = 0;
    for (let col = 0; col < n; col++){
      if (!seen_cols.has(col) && !seen_asc_diag.has(row + col) && !seen_des_diag.has(row - col)) {
        seen_cols.add(col)
        seen_asc_diag.add(row+col)
        seen_des_diag.add(row - col)
        
        result += helper(row + 1)
        
        seen_cols.delete(col)
        seen_asc_diag.delete(row+col)
        seen_des_diag.delete(row-col)
      }
    }
    return result
    
  }

  return helper(0) 
}

// N = 0 => 1
// N = 1 => 1
// N = 2 => 0
// N = 3 => 0
// N = 4 => 2
// N = 5 => 10
// N = 8 => 92

console.log(nQueensPure(0))
console.log(nQueensPure(1))
console.log(nQueensPure(2))
console.log(nQueensPure(3))
console.log(nQueensPure(4))
console.log(nQueensPure(5))
console.log(nQueensPure(8))

 
