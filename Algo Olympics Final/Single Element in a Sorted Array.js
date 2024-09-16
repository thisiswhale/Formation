/**

https://leetcode.com/problems/single-element-in-a-sorted-array/

* @param {number[]} nums
 * @return {number}

 //bruteforce 
 create a hashmap
 travese the array 
    add a count to hashmap for an element
 traverse the hashmap
    return element that is 1

time: O(n)
space: O(n)

 */
// var singleNonDuplicate = function(nums) {
//     const hashmap = {}

//     for(let el of nums){
//         if(hashmap[el] === undefined){
//             hashmap[el] = 1
//         } else {
//             hashmap[el]++
//         }
//     }

//     for(let el in hashmap){
//         if(hashmap[el] == 1) return el
//     }
//     return -1
// };

/**
For Optimization, use binary search tree since arr is sorted



 */

var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length-1

    while(l < r){

        let mid = Math.floor( (l+r) / 2)
        if(mid % 2 == 1){
            mid--
        }
        if(nums[mid] == nums[mid+1]) {
            l = mid + 2
        } else {
            r = mid 
        }
        
    }
    return nums[l]
};
