/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

 https://leetcode.com/problems/combination-sum-iv/
 */

var combinationSum4 = function(nums, target) {

    const dp = new Array(target+1).fill(0)
    dp[0] = 1

    for(let currTarget = 1; currTarget <= target; currTarget++){
        for(let num of nums){
            if( num <= currTarget ){
                dp[currTarget] += dp[currTarget - num]
            }
        }
    }
    return dp[target]
}

//MEMOIZATION
// var combinationSum4 = function(nums, target) {
//     const memo = new Array(target + 1).fill(0);
//     memo[0] = 1;

//     function backtrack(currVal){
//         if (memo[currVal]) return memo[currVal];

//         let count = 0;
//         for(let num of nums){
//             if (currVal >= num ) {
//                 count += backtrack(currVal - num);
//             }
//         }
//         memo[currVal] = count;
//         return count;
//     }
//     backtrack(target)
//     return memo[target] ;
// }

//RECURSION 2
// var combinationSum4 = function(nums, target) {

//     function backtrack(currVal){
//         if(currVal > target) return 0
//         if(currVal === target) return 1

//         let count = 0
//         for(let num of nums){
//             count += backtrack(currVal + num)
//         }
//         return count

//     }

//     return backtrack(0)
// };

//RECURSION 1
// var combinationSum4 = function(nums, target) {

//     let count = 0
//     const temp = []
//     const duplicate = new Set()
//     function backtrack(idx, currVal){
//         if(currVal > target || idx >= nums.length) return

//         if(currVal === target && !duplicate.has(temp.join(''))) {
//             count++
//             duplicate.add(temp.join(''))
//             return
//         }

//         for(let i = 0; i < nums.length; i++){
//             temp.push(nums[i])
//             backtrack(i, currVal + nums[i])
//             temp.pop()
//         }

//     }

//     for(let i = 0; i < nums.length; i++){
//         backtrack(i,0)
//     }
//     return count
// };

/**
    target
    0 1 2 3 4--

1   1 1 1 1 1
2   1 1 2 3 5
3   1 1 2 4 7
---------------


    target
    0 1 2 3 4--

2   1 0 1 0 1
3   1 0 1 1 1
---------------
 */
//  dp[r][c] = 
