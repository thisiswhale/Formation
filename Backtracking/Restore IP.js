/**
 * @param {string} s
 * @return {string[]}
 Input: str
 output: arr

 Valid integers are between 0 and 255
 Find all possible valid ip addresses

 return [] for all invalid str input
  invalid str input: 
  -contains special characters, 
  -cases with leading 0s

-up to 3 digits per point
-there are 4 integers seperate max
-edge cases to return [] 
 - s length is greater than 12

 Approach:
 Backtracking Problem
 
 have a helper function to remove a char from str at every call stack
 append str to a list ie input is 123134, check 1, check 2, check 3, check 1, then check 13
 123134, 1,2,3,1,13,134,31,3,34

 use a for loop to check up to 3 positions of the str
  check str is between 0 and 255 AND not have leading 0
  push sliced str into list
  call function again as str at i is removed
  pop sliced string from list

 base case: 
  -remaining str is 0 and and list has length of 4, push list into result
  -remaining str is not 0 and list has length of 4, end that path

 Time: O(3^n) where n is the length of s OR O(3^12) because the max of s input since IP length is up to 12
 Space: O(n)?

 */
var restoreIpAddresses = function(s) {
  const result = []
  if(s.length > 12) return result

  const currIp = []

  function helper(remaining){

    if(currIp.length === 4 && remaining.length == 0){
      result.push(currIp.join('.'))
      return
    }

    if(currIp.length === 4 && remaining.length > 0) return

    for(let i = 1; i <= Math.min(3, remaining.length); i++){
      const path = remaining.slice(0,i)
      const value = Number(path)
      if((0<=value && value <= 255) && value.toString() === path){
        currIp.push(path)
        helper(remaining.slice(i))
        currIp.pop()
      }
    }
  }

  helper(s)
  return result
};


// function restoreIpAddresses(s) {

//   function isValid(part) {
//       // Check if the given part is a valid IP address component.
//       const number = parseInt(part, 10);
//       return 0 <= number && number <= 255 && String(number) === part;
//   }

//   function backtrack(remaining, currStr) {
//       // If we have 4 parts and no remaining string, we found a valid IP address.
//       if (currStr.length === 4 && remaining.length === 0) {
//           result.push(currStr.join('.'));
//           return;
//       }

//       // If we have 4 parts but there's still remaining string, it's not valid.
//       if (currStr.length === 4 && remaining.length > 0 ) {
//           return;
//       }

//       // Try forming new parts with 1, 2, or 3 characters from the remaining string.
//       for (let i = 1; i < Math.min(4, remaining.length + 1); i++) {
//           const part = remaining.slice(0, i);
//           if (isValid(part)) {
//               // If the part is valid, add it to the currStr list and continue backtracking.
//               backtrack(remaining.slice(i), currStr.concat(part));

//               //or
//               // currStr.push(part)
//               // backtrack(remaining.slice(i), currStr);
//               // currStr.pop()

//           }
//       }
//   }

//   const result = [];
//   backtrack(s, []);
//   return result;
// }

// function restoreIpAddresses(s) {
//   if(s.length > 12) return []

//   const result = []
  
//   function helper(i, dots, currIp){

//     if(dots === 4 && i === s.length) {
//       result.push(currIp.slice(0,currIp.length-1))
//       return
//     }

//     if(dots > 4) return

//     for(let j = i; j < Math.min(i + 3, s.length ); j++){
//       const digit = parseInt(s.slice(i,j+1))
//       if( digit <= 255 && ( i == j || s[i] != '0')){
//         helper(j+1, dots + 1, currIp + digit +'.')
//       }
//     }
//   }

//   helper(0, 0, '')

//   return result
// }
