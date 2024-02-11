/**
 * @param {number[]} nums
 * @return {number}

 -- edge case when an array is initially monotonic, result is 0, 

-Initialize 'beg' and 'end' variable as -1 and -2 respectively. 
    *This tracks the start and end indices of the unsorted subarray

-Initialize 'min' and 'max' variable as first and last element of the array, respectively.
    *This track the minimum and maximum values encountered while iterating through the array.

-Iterate the array from left to right, starting index of 1 to len-1
    -Update 'max' between current 'max' and the current element
    -Update the 'beg' to current index, when current element is less than current 'max'

-Iterate the array from right to left, starting index of len-2 to 0
    -Update 'min' between current 'min' and the current element
    -Update 'end' to current index, when current element is greater than current 'min'

-Return calculated the length of the unsorted subarray by subtracting beg from end and adding 1.

 */
var findUnsortedSubarray = function(nums) {

    const len = nums.length-1;
    let beg = -1, end = -2;
    let min = nums[len], max = nums[0]

    for(let i = 1; i < nums.length; i++){
        max = Math.max(max, nums[i])
        if(nums[i] < max) end = i

        min = Math.min(min, nums[len-i])
        if(nums[len-i] > min) beg = len - i
    }

    return end - beg + 1

    //SIMILAR TO FIRST ANSWER BUT USING TWO FOR LOOPS
    //FIRST LOOP TO CHECK FOR ASCENDING ORDER
    //SECOND LOOP TO CHECK FOR DESCENDING ORDER
/*
    let max = nums[0]
    let end = -2

    for(let i = 1; i< nums.length; i++){
        max = Math.max(max, nums[i])
        if(nums[i] < max) end = i
    }

    let min = nums[nums.length-1]
    let beg = -1
    for(let i = nums.length-2; i >= 0; i--){
        min = Math.min(min, nums[i])
        if(nums[i] > min) beg = i
    }

    return end - beg + 1
*/
};
