/*
'''
❓ PROMPT
In a rectangular matrix, we can draw a diamond shape of various sizes surrounding any single location. For example, if we have the matrix:

0 0 0 4 0 0 0
0 0 4 3 4 0 0
0 4 3 2 3 4 0
4 3 2 1 2 3 4
0 4 3 2 3 4 0
0 0 4 3 4 0 0
0 0 0 4 0 0 0

Starting from the center of this matrix, location (3, 3), has a value 1 and is the single location at distance 1 from this point. The locations with the value 2 are the perimeter of the diamond shape at distance 2. The locations with the value 3 represent the perimeter of the diamond at distance 3. Similar for 4.

The distance function between two points defined as abs(r1 - r2) + abs(c1 - c2) + 1 where abs() is the absolute value.

Given a rectangular matrix and a distance, d, find the maximum total value of all of the locations at distance, d or less, for all diamonds with a radius of d. Each diamond you consider should fit completely in the matrix and not be truncated by the bounds of the matrix.

Example(s)
const m3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const m4 = [
  [1, 2, 3, 1],
  [4, 5, 6, 1],
  [7, 8, 9, 1],
  [1, 1, 1, 1],
];

const m5 = [
  [1, 2, 3, 1, 1],
  [4, 5, 6, 1, 1],
  [7, 8, 9, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

maxDiamondSum(m3, 1) => 9
maxDiamondSum(m3, 2) => 25 (5 is the center with the diamond sum 2+4+5+6+8)
maxDiamondSum(m4, 1) => 9
maxDiamondSum(m4, 2) => 30 (8 is the center with the diamond sum 5+7+8+9+1)
maxDiamondSum(m4, 3) => 0
maxDiamondSum(m5, 3) => 45 (9 is the center)
 3+5+6+1+7+8+9+1+1+1+1+1+1

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function maxDiamondSum(m, d) // returns a number
def max_diamond_sum(m: list, d: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function maxDiamondSum(matrix, d){
  console.log(`Input: d =`, d)
  if(!matrix.length) return 0

  const ROWS = matrix.length
  const COLS = matrix[0].length
  console.log('Matrix =')
  for(let r = 0; r < ROWS; r++){
      console.log(matrix[r])
  }
  console.log()

  function calcDistance(r1,r2,c1,c2){
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) + 1
  }

  function calculateSum(currR,currC){
    let sum = 0
    // const arr = []
    for(let r = currR-d; r < currR+d; r++){
      for(let c = currC-d; c < currC+d;c++){
        // console.log(r,c, calcDistance(currR,r,currC,c))
        //Check within bounds and distance
        if(calcDistance(currR,r,currC,c) <= d){
          // arr.push(matrix[r][c])
          sum += matrix[r][c]
        }
      }
    }
    // console.log(`adding ${arr.join('+')}`)
    // console.log(`sum is ${sum}`)
    return sum
  }
  let maxSum = 0;
  for (let r = d - 1; r < ROWS - d + 1; r++) {
    for (let c = d - 1; c < COLS - d + 1; c++) {  
      // console.log('@',r,c,":")  
      const sum = calculateSum(r,c)
      maxSum = Math.max(maxSum,sum)
    }
  }

  return maxSum
}
const m3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const m4 = [
  [1, 2, 3, 1],
  [4, 5, 6, 1],
  [7, 8, 9, 1],
  [1, 1, 1, 1],
];

const m5 = [
  [1, 2, 3, 1, 1],
  [4, 5, 6, 1, 1],
  [7, 8, 9, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(maxDiamondSum(m4,2))
// console.log(maxDiamondSum(m3, 1) === 9)
// console.log(maxDiamondSum(m3, 2) === 25)
// console.log(maxDiamondSum(m4, 1) === 9)
// console.log(maxDiamondSum(m4, 2) === 30)
// console.log(maxDiamondSum(m4, 3) === 0)
// console.log(maxDiamondSum(m5, 3) === 45)

// // Test Case 1: Empty matrix
// const matrix1 = [];
// const distance1 = 1;
// console.log(maxDiamondSum(matrix1, distance1) === 0);

// // Test Case 2: Single element matrix
// const matrix2 = [[5]];
// const distance2 = 1;
// console.log(maxDiamondSum(matrix2, distance2) === 5);

// // Test Case 3: 3x3 matrix with equal elements
// const matrix3 = [
//   [2, 2, 2],
//   [2, 4, 2],
//   [2, 2, 2]
// ];
// const distance3 = 1;
// console.log(maxDiamondSum(matrix3, distance3) === 4);

// // Test Case 4: 3x3 matrix with equal elements but larger distance
// const matrix4 = [
//   [2, 2, 2],
//   [2, 4, 2],
//   [2, 2, 2]
// ];
// const distance4 = 2;
// console.log(maxDiamondSum(matrix4, distance4) === 12);

// // Test Case 5: 5x5 matrix with varying elements
// const matrix5 = [
//   [1, 2, 3, 4, 5],
//   [5, 4, 3, 2, 1],
//   [1, 3, 5, 3, 1],
//   [2, 4, 6, 4, 2],
//   [3, 2, 1, 2, 3]
// ];
// const distance5 = 2;
// console.log(maxDiamondSum(matrix5, distance5) === 20);

// // Test Case 6: 5x5 matrix with a larger distance
// const matrix6 = [
//   [1, 2, 3, 4, 5],
//   [5, 4, 3, 2, 1],
//   [1, 3, 5, 3, 1],
//   [2, 4, 6, 4, 2],
//   [3, 2, 1, 2, 3]
// ];
// const distance6 = 3;
// console.log(maxDiamondSum(matrix6, distance6) === 40);
