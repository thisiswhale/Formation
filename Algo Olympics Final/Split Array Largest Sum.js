/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

https://leetcode.com/problems/split-array-largest-sum/
 */
var splitArray = function(nums, k) {
    
    let lowSum = Math.max(...nums)
    let highSum = nums.reduce((a,b) => a+b)

    while(lowSum <= highSum){
        const midSum = Math.floor((lowSum+highSum)/ 2)
        
        let count = 1;
        let array = 0;
        for (let i = 0; i < nums.length; i++) {
            if (array + nums[i] <= midSum) {
                array += nums[i];
            } else {
                count++;
                array = nums[i];
            }
        }

        if (count > k) {
            lowSum = midSum + 1;
        } else {
            // Else we couldn't make k partitions, so we have
            // to look at smaller sums.
            highSum = midSum - 1;
        }

    }
    return lowSum
};

