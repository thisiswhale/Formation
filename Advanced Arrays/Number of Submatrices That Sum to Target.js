/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 
 https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/description/
 
 //return the max value of the sum, can return k or lower
// any grid n x n does not count, but problem guarantee m x n exists

 */
var maxSumSubmatrix = function(matrix, k) {
    const R_NUM = matrix.length, C_NUM = matrix[0].length;
    let maxSum = -Infinity;
    
    for(let l = 0; l < R_NUM; l++) {
        const dp = Array(C_NUM).fill(0);
        
        for(let r = l; r < R_NUM; r++) {
            let sum = 0, max = -Infinity;
            
            for(let c = 0; c < C_NUM; c++) {
                // build running dp array
                dp[c] += matrix[r][c];
                
                // implement kadane's algorithm
                if(sum < 0) sum = 0;
                sum += dp[c];
                max = Math.max(max, sum);
            }
            
            // if max <= k take kadane's algorithm
            if(max <= k) maxSum = Math.max(max, maxSum);
            else {
                // if max > k find the max subarray sum no larger than k
                max = -Infinity;

                for(let c = 0; c < C_NUM; c++) {
                    sum = 0;

                    for(let d = c; d < C_NUM; d++) {
                        sum += dp[d];
                        if(sum <= k) max = Math.max(sum, max);
                    }
                }
                maxSum = Math.max(max, maxSum);
            }
            if(maxSum === k) return k; // short circuit
        }
    }
    return maxSum;
};
