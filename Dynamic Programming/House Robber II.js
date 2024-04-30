/**
 * @param {number[]} nums
 * @return {number}

https://leetcode.com/problems/house-robber-ii/

examples
length is at least 1
-[2,3], return 2, bc we rob one house with either max
-[2], return 2

-[2,3,2], return 3 bc house 1 and 3 are adjascent
-[1,2,3,1], return 4 bc we can rob house 1,3 or house 2,4 we will get either max
-[1,2,3], return 3, because its just house 3
 */
var rob = function(nums) {

    if(nums.length === 0) return 0; // Base case: If there are no houses, return 0
    if(nums.length === 1) return nums[0]; // Base case: If there is only one house, return its value

    function helper(start, end) {
        let prevMax = 0;
        let currMax = 0;

        for(let i = start; i <= end; i++) {
            let temp = currMax;
            currMax = Math.max(currMax, prevMax + nums[i]);
            prevMax = temp;
        }

        return currMax;
    }

    // Case 1: Rob houses from the first house to the second-to-last house
    let robHouse1 = helper(0, nums.length - 2);
    
    // Case 2: Rob houses from the second house to the last house
    let robHouse2 = helper(1, nums.length - 1);
    // Return the maximum amount from both cases
    return Math.max(robHouse1, robHouse2);
};

//[1,2,3,4,5,6,7]
/**
1+3+5 = 9
1+3+6 = 10
1+4+6 = 11
1+5 = 6
1+6 = 7

2+4+6 =12
2+5+7 =14
2+6 = 8
2+7 = 9

3+5+7 = 15
3+6 = 9
3+7 = 10

4+6 = 10
4+7 = 11

5+7 = 12

6 = 6

7 = 7


 */
