/**
 * Q. Given a string, find the longest palindromic substring. You may assume there is only one longest substring.

Examples:
• Given a string: "babe" // returns"bab"
• Given a string: "aefez" // returns "efe"

input ef , return e or f?
input str len of 1 return str
input '' return ''

retttae

eerasa

2 pointer

set max is 0
set maxLpointer 0
set maxRpointer str length
left pointer is 0
right pointer is left + 1

set a while loop where left and right pointer is less than str len

check str at left and right points are palindrome,
  if palindrome, check the length is greater than max
   set maxLpointer and maxRpointer with left and right pointer
   set max to the length, right-left

Time: check palindrome (n) * while(n)
space: 1

Backtracking approach
function (l,index)
  edge cases: 
  -str len < index
  
  check for palindrom and update variables 

  function(l, index+1)
  function(l+1, index+1)

Time: n^2
space: n
 */

function isPalindrome(str,l,r){

  const word = str.substring(l,r)
  let left = 0, right = word.length-1;
  while(left < right){

    if(word[left] !== word[right]) return false
    left++
    right--
  }

  return true
}

function lps(input) {
  let max = 0,
      maxLpointer = 0,
      maxRpointer = input.length,
      left = 0,
      right = left+1
  while(left < input.length){
    if(isPalindrome(input, left, right) && max < right-left){
      
      maxLpointer = left
      maxRpointer = right
      max = right - left
    }
    right++
    if(right > input.length){
      left++
      right = left+1
    }
  }

  return input.substring(maxLpointer,maxRpointer)
}

console.log(lps('aa'))
