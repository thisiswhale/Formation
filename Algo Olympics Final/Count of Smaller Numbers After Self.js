/*

https://leetcode.com/problems/count-of-smaller-numbers-after-self/

Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Example 2:

Input: nums = [-1]
Output: [0]
Example 3:

Input: nums = [-1,-1]
Output: [0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}


 list of 1, returns [0]
 list of same values, returns [0..]
 list of ascending [1,2,3,4] returns [0,0,0,0]
 list of decending [4,3,2,1] return [3,2,1,0]
the last index of the result will always be [0]

 Brute force 
 2 loops where:
 - left loop is the initial index
 - right loop is the left+1 index
    -Add 1 to result[left] if nums[left] > nums[right]
time O(n^3)
space O(n) wrt result

Use of pointers:

-initialize i and left
-while loop from left to length of nums
    -initialize right is left + 1
    -add 1 to result i if nums[left] > nums[right]
    -increment left and i, and reset right to left + 1 if right ends length of nums
    - else increment right
time O(n)
space O(n) wrt to result list or O(1)

Can use binary search index to reduce time to nLog(m)
 */

//MERGE SORT 
function countSmaller(nums) {
  const result = new Array(nums.length).fill(0);
  const indexedNums = nums.map((num, index) => ({ num, index }));

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge step with counting smaller elements
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < left.length || j < right.length) {
      if (j === right.length || (i < left.length && left[i].num <= right[j].num)) {
        merged.push(left[i]);
        result[left[i].index] += j; // Count smaller elements from the right
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    return merged;
  }

  mergeSort(indexedNums);

  return result;
}

//BINARY SEARCH INDEX
//  class FenwickTree {
//   constructor(size) {
//     this.tree = new Array(size + 1).fill(0);
//   }

//   update(index, delta) {
//     while (index < this.tree.length) {
//       this.tree[index] += delta;
//       index += index & -index;
//     }
//   }

//   query(index) {
//     let sum = 0;
//     while (index > 0) {
//       sum += this.tree[index];
//       index -= index & -index;
//     }
//     return sum;
//   }
// }

// function countSmaller(nums) {
//     //uniqueNums is sorted nums 
//   const uniqueNums = [...nums].sort( (a,b) => a-b);

//   //construct a tree
//   const tree = new FenwickTree(uniqueNums.length);
//   const result = [];

//   for (let i = nums.length - 1; i >= 0; i--) {
//       //Finds index a
//     const index = uniqueNums.indexOf(nums[i]) + 1;
//     result.unshift(tree.query(index - 1));
//     tree.update(index, 1);
//   }

//   return result;
// }

//POINTERS 
//O(N)
// var countSmaller = function(nums) {

//     const result = new Array(nums.length).fill(0);

//     let l = 0, r = l + 1;
//     while(l < nums.length-1){
//         if(nums[l] > nums[r]){
//             result[l]++
//         }

//         if(r >= nums.length - 1){
//             l++
//             r = l+1
//         } else {
//             r++
//         }

//     }

//     return result  
// };
