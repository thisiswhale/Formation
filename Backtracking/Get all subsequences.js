/*
'''
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.
 

EXAMPLE(S)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
 

FUNCTION SIGNATURE
function getAllSubsequences(word) {
def getAllSubsequences(word: str) -> list[str]:
'''


"ab" -> ["a", "b", "ab"]

base:
builder, index -> 1, 2

for a, b


getAllSubs = (str) => {

  result = []
  curStr = []

  helper = (index) => {
    if(index == str.length) {
      return
    }

    for loop over str
      curStr.push(str[ind])
      put curStr into result
      helper(index+1)
      curStr.pop()
  }

  helper(0);
  return result
}

*/

const getAllSubs = (str) => {

  const result = []
  const currStr = []

  const helper = (index) => {
    if(index == str.length) {
      return
    }
    
    for(let i = index; i < str.length;i++){

      currStr.push(str[i])
      console.log(index, currStr)
      result.push(currStr.join(""))
      helper(i+1)
      currStr.pop()
    }
  }
  helper(0);
  return result
}

console.log(getAllSubs('abc'))
// console.log(getAllSubs(''))

const getAllSubsWithPassingString = (str) => {

  const result = []
  
  const helper = (index, currStr) => {
    if(index == str.length) {
      return
    }
    for(let i = index; i < str.length;i++){
      currStr += str[i]
      result.push(currStr)
      helper(i+1, currStr)
      currStr = currStr.substring(0, currStr.length-1);
    }
  }
  helper(0, "");
  return result
}

// console.log(getAllSubsWithPassingString('abc'))
// console.log(getAllSubsWithPassingString(''))

/*






*/
