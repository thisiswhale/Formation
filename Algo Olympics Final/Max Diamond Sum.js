/**

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


'''
*/


function maxDiamondSum(m, d) {
  if (!m.length) {
    return 0;
  }

  const rows = m.length;
  const columns = m[0].length;

  function distance(r1, c1, r2, c2) {
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) + 1;
  }

  function sumDiamond(centerR, centerC) {
    let sum = 0;
    for (let r = centerR - d + 1; r < centerR + d; r++) {
      for (let c = centerC - d + 1; c < centerR + d; c++) {
        if (distance(centerR, centerC, r, c) <= d) {
          sum += m[r][c];
        }
      }
    }
    return sum;
  }

  let max = 0;
  for (let r = d - 1; r < rows - d + 1; r++) {
    for (let c = d - 1; c < columns - d + 1; c++) {
      const sum = sumDiamond(r, c);
      max = Math.max(sum, max);
    }
  }
  return max;
}

// Test Case 1: Empty matrix
const matrix1 = [];
const distance1 = 1;
console.log(maxDiamondSum(matrix1, distance1) === 0);

// Test Case 2: Single element matrix
const matrix2 = [[5]];
const distance2 = 1;
console.log(maxDiamondSum(matrix2, distance2) === 5);

// Test Case 3: 3x3 matrix with equal elements
const matrix3 = [
  [2, 2, 2],
  [2, 4, 2],
  [2, 2, 2]
];
const distance3 = 1;
console.log(maxDiamondSum(matrix3, distance3) === 4);

// Test Case 4: 3x3 matrix with equal elements but larger distance
const matrix4 = [
  [2, 2, 2],
  [2, 4, 2],
  [2, 2, 2]
];
const distance4 = 2;
console.log(maxDiamondSum(matrix4, distance4) === 12);

// Test Case 5: 5x5 matrix with varying elements
const matrix5 = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 3, 5, 3, 1],
  [2, 4, 6, 4, 2],
  [3, 2, 1, 2, 3]
];
const distance5 = 2;
console.log(maxDiamondSum(matrix5, distance5) === 20);

// Test Case 6: 5x5 matrix with a larger distance
const matrix6 = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 3, 5, 3, 1],
  [2, 4, 6, 4, 2],
  [3, 2, 1, 2, 3]
];
const distance6 = 3;
console.log(maxDiamondSum(matrix6, distance6) === 40);
