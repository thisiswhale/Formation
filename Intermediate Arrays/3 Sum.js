/*
'''

https://leetcode.com/problems/3sum/

Three Number Sum

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.
 

EXAMPLE(S)
[1, 2, 3] returns []
[1, 2, -3] returns [[1, 2, -3]]

 

FUNCTION SIGNATURE
function threeSum(nums) {
def threeSum(mums: list[int]):
'''
*/

var threeSum = function(nums) {

    nums = nums.sort((a,b) => a-b);

    const result = [];
    for(let i = 0; i < nums.length; i++){
        let l = i +1, r = nums.length-1;
        if(nums[i] == nums[i-1]) continue;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) l++;
            else if(sum > 0) r--;
            else {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                while(l < r && nums[l] == nums[l-1]) l++;
            }
        }
    }

    return result;
};
