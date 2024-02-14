/**
https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}

Edge case matrix is empty, return matrix

Set result to []

Set up starting pointers where:
 -'up' and 'left' set at 0
 -'right' set at [0][col.length-1]
 -'down' set at [row.length-1][0]

Set while loop within matrix bound (left <= right && up <= down)
    -Set for loop from left to right
        -Push values to result at [up][i]
    -Increment 'up', to move to next row
    
    -Set for loop from up to down
        -Push values to result at [right][i]
    -Decrement 'right', to move next col

    -Check if boundaries are still valid after the right traversal
        If not, break the loop. Handles m * n matrix cases
        Uses to avoid 'left' or 'up' boundaries OOB and stop the loop

    -Set for loop from right to left
        -Push values to result at [i][down]
    -Decrement 'down', to move previous row

    -Set for loop from down to up
        -Push values to result at [i][left]
    -Increment left, to move previous col

 */

var spiralMatrix = function(matrix) {
  if(!matrix.length) return matrix

  const result = []

  let left = 0, right = matrix[0].length-1
  let up = 0, down = matrix.length-1


  while(left <= right && up <= down){

    for(let i = left; i <= right; i++){
      result.push(matrix[up][i])
    }
    up++

    for(let i = up; i <= down; i++){
      result.push(matrix[i][right])
    }

    right--

    if(!(left <= right && up <= down)) break

    for(let i = right; i >= left; i--){
      result.push(matrix[down][i])
    }
    down--

    for(let i = down; i >= up; i--){
      result.push(matrix[i][left])
    }
    left++

  }

  return result
};

var spiralMatrixCounterClockwise = function(matrix) {
  if(!matrix.length) return matrix

  const result = []
  let left = 0, right = matrix[0].length-1;
  let up = 0, down = matrix.length-1;

  while(left <= right && up <= down){

    //up to down
    for(let i = up; i <= down; i++){
      result.push(matrix[i][left])
    }
    left++

    //left to right
    for(let i = left; i <= right; i++){
      result.push(matrix[down][i])
    }
    down--

    if(!(left <= right && up <= down)) break

    //down to up
    for(let i = down; i >= up; i--){
      result.push(matrix[i][right])
    }
    right--

    //right to left
    for(let i = right; i >= left; i--){
      result.push(matrix[up][i])
    }
    up++
  }


  return result
}



// //TEST CASES

// //Edge cases 
// console.log(spiralMatrix([[]])) // []
// console.log(spiralMatrix([])) // []
// console.log(spiralMatrix([[1]])) // [1]

// //m matrices
// console.log(spiralMatrix([
//   [1,2],
//   [3,4]
// ])) //[1,2,4,3]

// console.log(spiralMatrix([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ])) //[1,2,3,6,9,8,7,4,5]

// //m * n matrices
// console.log(spiralMatrix([
//   [1],
//   [3]
// ])) // [1,3]

// console.log(spiralMatrix([
//   [1],
//   [2],
//   [3]
// ])) // [1,2,3]

// console.log(spiralMatrix([
//   [1,2,3]
// ])) // [1,2,3]

// console.log(spiralMatrix([
//   [1,2,3],
//   [4,5,6]
// ])) //[1,2,3,6,5,4]

// console.log(spiralMatrix([
//   [1,2,3],
//   [4,5,6]
// ])) //[1,2,3,6,5,4]


console.log(counterClockwiseSpiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])) //[1,4,7,8,9,6,3,2,5]
