/**
 * @param {number[]} nums
 * @return {number}

 Unsorted list, find the 'index' of the peak element
 -Can have duplicate elements

 -list can have elements from -Infinity to infinity
 -list of 1 returns 1
-empty list returns - 1

[1,2,3,1] => index 2, where 3 is the peak

[1,2,1,3,5,6,4] => index 5, where 6 is peak, OR index 1, where 2 is peak

[3,2,1] => index 0, where 3 is peak*
[1,2,3] => index 2, where 3 is peak*

[3,2,2,1] => index 0, where 3 is peak*
[1,2,2,3] => index 3, where 3 is peak*
[1,2,2,1] => index 1 or 2, where 2 is peak*
*NOTE: nums[i] != nums[i + 1] for all valid i.


Bruteforce
set peak
traverse with i pointers and if ith index is greater than start, then set peak at ith, return i when ith is lower than the peak value,

Time: O(N)
Space: O(1)

Binary search
Time:O(log(n))

 */
var findPeakElement = function(nums) {

    if(!nums.length) return -1
    if(nums.length === 1) return 0

// TIME: O(n)
    // let peak = 0
    // for(let i = 1; i < nums.length; i++){
    //     if(nums[peak] < nums[i]){
    //         peak = i
    //     } else if(nums[peak] > nums[i]){
    //         return peak
    //     }
    // }

    // return peak

// TIME: O(log(n))

    let left = 0
    let right = nums.length-1

    while(left < right){
        const mid = Math.floor((right+left)/2)    

        if(nums[mid] > nums[mid+1]){
            right = mid
        } else{
            left = mid+1
        }
        console.log(left,right, mid)
    }

    return left
};
