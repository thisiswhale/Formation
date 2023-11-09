/*
'''
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.
 

EXAMPLE(S)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
 

Time: O(2^n) to generate each of the 2 possibilities for all n positions
Space: O(n) to create up to n stack frames. The output size is O(2n). 
       Since the output is so large, it's worth separating out from the necessary space to do the rest of the work.

*/

// Solution #1 Use array based backtracking
const getAllSubs = (str) => {

  const result = []
  const currStr = []

  const helper = (index) => {
    if(index === word.length) {
       if(str.join('').length) {
         result.push(str.join(''))
       }
       return
    }

    currStr.push(str[index])
    helper(index+1)
    currStr.pop()
    helper(index+1)
  }
  helper(0);
  return result
}

// Solution #2 Use array based backtracking, with for loop
const getAllSubs = (str) => {
  const result = []
  const currStr = []

 const helper = (index) => {
   if(index === str.length) return

   for(let i = index; i < str.length; i++){
     currStr.push(str[i])
     result.push(currStr.join(""))
     helper(i + 1)
     currStr.pop()
   }
 }

 helper(index)

 return result
}

// Solution #3 Use string based backtracking
const getAllSubs = (str) => {
 const result = []
 let currStr = ''

 const helper = (index) => {
   if(index === str.length) return

   for(let i = index; i < str.length; i++){
      currStr += str[i]
      result.push(currStr)
      helper(index + 1)
      currStr = currStr.substring(0, currStr.length-1)
   }
 }

 helper(index)
 return result
}

console.log(getAllSubs('abc'))
// console.log(getAllSubs(''))







*/
