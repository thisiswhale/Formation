/*
https://leetcode.com/problems/evaluate-reverse-polish-notation

*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    if(!tokens.length) return 0
    //traverse the list
    //push into stack
    //if its an operand then pop stack twice to calcualte value and push value back
    const stack = [];
    while(tokens.length){

        const input = tokens.shift()
        if(input === '+'){
            const val1 = Number(stack.pop())
            const val2 = Number(stack.pop())
            const total = val1 + val2
            stack.push(total)
        }
        else if (input === '-' ){
            const val1 = Number(stack.pop())
            const val2 = Number(stack.pop())
            const total = val2 - val1
            stack.push(total)
        }else if (input === '*'){
            const val1 = Number(stack.pop())
            const val2 = Number(stack.pop())
            const total = val1 * val2
            stack.push(total)
        } else if (input === '/'){
            const val1 = Number(stack.pop())
            const val2 = Number(stack.pop())
            const total = val2 / val1
            stack.push(total > 0 ? Math.floor(total) : Math.ceil(total))
        } else {
            stack.push(input)
        }

    }

    return stack.length ? stack[0] : 0;
};

function evalExpr(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
      break;
    case '-':
      return operand1 - operand2;
      break;
    case '*':
      return operand1 * operand2;
      break;
    case '/':
      const quotient = operand1 / operand2;
      return quotient > 0 ? Math.floor(quotient) : Math.ceil(quotient);
      break;
  }
}

function evalRPN(tokens) {
  const isOperator = (t) => t === '+' || t ==='-' || t === '/' || t === '*';

  const stack = [];

  for (const token of tokens) {
    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      stack.push(evalExpr(operand1, operand2, token));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
}
