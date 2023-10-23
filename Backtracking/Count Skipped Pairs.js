
/*
'''
❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
countSkippedPairs("AxAxA") == 3
countSkippedPairs("AxAxAx") == 4
countSkippedPairs("AxAxAxA") == 4
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function countSkippedPairs(word) {
def countSkippedPairs(word: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Without creating new strings
//AxAxA

function countSkippedPairs(word) {

  function helper(start){
    if(word.length <= start + 2 ){
      return 0
    }

    if(word[start] == word[start + 2]){
      return 1 + helper(start+1)
    }

    return helper(start+1)
  }

  return helper(0)
}

console.log(countSkippedPairs("axa") == 1)
console.log(countSkippedPairs("axax") == 2)
console.log(countSkippedPairs("axbx") == 1)
console.log(countSkippedPairs("hi") == 0)
console.log(countSkippedPairs("hihih") == 3)
console.log(countSkippedPairs("ihihhh") == 3)
console.log(countSkippedPairs("ihjxhh") == 0)
console.log(countSkippedPairs("") == 0)
console.log(countSkippedPairs("a") == 0)
console.log(countSkippedPairs("aa") == 0)
console.log(countSkippedPairs("aaa") == 1)
console.log(countSkippedPairs("aaaaaaaa") == 6)
