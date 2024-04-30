/**
 * @param {number[]} nums
 * @return {number}


 Input: List
 Output: the max value of a subarray product

allow duplicates
[0,0] => 0
[1] => 1
[] => 0
[2,3,1] => 6 , [2,3]
 all possible , [2], [3], [1], [2,3], [3,1] [2,3,1]


 Time: n^m, exponential
 Space: n, call stack level

 ex. [1,3,2,4]      1,3,2,4  
  0  1  2  3  4
1 0  1  1
3 0  0  3
2 0  0  6
4 0  0 

 */
//DP
function maxProduct(nums) {
    
    if(!nums.length) return 0

    let prevMin = 1, prevMax = 1 // can multiply the itself as we iterate
    let result = nums[0]

    for(let n of nums){
        const nextMax = Math.max(prevMax * n, n, prevMin * n)
        const nextMin = Math.min(prevMax * n, n, prevMin * n)

        prevMin = nextMin
        prevMax = nextMax

        result = Math.max(result, nextMax)
    }

    return result
}

//RECURSION
// var maxProduct = function(nums) {
    
//     if (!nums.length) return 0;
    
//     let maxProduct = nums[0];
    
//     function findMaxProduct(start) {
//         if (start === nums.length) return 0;
        
//         let currProduct = nums[start];
//         let max = currProduct;
        
//         for (let end = start + 1; end <= nums.length; end++) {
//             max = Math.max(max, currProduct);
//             if (end < nums.length) {
//                 currProduct *= nums[end];
//             }
//         }
        
//         maxProduct = Math.max(maxProduct, max, findMaxProduct(start + 1));
        
//         return max;
//     }
    
//     findMaxProduct(0);
    
//     return maxProduct;
// };

/*
[1,3,2]
-Infinity, backtrack(0, nums[0]))
 1 , backtrack(1, 1*nums[1]))
 3 , backtrack(2, 3*nums[2]))
 6 , backtrack(3, 3*nums[2]))
[1]
*/
