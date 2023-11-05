/**

https://leetcode.com/problems/sort-colors/description/

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:
• Given an array: [2, 1] // returns [1, 2]
• Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]



*/


function dnf(input) {
  let l = 0, r = input.length-1

  let i = 0;
  while(i <= r){
    if(input[i] === 2){
      [input[i], input[r]] = [input[r], input[i]]
      i--
      r--
    } else if(input[i] == 0){
      [input[l], input[i]] = [input[i], input[l]]
      l++
    }
    i++
  }

  return input
}

// Test Cases
var array1 = []; 
var array2 = [2, 1, 1, 0];
var array3 = [0, 2, 1, 0, 1, 2];
console.log(dnf(array1)) // []
console.log(dnf(array2)) // [0, 1, 1, 2]
console.log(dnf(array3)) // [0, 0, 1, 1, 2, 2]
