/**
 * @param {number[]} nums
 * @return {number}

 List of houses of values

 ie. [1,2,3,1]

 Can rob houses:
  1 -> 3, 1+3= 4, optimal
  1 -> 4, 1+1= 2
  2 -> 4, 2+1= 3

0 1 2 3 4
0 1 2 4 
 */
var rob = function(nums) {
    const dp = new Array(nums.length+1).fill(0)
    dp[1] = nums[0]

    for(let house = 2; house <= nums.length; house++){
        dp[house] = Math.max(dp[house-1], dp[house-2]+ nums[house-1])
    }
    return dp[nums.length]
    
    let prev = 0
    let prevPrev = 0

    for(let i = 0; i < nums.length; i++){
        let temp = prev
        prev = Math.max(prev, prevPrev + nums[i])
        prevPrev = temp
    }
    return prev
};
