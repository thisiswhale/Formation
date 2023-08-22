function isBalancedMulti(string) {
  const brackets = {
    ')': '(', 
    ']': '[', 
    '}': '{'
  }
  const stack = []

  for(const char of string){
    if(char in brackets){
      const pair = stack.pop()
      if (pair != brackets[char]){
        return false
      }
    }
    else{
      stack.push(char)
    }
  }

  return stack.length === 0
}

// console.log(isBalancedMulti('}'))
// console.log(isBalancedMulti(')))((('))
// console.log(isBalancedMulti('(()())'))

// function isAlmostBalanced(str){
//   const stack = []
//   let mistakeFound = false
//   for(let i = 0; i < str.length; i++){
//     const c = str[i];
//     if (c === ')' && !stack.length) {
//       if(!mistakeFound) {
//         mistakeFound = true
//       } else {
//         return false
//       }
//     }
//     if (c === '(') {
//       stack.push(c);
//     } else {
//       stack.pop();
//     }
//   }

//   return (!mistakeFound && stack.length <= 1) || stack.length === 0;
// }

// console.log(isAlmostBalanced('')) //true
// console.log(isAlmostBalanced('(')) //true
// console.log(isAlmostBalanced(')')) // true
// console.log(isAlmostBalanced('()')) //true
// console.log(isAlmostBalanced('()))')) // false
// console.log(isAlmostBalanced('(())'))
// console.log(isAlmostBalanced('()))'))
// console.log(isAlmostBalanced('())))'))
// console.log(isAlmostBalanced(')))((('))
// console.log(isAlmostBalanced('(()())'))


function isBalanced(str){
  const stack = []
  for(const c of str){
    if (c === '(') {
      stack.push(c);
    } else if (c === ')' && stack.length) {
      stack.pop()
    } else return false
  }

  return stack.length === 0;
}

// console.log(isBalanced(''))
// console.log(isBalanced('()'))
// console.log(isBalanced('()()'))
// console.log(isBalanced('())'))

