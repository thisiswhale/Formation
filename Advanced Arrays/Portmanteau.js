/*
Given three words, determine if the third word is potentially a portmanteau of the first two.

A portmanteau (https://en.wikipedia.org/wiki/Portmanteau) is a word that is made by taking the start of one word and the end of another and mashing them together. Brunch is a great example, combining the first 2 letters of "breakfast" with the last 4 of "lunch".

Compound words aren't considered portmanteaus, so "football" is not a portmanteau of "foot" and "ball". At least one of the two words needs to be truncated.
 

EXAMPLE(S)
isPortmanteau("smoke", "fog", "smog") == True (sm + og)
sm og
isPortmanteau("snake", "fog", "smog") == False

isPortmanteau("lunch", "breakfast", "brunch") == True (br + unch)
isPortmanteau("breakfast", "lunch", "brunch") == True (br + unch)

isPortmanteau("shrink", "inflation", "shrinkflation") == True (shrink + flation)
isPortmanteau("foot", "ball", "football") == False
 
edge cases:
conpound words are not portmanteaus
total length of proposed == len(word1) + len(word2)

isPortmanteau("snake", "fog", "") == false

ex 
count = len(proposed)
"smoke", "fog" => "smog"
smoke
fog

Loop word1 to compare the word at the start
  decrement count as it finds char match
Loop word2 to compare the word at the end
  decrement count as it finds char match
  check if count == 0  return true

reset the count back to the len(proposed)
Loop word2 to compare the word at the start
  decrement count as it finds char match
Loop word1 to compare the word at the end
  decrement count as it finds char match

return false

Time complexity O(n)
Space O(1)
"lunch", "breakfast" => "brunch"

FUNCTION SIGNATURE
function isPortmanteau(word1, word2, proposed) {
def isPortmanteau(word1: str, word2: str, proposed: str) -> bool:
*/

function isPortmanteau(word1, word2, proposed) {
  // "rent", "tent", "tent"
  //count: 13 -> 13 - 6 = 7
  if(!proposed.length) return false
  if(proposed.length === (word1.length + word2.length)) return false
  if(proposed === word1) return false
  if(proposed === word2) return false

  let count = proposed.length 

  for(let i = 0; i < word1.length; i++){
    if(word1[i] === proposed[i]) {
      count--
    } else break
  }

  if(count === 0) return false

  for(let i = 0; i < word2.length; i++){
    if(word2.at(-1-i) === proposed.at(-1-i)) { 
      count--
    if(count === 0) return true
    } else break
  }

  count = proposed.length

  for(let i = 0; i < word2.length; i++){
    if(word2[i] === proposed[i]) {
      count--
    } else break
  }
  if(count === 0) return false


  for(let i = 0; i < word1.length; i++){
    if(word1.at(-1-i) === proposed.at(-1-i)) { 
      count--
    if(count === 0) return true
    } else break
  }

  return false
}
// isPortmanteau("smoke", "fog", "smog") == True (sm + og)
// sm og
// isPortmanteau("snake", "fog", "smog") == False

// isPortmanteau("lunch", "breakfast", "brunch") == True (br + unch)
// isPortmanteau("breakfast", "lunch", "brunch") == True (br + unch)

// isPortmanteau("shrink", "inflation", "shrinkflation") == True (shrink + flation)
// isPortmanteau("foot", "ball", "football") == False
// console.log(isPortmanteau("", "", "")) // false
// console.log(isPortmanteau("smog", "fog", "smog")) // false
// console.log(isPortmanteau("smoke", "fog", "smog")) // true
// console.log(isPortmanteau("snake", "fog", "smog")) // false
// console.log(isPortmanteau("lunch", "breakfast", "brunch")) // true
// console.log(isPortmanteau("breakfast", "lunch", "brunch")) // true
// console.log(isPortmanteau("shrink", "inflation", "shrinkflation")) // true
// console.log(isPortmanteau("foot", "ball", "football")) // false


console.log(isPortmanteau("fog", "smoke", "smog") == true)
console.log(isPortmanteau("smoke", "fog", "smog") == true)
console.log(isPortmanteau("motor", "hotel", "motel") == true)
console.log(isPortmanteau("branch", "much", "brunch") == false)
console.log(isPortmanteau("shrink", "inflation", "shrinkflation") == true)
console.log(isPortmanteau("skimp", "inflation", "skimpflation") == true)
console.log(isPortmanteau("miserable", "flimsy", "mimsy") == true)
console.log(isPortmanteau("puppies", "cat", "puppi") == false)
console.log(isPortmanteau("cat", "dog", "otter") == false)
console.log(isPortmanteau("ten", "at", "tent") == true)
console.log(isPortmanteau("at", "ten", "tent") == true)
// special cases
// proposed is one of the words
console.log(isPortmanteau("bartender", "ten", "bartender") == false)
console.log(isPortmanteau("bartender", "tender", "bartender") == false)
console.log(isPortmanteau("bartender", "tenderness", "bartender") == false)
// compounds aren't portmanteaus
console.log(isPortmanteau("foot", "ball", "football") == false)
console.log(isPortmanteau("ski", "water", "waterski") == false)
console.log(isPortmanteau("bat", "man", "batman") == false)
console.log(isPortmanteau("man", "bat", "batman") == false)
console.log(isPortmanteau("rent", "tent", "tent") == false)
console.log(isPortmanteau("rent", "tent", "rent") == false)
console.log(isPortmanteau("", "test", "test") == false)
console.log(isPortmanteau("test", "", "test") == false)
console.log(isPortmanteau("test", "test", "test") == false)
console.log(isPortmanteau("", "", "test") == false)
console.log(isPortmanteau("", "", "") == false)

function isPortmanteau(word1, word2, proposed) {
  function check(w1, w2) {
    let p1 = 0
    for (; p1 < w1.length && p1 < proposed.length && proposed[p1] === w1[p1]; p1++) {
      
    }
    p1-- // the loop iterated 1 too far

    let p2 = proposed.length - 1
    for (let s2 = w2.length - 1; s2 >= 0 && proposed[p2] === w2[s2]; s2--, p2--) {}

    return p1 >= p2 && p2 < proposed.length - 1
  }

  // Rule out compounds
  if (proposed === word1 + word2) return false
  if (proposed === word2 + word1) return false

  // The portmanteau can't exactly match either source word
  if (proposed === word1 || proposed === word2) return false

  return check(word1, word2) || check(word2, word1)
}
