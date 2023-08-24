/*
'''
❓ PROMPT
In mathematics when two matrices are multiplied, the result is a new matrix where each position (i, j) in the output is the sum of the products of the ith _row_ in the first matrix and the jth _column_ in the second. This is called the [dot product](https://www.mathsisfun.com/algebra/matrix-multiplying.html).

As a follow-up, modify your code to support matrices that are *not* square. This requires that the number of columns in the first matrix be equal to the number of rows in the second so that the row x column cross products are possible.

Example(s)
a = [
  [1, 2],
  [3, 4]
]
b = [
  [5, 6],
  [7, 8]
]
matrixMultiply(a,b) ==
[
  [19,22],
  [43,50]
]
The (0, 0) position in the result is: 1 * 5 + 2 * 7 = 19
The (0, 1) position in the result is: 1 * 6 + 2 * 8 = 22
The (1, 0) position in the result is: 3 * 5 + 4 * 7 = 43
The (1, 1) position in the result is: 3 * 6 + 4 * 8 = 50
 

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
function matrixMultiply(a, b) {
def matrixMultiply(a: list[list[int]], b: list[list[int]]) -> list[list[int]]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


function matrixMultiply(a, b) {

  const aRow = a.length
  const aCol = a[0].length
  const bRow = b.length
  const bCol = b[0].length

  if(aCol !== bRow) return [[null]]

  const result = Array.from(Array(aRow), () => new Array(bCol).fill(0))

  for (let i = 0; i < aRow; i++) {
    for (let j = 0; j < bCol; j++) { 
        let value = 0;
        for (let k = 0; k < aCol; k++) {
            value += a[i][k] * b[k][j];
        }
        result[i][j] = value;
    }
  }
  return result;

}


let a = [[]]
let b = [[]]

console.log(JSON.stringify(matrixMultiply(a,b))
  === JSON.stringify([[]]) || JSON.stringify(matrixMultiply(a,b))
  === JSON.stringify([[null]]))

a = [[5]]
b = [[10]]
console.log(JSON.stringify(matrixMultiply(a,b)) 
  === JSON.stringify([[50]]))

a = [
  [1, 2],
  [3, 4]]
b = [
  [5, 6],
  [7, 8]]
console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
  [19,22],
  [43,50]]))

a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]
b = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]]
console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
  [300,360,420],
  [660,810,960],
  [1020,1260,1500]]))

a = [[1, 2, 3]]
b = [
  [4],
  [5],
  [6]]
console.log(JSON.stringify(matrixMultiply(a,b)) 
  === JSON.stringify([[32]]))

a = [
  [1, 2, 3],
  [4, 5, 6]]
b = [
  [10, 20],
  [30, 40],
  [50, 60]]
console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
  [220,280],
  [490,640]]))
