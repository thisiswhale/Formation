
/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with the 26 red cards in one hand and the 26 black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single 52-card deck.

You build a machine that accepts a deck of cards to automatically determine the length of your most common mistake after the merge. The most common mistake can be identified by one that is not alternating from the opposite color. For example, "B, R, B, R" would be a perfectly alternating sequence, but there is one mistake in "B, B, R, B". If there are no mistakes, then return 0.

Example(s)
Given the shuffled deck: 
["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]

The following sequences of consecutive cards of the same color:

"R", "R", "R" - Length 3
"R", "R", "R", "R" - Length 4
"B", "B", "B" - Length 3

Returns 3 because it's the most "common" mistake, occurring twice.
 

🔎 EXPLORE
List your assumptions & discoveries:
-Only two values R & B
-Return 0 if arr is empty or only one value in Arr
-Return 0 when perfect alternate sequence
-Return MOST common mistake


Insightful & revealing test cases:
["R"] or ["B"] // 0
["R", "R", "R"] // 3
["R", "B", "R"] // 0
["B", "R", "B"] // 0

🧠 BRAINSTORM
What approaches could work?
Sliding Window 
-iterate the arr and count for consecutive cards
-find card is different, set most freq error length, reset the count, 

Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function mostFreqMistakeLength(deck) {
def mostFreqMistakeLength(deck: list[str]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
This problem is to find the most common mistake. A perfectly shuffled deck will have alternating cards R, B. A mistake would include a color that occurs more than once ex: 
  R, R, B, R.
Iterate through the deck (given list). Check the current card vs the previous card and compare if it's a mistake or alternating. Use a hash map to keep track of any time a mistake happens (where a streak is greater than 1).
Return the most common mistake in the hash map, otherwise return 0.

*/

// let arr = ["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]

function mostFreqMistakeLength(deck) {
  let mistakeCnt = {};
  let currStreak = 1;

  for (let i = 1; i < deck.length; i++) {
      if (deck[i] == deck[i-1]) {
          currStreak++;
      } else {
          if (currStreak > 1) {
              mistakeCnt[currStreak] = (mistakeCnt[currStreak] || 0) + 1;
          }
          currStreak = 1;
      }
  }
  //checks for the last index of deck
  if (currStreak > 1) {
      mistakeCnt[currStreak] = (mistakeCnt[currStreak] || 0) + 1;
  }

  if (Object.keys(mistakeCnt).length === 0) {
      return 0;
  }

  let commonMistake = Object.keys(mistakeCnt).reduce((a, b) => 
    mistakeCnt[a] > mistakeCnt[b] ? a : b
    );

  return parseInt(commonMistake);
}

console.log(mostFreqMistakeLength(["R"]) === 0);
console.log(mostFreqMistakeLength(["B", "R"]) === 0);
console.log(mostFreqMistakeLength(["R", "R"]) === 2);
console.log(mostFreqMistakeLength(["R", "R", "B", "R", "B", "B", "R", "R", "B"]) === 2);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "R", "B", "R", "R", "R", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "B", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]) === 0);
console.log(mostFreqMistakeLength(["R", "R", "B", "R", "R", "R", "R", "R", "B", "B"]) === 2);
console.log(mostFreqMistakeLength(["B", "B", "B", "B", "R", "R", "R", "B", "R", "R", "R"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "B", "B", "R", "R", "R", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]) == 3);
