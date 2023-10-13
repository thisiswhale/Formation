// https://leetcode.com/problems/letter-combinations-of-a-phone-number/


const numberMap = {
  '0': '',
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

function letterCombinations(digits) {
  const stack = [];
  const results = [];

  function dfs(index) {
    console.log(stack, index)
    if (index === digits.length) {
      // base case
      results.push(stack.join(''));
      return;
    }

    // iterate through the possible options from here
    const digit = digits[index];
    for (const c of numberMap[digit]) {
      // make a choice!
      stack.push(c);
      dfs(index + 1);
      // unmake a choice!
      stack.pop();
    }
    if (numberMap[digit].length === 0) {
      dfs(index + 1);
    }
  }

  dfs(0);
  return results;
}

console.log(letterCombinations("23"));
