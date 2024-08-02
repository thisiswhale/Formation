/*
https://leetcode.com/problems/grumpy-bookstore-owner/


There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers of length n where customers[i] is the number of the customer that enters the store at the start of the ith minute and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

 

Example 1:

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
Example 2:

Input: customers = [1], grumpy = [0], minutes = 1
Output: 1
 
*/

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}

 Customers and Grumpy same length

 Grump can be gumpy all minutes or not, [0,0,...] or [1,1,...]

 if grumpy is [1,1,...] then thats the maximum customer satisfy

 minutes at least 1

 set max to 0

 Traverse once to find the minimum # customer satisfactory, ignore minutes
    Add all to max
    
set tempMax = max
 Traverse the customers with l and r
    check if grumpy is 0 and within minutes, add to max

    check if r-l > minutes
        set max = Max(max, temp)
        subtract max from customer[l] if grumpy[l] is 0
        l++

    r++


 */

 var maxSatisfied = function(customers, grumpy, minutes) {
  // Pass 1: count customers already satisfied
  let alreadySatisfied = 0;
  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      alreadySatisfied += customers[i];
    }
  }
  // Pass 2: count max newly satisfied customers via sliding window
  let maxNewlySatisfied = 0;
  let currNewlySatisfied = 0;
  for (let right = 0; right < customers.length; right++) {
    const left = right - minutes;

    if (grumpy[right] === 1) {
      currNewlySatisfied += customers[right];
    }

    //Check if minutes out of bound, subract count from currNewlySatisfied
    if (right >= minutes && grumpy[left] === 1) {
      currNewlySatisfied -= customers[left];
    }

    maxNewlySatisfied = Math.max(maxNewlySatisfied, currNewlySatisfied);
  }

  return alreadySatisfied + maxNewlySatisfied;
};
// var maxSatisfied = function(customers, grumpy, minutes) {
//     if(!customers.length) return 0

//     let satisfied = 0

//     for(let i =0; i < customers.length; i++){
//         if(grumpy[i] === 1) {
//             satisfied += customers[i]
//         }
//     }

//     let currMax = 0
//     let curr = 0
//     let l = 0
//     // customer: [1,0,1,2,1,1,7,5]
//     // grumpy:   [0,1,0,1,0,1,0,1]
//     // minutes:  3
//     // max = 2 + 1 + 5 = 8

//     //temp = 9 , r = 4, l = 1
//     //max = 10
    
//     for(let r = 0; r < customers.length; r++){
//         if(grumpy[r] === 0) {
//             curr += customer[r]
//         }
//         currMax = Math.max(currMax, curr)
//         if( (r - l) === minutes ){
//             if(grumpy[l] === 0) {
//                 curr -= customer[l]
//             }
//             l++
//         }
//     }

//     return max
// };
