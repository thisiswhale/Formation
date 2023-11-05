
/*
'''
Given a text input, print out the kth line in the file.

Follow-ups:
1) Ignoring the space complexity used to load the file into memory, what additional memory does using .split() incur? The answer should be O(n) since we're making an array copy.

2) Come up with an iterative solution that uses only O(l) additional space (after loading the file into memory).

EXAMPLE(S)
"lineZero\nlineOne\nlineTwo\nlineThree\n", k = 0
Output: "lineZero"

"lineZero\nlineOne\nlineTwo\nlineThree\n", k = 3
Output: "lineThree"

"lineZero\nlineOne\nlineTwo\nlineThree\n", k = 5
Output: ""
 

/** 
 * Approach #1
 * -Create an arr and split text by '\n'
 * -Return the str by arr at k, arr[k] or "Lines not found" when arr length is less than k
 * 
 * -Time complexity: O(n) arr.split is traversing the character to create the split
 * -Space complexity: O(n) New Array to store values
 * 
 * 
 * Approach #2
 * -Two pointer
 * -Create start and end variables and set both to 0
 * -Iterate text with while loop with end < text length condition
 *  -Check for '\n' at text[end] 
 *    -Return the line when k is 0
 *    -Set start variable to end + 1, to start new line
 *    -Decrement k
 * -Return 'Lines not found'
 * 
 * -Time complexity: O(kl) where k is line number and l is the avg # of characters per line
 * -Space: O(n) where n is the number of characters in the file
 

FUNCTION SIGNATURE
func printLine(text: String, lineNumber: Int)
'''
*/

function getKthLine(text, lineNumber){
  if(!text.length) return '';

  const arr = text.split('\n');  

  return arr.length > lineNumber ? arr[lineNumber] : '';
}

function getKthLine(text,k){
  let start = 0, end = 0;

  while(end < text.length){
    if(text[end] === '\n'){
      if(k === 0) return text.substring(start, end)
      start = end + 1;
      k--
    }
    end++
  }

  return 'Lines not found'
}

const text = "lineZero\nlineOne\nlineTwo\nlineThree\n";
const k = 4;
console.log(getKthLine(text, k)); // Output: "lineZero"

console.log(getKthLine('lineZero\nlineOne\nlineTwo\nlineThree\n', 0)) // lineZero
console.log(getKthLine('lineZero\nlineOne\nlineTwo\nlineThree\n', 2)) // lineTwo
console.log(getKthLine('lineZero\nlineOne\nlineTwo\nlineThree\n',3)) // lineThree
console.log(getKthLine("I was going\nto the park\n to walk my dog\ntoday",1))
