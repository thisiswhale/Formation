/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    //BRUTE FORCE
    //Time: O(n^2)
    //Space: O(1)
    // let counter = 0;
    // for (let i=0;i<nums.length;i++) {
    //     let base = 0;
    //     for (let j=i;j<nums.length;j++) {
    //         base+=nums[j];
    //         if (base == k) counter++;
    //     }
    // }
    // return counter;

    //Time: O(n)
    //Space: O(n)
    
    let currSum = 0;
    const seenSums = {0: 1};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        count += seenSums[currSum - k] || 0;
        seenSums[currSum] = (seenSums[currSum] || 0) + 1;
    }

    return count;
}
