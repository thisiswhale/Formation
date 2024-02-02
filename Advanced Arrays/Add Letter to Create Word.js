
/*
'''
Given a dictionary (represented by an array of string) and a word, return an array containing all words that can be created by adding one letter to the word.
 

EXAMPLE(S)
dictionary: `["CAT", "CART", "ACTS", "BATT", "CATTY"]`
word: `"CAT"`
would return `["ACTS", "CART"]`

dictionary: `["CAT", "CART", "ACTS", "BAT"]` 
word: `"CAT"`
would return `["ACTS", "CART"]`

because these words can be formed with the letters "C", "A", "T", and exactly one more letter.
 

FUNCTION SIGNATURE
def possibleWords(dictionary, word):
'''
*/
/*
EXPLORE
- all words all uppercase
- all strings contains alphabetical letters (A-Z)
- input is an array of Strings
- letters do NOT need to be sequential in the result array

BRAINSTORM
k (length of word) * n (length of word of dictionary )
-Mapping the frequency of the word
-check dictionary for length + 1 equals to word length

foundSingleLetter = True 
{
  C: 0
  A: -1
  T: 0
}

globalFreqCount 
for iter
  localFreqCount = globalFreqCount
  if freqCount[char] == -1 {
    continue
  }
  if foundSingleLetter = false and freqCount[char] = 0
    foundSingleLetter = True
    freqCount[char] = -1
  ]


CAAAT 

CAT  k * n 

AAACT
ACT 


- If char not in map foundSingleLetter = True


PLAN

IMPLEMENT

VERIFY

*/

function possibleWords(dictionary, word){
  const freqWord = {}
  const result = []
  
  for(let char of word){
    freqWord[char] = (freqWord[char] ?? 0) + 1;
  }

  for (const dictWord of dictionary) {

    // if (dictWord.length !== word.length+1) continue;
    if (dictWord.length == word.length) continue;
    
    let countNewLetter = 0;
    
    const freqCount = JSON.parse(JSON.stringify(freqWord));

    for(let char of dictWord){

      if(char in freqCount){
        freqCount[char]--;
      }

      //Add to count when we find a new Letter or freqCount of char is less than 0
      if (freqCount[char] === undefined || freqCount[char] < 0) {
        countNewLetter++;
      }

      // if(countNewLetter > 1){
      //   break;
      // }
    }

    if (countNewLetter === 1) {
      result.push(dictWord)
    }
  }
  
  return result
}
let dictionary = ["CAT", "CART", "ACTS", "AACTS", "BATT", "CATTY"] // CART , ACTS
// let dictionary = ["BATT"] // CART , ACTS
// let dictionary = ["AACTS", "ACTS"]
let word = "CAT"

console.log(possibleWords(dictionary,word)) //// ["ACTS", "CART"]
