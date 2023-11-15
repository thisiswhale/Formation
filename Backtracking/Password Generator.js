
/*
'''
❓ PROMPT
Given a list of words *L* and a maximum password length *maxLength*, generate all valid human-friendly passwords using *L* that are at most *maxLength* long with the following rules. This was inspired by https://xkcd.com/936/

We can generate a human-friendly password by concatenating several words from a list of words (e.g. *correct horse battery staple*). Define a human-friendly password to be a string made up of words such that:

1. The password is comprised of only words from the list
2. Each word is separated by a space between them
3. Each word is used at most once
4. The password is can be at most *maxLength* long when including spaces.

Example(s)
These are valid human-friendly passwords generated from the list:
[apple, bat, cheese, dog]
- apple bat cheese dog
- apple cheese bat
- dog apple
- cheese bat dog

However, there's a maxLength value that can be passed in that limits the possible combinations:
generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10) ==
[
  "apple",
  "dog",
  "zebra",
  "apple dog",
  "dog apple",
  "dog zebra",
  "zebra dog"
]
"zebra apple" and "apple zebra" are skipped because they're 11 chars.
 

🔎 EXPLORE
List your assumptions & discoveries:
 empty list return empty list
 maxLength more than the total given list, return all possible combinations

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: backtracking
Time: O(n^L), where n is the length of words, L is maxLength
Space: O(n), creating the n call stacks 
 

📆 PLAN
Outline of algorithm #: 

Check for empty words, return []
initialize combination list

initialize a path list
initialize totalLength to 0
initialize index to  0

create a recursive backtrack function
  base case: 
  -when index reaches the length of word OR totalLength is greater than maxLength
  -push path format in str into combination as long path length is not 0


  call backtrack function
  push word[index] into path
  sum totalLength with length word[index]
  call backtrack function
  pop path 
  subtrack totalLength with length word[index]
  

call backtract function
return combination 

🛠️ IMPLEMENT
function generateAllHumanFriendlyPasswords(words, maxLength) {
def generateAllHumanFriendlyPasswords(words: list[str], maxLength: int) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generateAllHumanFriendlyPasswords(words, maxLength) {

  if(!words.length || !maxLength) return []
  
  const combinations = []
  const visited = new Set()
  const path = []

  function helper(index){
    if(words.length === index ) return 

    for(let i = 0; i < words.length; i++){
      if(!visited.has(words[i])) {
        path.push(words[i])
        visited.add(words[i])

        if(path.join(' ').length <= maxLength) {
          combinations.push(path.join(' '))
        }

        helper(index+1)
        visited.delete(words[i])
        path.pop()
      }

    }
  }

  helper(0)

  return combinations
}

// console.log(generateAllHumanFriendlyPasswords(['A','B','C'], 5))
console.log(generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10) )
/*
[
  "apple",
  "dog",
  "zebra",
  "apple dog",
  "dog apple",
  "dog zebra",
  "zebra dog"
]
*/
