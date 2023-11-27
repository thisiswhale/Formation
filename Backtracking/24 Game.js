/**
 * @param {number[]} cards
 * @return {boolean}
 */
 /**
 [9,9,9,9]
 Cards can be in any order and expressions can be in any order
 -expressions can be repeated
 -Cards be used only once in expression
 [1,1,1,1] is false
 ie [1,2,3,4]
 1+2+3+4
 1+2+3-4
 1+2+3*4
 1+2+3/4

 Time: O(4^!4) or O(!4^!4) Permutating all the cards and expressions
 Space: same as Time

 -instantiate a boolean variable, isValid
 -instantiate a visited set to check for cards
 -instantiate a list of expressions ['+','-','*','/']

 -create backtracking function with index and total
    base case: cards length reaches index and check total is 24 to update isValid is true
    
    for loop of cards
        if(visited.has(card)) continue
            visited.add(card)
        for loop of expressions
            helper(index+1, calculate(total, expression) )
        visited.remove(card)

 -return isValid
  */

function judgePoint24(cards) {
  // valid results will be ~24
  //                                                delta
  const isValid = (value) => Math.abs(value - 24) < 0.0000001;
  
  function calculate(hand) {
    // base case
    // we only have one card left - lets see if it evaluates to ~24
    if (hand.length === 1) {
      return isValid(hand[0]);
    }
    let valid = false;
  
    // max length of the hands array is 4 cards
    // but through recursion we shorten the length of the hands to 3 then 2 then 1
    for (let i = 0; i < hand.length; i++) {
      for (let j = i + 1; j < hand.length; j++) {
        let firstCard = hand[i];
        let secondCard = hand[j];
  
        // save the rest of the hand so we can evaluate the remaining cards next
        // you will never have more than 2 extra cards
        const nextCards = hand.filter((x, index) => index !== i && index !== j);

        // Now try all of the different ways of combining the two cards we
        // selected, along with any remaining cards.
        valid =
          valid ||
            calculate([...nextCards, firstCard + secondCard]) ||
            calculate([...nextCards, firstCard - secondCard]) ||
            calculate([...nextCards, secondCard - firstCard]) ||
            calculate([...nextCards, firstCard * secondCard]) ||
            calculate([...nextCards, firstCard / secondCard]) ||
            calculate([...nextCards, secondCard / firstCard]);
      }
    }
    return valid;
  } 
  
  // Starting out with the cards given. As this algorithm progresses,
  // we'll pass different card sets into deeper recursive calls. Some
  // of these cards will be the originals, but some will be 'virtual'
  // cards that represent the results of combining other cards.
  return calculate(cards);
}

// const judgePoint24 = function(cards) {    
//     let size = cards.length;
//     if(size === 1) {
//         if(Math.abs(cards[0] - 24) < 0.001) return true;
//         return false;
//     }
    
//     for(let i = 0; i < size; i++) {
//         for(let j = i + 1; j < size; j++) {

//             const c1 = cards[i]
//             const c2 = cards[j]
//             const possibleRes = [c1 + c2, c1 - c2, c2 - c1, c1 * c2, c1/c2, c2/c1]

//             const nextCards = cards.filter((x, index) => index !== i && index !== j);
//             // const nextCards = [];
//             // for(let k = 0; k < size; k++) {
//             //     if(k !== i && k !== j) nextCards.push(hand[k]);
//             // }

//             for(let val of possibleRes) {
//                 nextCards.push(val);
//                 if(judgePoint24(nextCards)) return true;
//                 nextCards.pop();
//             }
//         }
//     }
//     return false;
// };
