/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 2) return Math.min(...nums)
    if(nums.length == 1) return nums[0]

    const mid = Math.floor(nums.length / 2)

    if (nums[mid] < nums[mid - 1]) return nums[mid];
    if(nums[mid] > nums[nums.length-1]) return findMin(nums.slice(mid+1))
    else return findMin(nums.slice(0, mid))

    // let l = 0, r = nums.length-1
    // let result = nums[0]
    
    // while(l <= r){
    //     if(nums[l] < nums[r]){
    //         result = Math.min(result, nums[l])
    //         break
    //     }
    //     const mid = (r-l)/2
    //     result = Math.min(result, nums[mid])
    //     if(nums[mid] >= nums[l]){ start
    //         l = mid + 1 
    //     } else {
    //         r = mid - 1
    //     }

    // }

    // return result
    
};
