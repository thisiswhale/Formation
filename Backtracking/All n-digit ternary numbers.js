
/*
'''
❓ PROMPT
The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F.  The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given a number *n*, write a function that prints out all *n*-digit ternary numbers.

Example(s)
Numbers starting with zero shouldn't normally be included but the ternary representing the zero value is a valid 1-digit ternary. No other strings should start with a "0"!

generateNDigitTernaries(1) == ["0","1","2"]
generateNDigitTernaries(2) == ["10","11","12","20","21","22"]


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
function generateNDigitTernaries(n) {
def generateNDigitTernaries(n: int) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generateNDigitTernaries(n) {
  
  // single digit is a special case
  if (n == 1) {
    output.push('0')
  }

  const output = [];
  const stack = [];

  function permute() {
    if (stack.length === n) {
      output.push(stack.join(''));
      return;
    }
    for (let i = 0; i < 3; i++) {
      stack.push(i);
      permute();
      stack.pop();
    }
  }

  for (let i = 1; i < 3; i++) {
    stack.push(i);
    permute();
    stack.pop();
  }

  return output;
}

console.log(generateNDigitTernaries1(2))
