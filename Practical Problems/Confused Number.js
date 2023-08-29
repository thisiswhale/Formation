 /*
You're holding a silent auction with 650 bidders, assigning each bidder a numbered sign between 1-650. A person raises their sign when they want to make an offer.

However, they sometimes hold the sign upside-down, and the auctioneer
mistakes their number for a different number. For example, bidder #6 
raises their sign upside-down and could be mistaken for bidder #9.

Write a function that underlines all numbers from 1-650 that can be
misinterpreted for another number within that range when rotated 180 degrees.

EXAMPLES
The number 6 should be underlined because it can be misinterpreted for the number 9 and vice versa.

Input: integer 1-650
1 2 3 4 5 6 7 8 9 0
Find all values contain 6 and 9
*/


function underlineMistakenNumbers(upperBound) {
  
  const result = []
  let totalBidders = upperBound

  while(totalBidders < 0){
    let strVal = totalBidders.toString();
    for(const digit of strVal){
      if(digit === '6' || digit === '9'){
        result.push(strVal.parseInt())
        break
      }
    }
    totalBidders--
  }
  return result
}
// console.log(underlineMistakenNumbers(200))

// const results = underlineMistakenNumbers(650)
// console.log(results.length === 20)
// console.log(JSON.stringify(results.sort((a, b) => a - b))
// === JSON.stringify([
//   6, 9, 16, 18, 19, 61, 66, 68, 81, 86, 89,
//   91, 98, 99, 109, 119, 161, 191, 601, 611]))
  
//0,1,2,3,4,5,6,7,8,9
//60 -> 09
//11->11
//16 -> 91

/*
1. exclude number which contain non-flippable digits i.e. [2,3,4,5,7]
2. remove the number which remain themselves when flipped
3. flipped number should be less than equal to upper bound
4. remove the number which are divisble by 0

*/

function underlineMistakenNumbers(upperBound) {
  const flippable = new Set([1, 6, 8, 9, 0])
  const numsToUnderline = []

  function isFlippable(num) {
    for (const digit of num.toString())
      if (!flippable.has(parseInt(digit)))
        return false

    return true
  }

  function flipNumber(num) {
    let flippedStr = ""

    for (let digit of num.toString()) {
      if (digit === "6")
        flippedStr = "9" + flippedStr
      else if (digit === "9")
        flippedStr = "6" + flippedStr
      else
        flippedStr = digit + flippedStr
    }

    return parseInt(flippedStr)
  }

  function underlineMistakenNumber(num) {
    if (num % 10 === 0 || !isFlippable(num))
      return

    const flippedNum = flipNumber(num)
    if (flippedNum === num || flippedNum > upperBound)
      return

    numsToUnderline.push(num)
  }

  for (let num = 1; num <= upperBound; num++)
    underlineMistakenNumber(num)

  return numsToUnderline
}
