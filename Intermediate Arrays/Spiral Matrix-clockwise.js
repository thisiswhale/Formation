/**
https://leetcode.com/problems/spiral-matrix/

 * @param {number[][]} matrixrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     if (!matrix || !matrix.length) return [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const result = [];

  while (top <= bottom && left <= right) {

    //Left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    //Left to Bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // as long as row haven't been visited, explore right to left
    if (top <= bottom) {
      //Bottom to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // as long as column haven't been visited, explore bottom to top
    if (left <= right) {

      //Left to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
