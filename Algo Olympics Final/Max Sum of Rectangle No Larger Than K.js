/**
https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/

Kadane's algorthm

Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

It is guaranteed that there will be a rectangle with a sum no larger than k.

Example 1:

Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
Example 2:

Input: matrix = [[2,2,-1]], k = 3
Output: 3

*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    const ROWS = matrix.length
    const COLS = matrix[0].length

    let maxSum = -Infinity

    for(let leftCol = 0; leftCol < ROWS; leftCol++){

        const rowPrefixSum = new Array(ROWS).fill(0)
        for(let rightCol = leftCol; rightCol < COLS; rightCol++){

            let currSum = 0
            let currMax = matrix[leftCol][rightCol]
            for(let rowIdx = 0; rowIdx < ROWS; rowIdx++){
                rowPrefixSum[rowIdx] += matrix[rowIdx][rightCol]

                if(currSum < 0) currSum = 0
                currSum += rowPrefixSum[rowIdx]
                currMax = Math.max(currSum, currMax)
            }


            if(currMax > k){
                currMax = -Infinity

                for (let startRow = 0; startRow < ROWS; startRow++) {
                    currSum = 0;

                    for (let endRow = startRow; endRow < ROWS; endRow++) {
                        currSum += rowPrefixSum[endRow];

                        if (currSum <= k) {
                            currMax = Math.max(currSum, currMax);
                        }
                    }
                }
            }
            maxSum = Math.max(currMax, maxSum)
            if(maxSum === k) return k
        }
    }
    return maxSum === -Infinity ? -1 : maxSum 
};
