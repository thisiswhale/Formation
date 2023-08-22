/*
'''
Question : 
Go is an ancient game played on a board of 19x19 grid of lines. Black and white stones are placed at the intersections of these lines.
 A group of stones of one color is considered a _connected_ if every stone in the group is reachable from every other, traveling horizontally or vertically. For example, the following shows a is a single connected white group because we can traverse through all stones without jumps or moving diagonally. 

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W W + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

A connected group of stones is captured when *all* adjacent points to the group are occupied by stones of the opposite color. Unoccupied intersections adjacent to a group of stones are called _liberties_. While playing the game, players must keep track of their groups and their liberty counts to look for strong moves to play.

The previous example group of white stones has 10 liberties. If the stone at (2, 3) is removed, it would be broken into two groups. The vertical group of three has 7 liberties, and the horizontal group of two has 6:

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W + + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

Given a 19x19 board and an occupied position on the board, count the liberties of that connected group. Assume that the board is square and, at most 19x19, the size of a real Go board.
 

EXAMPLE(S)
countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'W', '+'],
    ['+', '+', '+'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

Similar to the last example, but the new stone isn't connected.
countLiberties(
  [
    ['B', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['W', '+', 'W'],
    ['W', 'B', 'B'],
    ['W', 'W', 'B'],
  ],
  1, 1) == 1
 
Edge cases/Assumptions/Observations : 

Smallest grid 9x9

Only count librerties for the group that the occupied position is a part of.

Return the liberties for the occupied group

input: Matrix, row position, column position
output: count of librerties

Possible characters: 'W', 'B', '+'

Check for horizontal and vertical neighbors, no diagonal



Approach : 
Initial thoughts : 
Create a set of found librerties
Create a set of occupied spaces

Create a set of visited spaces
create a liberties counter
given the occupied space we check [-1,0] [0,1] [0,-1] [1,0]


FUNCTION SIGNATURE
function countLiberties(board, x, y) {


  AlphaGo : 
  https://www.youtube.com/watch?v=WXuK6gekU1Y

  
'''
*/


/*
Python
def countLiberties(board, x, y):
    rows = len(board)
    columns = len(board[0])
    visited_spaces = set()
    liberties = 0
    playing_piece = board[x][y]
    def get_space(board,x,y):
        nonlocal liberties
        current_piece = board[x][y]
        space = [x,y]
        if isValid(x,y,rows, columns) == False:
            return
        if board[x][y] == '+':
            liberties += 1
        if current_piece != playing_piece:
            return
        if space in visited_spaces:
            return
        else:
            visited_spaces.add([x,y])
        get_space(board, x-1, y)
        get_space(board, x, y+1)
        get_space(board, x, y-1)
        get_space(board, x + 1, y)
    get_space(board,x,y)
    return liberties

def isValid(x,y, rows, columns):
    if x < 0 or x >= rows:
        return False
    if y < 0 or y >= columns:
        return False
    return True

*/


//JavaScript 
//Michael 
function countLibrerties(board, x, y) {
  const visited = new Set();
  const neighbors = [[x,y]];
  let libreties = 0;
  visited.add(_addVisited([x,y]))

  while(neighbors.length){
      const neighbor = neighbors.pop()
      _checkNeighbors(neighbor)
  }

  return libreties
  
  function _checkNeighbors(location) {
      const coords = [[-1,0],[0,1], [0,-1], [1,0]]
      const [cx, cy] = location;
      const [rowBound, colBound] = [board[0].length, board.length]
      const currChar = board[cx][cy]

      for(let [ax, ay] of coords){
          const [nx, ny] = [ax+cx, ay+cy]

          if((nx >= 0 && nx < rowBound) && (ny >=0 && ny < colBound)){
              if(board[nx][ny] === currChar || board[nx][ny] === '+'){
                  const visitedStr = _addVisited([nx,ny])
                  
                  if(!visited.has(visitedStr)){
                      visited.add(visitedStr)
                      
                      if(board[nx][ny] === currChar) neighbors.push([nx,ny])
                      else libreties++
                  }
              } 
          }
      }
  }

  function _addVisited(location){
      const [x,y] = location;
      return `${x}-${y}`
  }
}

const test1 = [
  ['+', '+', '+'],
  ['+', 'W', '+'],
  ['+', '+', '+'],
]

const test2 = [
  ['+', '+', '+'],
  ['+', 'B', 'B'],
  ['+', '+', 'B'],
]

const test3 = [
  ['B', '+', '+'],
  ['+', 'B', 'B'],
  ['+', '+', 'B'],
]

const test4 = [
  ['W', '+', 'W'],
  ['W', 'B', 'B'],
  ['W', 'W', 'B'],
]

console.log(countLibrerties(test1,1,1) === 4)
console.log(countLibrerties(test2,1,1) === 4)
console.log(countLibrerties(test3,1,1) === 4)
console.log(countLibrerties(test4,1,1) === 1)



console.log(countLibrerties(
  [
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', 'B', 'B', 'B', 'B', 'B', '+', '+'],
    ['+', '+', 'B', '+', 'B', '+', 'B', '+', '+'],
    ['+', '+', 'B', 'B', 'B', 'B', 'B', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
  ],
  4, 4
), 18);

console.log(countLibrerties(
  [
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '+'],
    ['+', 'W', 'B', 'B', 'B', 'B', 'B', 'W', '+'],
    ['+', 'W', 'B', '+', 'B', '+', 'B', 'W', '+'],
    ['+', 'W', 'B', 'B', 'B', 'B', 'B', 'W', '+'],
    ['+', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
  ],
  4, 4
), 2);

console.log(countLibrerties(
  [
    ['+', '+', '+', 'W', '+', '+', '+', '+', '+'],
    ['+', '+', '+', 'W', 'B', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['W', 'W', 'W', '+', 'B', '+', '+', '+', '+'],
    ['B', 'B', '+', 'B', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
  ],
  3, 2
), 5);

console.log(countLibrerties(
  [
    ['+', '+', '+', 'W', '+', '+', '+', '+', '+'],
    ['+', '+', '+', 'W', 'B', '+', '+', '+', '+'],
    ['+', '+', '+', 'W', '+', '+', '+', '+', '+'],
    ['W', 'W', 'W', '+', 'B', '+', '+', '+', '+'],
    ['B', 'B', '+', 'B', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
  ],
  3, 2
), 5);

console.log(countLibrerties(
  [
    ['+', '+', '+', 'W', '+', '+', '+', '+', '+'],
    ['+', '+', '+', 'W', 'B', '+', '+', '+', '+'],
    ['+', '+', '+', 'W', '+', '+', '+', '+', '+'],
    ['W', 'W', 'W', 'W', 'B', '+', '+', '+', '+'],
    ['B', 'B', '+', 'B', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+'],
  ],
  3, 2
), 8);




//William 
// function countLiberties(board, x, y) {
  
//   const ROWS = board.length
//   const COLS = board[0].length
//   const visited = new Set()
//   const marker = board[x][y];
//   let count = 0;

//   function dfs(r,c){

//     if(r >= ROWS || c >= COLS || r <= 0 || c <= 0 || visited.has(`${r},${c}`) || board[r][c] !== marker) return

//     visited.set(`${r},${c}`)
//     if(board[r][c] == '+') count++

//     dfs(r+1, c)
//     dfs(r-1, c)
//     dfs(r, c+1)
//     dfs(r, c-1)
//   }

//   dfs(x,y)

//   return count

// }
