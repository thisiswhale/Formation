/**
Note: Write a solution with O(queries.length + queens.length + n) complexity and O(queries.length) 
additional memory, since this is what you would be asked to do during a real interview.

In chess, queens can move any number of squares vertically, horizontally, or diagonally.

You have an <code>n × n</code> chessboard with some queens on it. 
You are given several queries, each of which represents one square on the chessboard. 
For each query square, determine whether it can be attacked by a queen or not. 

Example For n = 5, queens = [[1, 1], [3, 2]], and 
queries = [[1, 1], [0, 3], [0, 4], [3, 4], [2, 0], [4, 3], [4, 0]], 
the output should be solution(n, queens, queries) = [true, false, false, true, true, true, false]

*/




function queenAttack(n, queens, queries){

  const queenMoves = new Set()
  const board = new Array(n).fill(0).map(()=> new Array(n).fill(0))
  for(let queen of queens){
    const [r,c] = queen
    queenMoves.add(`${r},${c}`)
    board[r][c] = 2
    const directions = [[1,0],[1,1],[0,1],[-1,1],[0,-1],[-1,-1],[-1,0],[1,-1]]

    for(let [dr,dc] of directions){
      addMoves(r+dr, c+dc, dr, dc)
    }
  }

  function addMoves(r,c,dr,dc){
    if(r < 0 || c < 0 || r >= n || c >= n) return
    
    queenMoves.add(`${r},${c}`)
    board[r][c] = 1
    addMoves(r+dr, c+dc, dr, dc)
  }

  const result = []

  for(let moves of queries){
    let [r,c] = moves
    // console.log(r,c , board[r][c])
    if(queenMoves.has(`${r},${c}`)) result.push(true)
    else result.push(false)
  }
  // console.log(board)

  return result
}
console.log(queenAttack(5,[[1, 1], [3, 2]], 
  [[1, 1], [0, 3], [0, 4], [3, 4], [2, 0], [4, 3], [4, 0]]))
// ans:  [ true, false, false, true,  true, true, false]

console.log(queenAttack(3,[[1, 1], ], 
  [[1, 1], [2, 0],]))
/**
 * 
 *

[1,1,1,0,0]
[1,*,1,1,1]
[1,1,1,0,0]
[1,1,*,1,1]
[0,1,1,1,1]
 */
