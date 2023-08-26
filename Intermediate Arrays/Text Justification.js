/*
'''
Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

For the last line of text, it should be left-justified, and no extra space is inserted between words.
 

EXAMPLE(S)
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16

returns
["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the lazy dog    "]  // (left justify, fill the end with 4 spaces)
 
input: words=["apple"], maxWidth=7
output: ["apple  "]

FUNCTION SIGNATURE
function justify(words, maxWidth) {
def fullJustify(words: list[str], maxWidth: int) -> list[str]:
'''
*/
// res=[]

// loop for string list 
//  curr=[]
//  counter for current words length
//  counter=0


//  loop to find words for line
//    break out of the loop when counter > k

//  reqSpaces = k - counter
//  
//  join the words together with the proper spaces
//  add joined words to return list

function justify(words, maxWidth) {

  if(!words.length) return []

  const result = []
  
  let curr = []
  let counter = 0
  for(const word of words){
    let spaces = curr.length// >= 0 ? curr.length -1 : 0
    if(counter + word.length + spaces  > maxWidth){
      result.push(curr.join(" "))
      counter = 0
      curr = []
    } 
    counter += word.length 
    curr.push(word)
  }
  if(curr.length) result.push(curr.join(" "))

  return result
  
}


console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16));
console.log(justify(["Hello", "world"], 6));
console.log(justify(["foo"], 4));
console.log(justify(["this", "is", "line", "1", "Here", "is", "line", "2", "Finally", "line", "3"], 17));
console.log(justify([], 4));

function formatLastLine(words, lineLength) {
  console.log("last", words, lineLength);
  const combined = words.join(' ');
  const extraSpaces = lineLength - combined.length;
  const spaces = new Array(extraSpaces).fill(' ').join('');
  return combined + spaces;
}

function formatRegularLine(words, lineLength) {
  if (words.length === 1) return formatLastLine(words, lineLength);
  const combinedLength = words.reduce((t, x) => x.length + t, 0);

  const numOfWords = words.length;
  const numOfBaselineSpaces = Math.floor((lineLength - combinedLength) / (numOfWords - 1));
  let remainder = (lineLength - combinedLength) % (numOfWords - 1);
  const baselineSpaces = new Array(numOfBaselineSpaces).fill(' ').join('');
  const extraSpaces = baselineSpaces + " ";

  const output = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (remainder > 0) {
      output.push(extraSpaces);
      remainder--;
    } else {
      output.push(baselineSpaces);
    }
    output.push(words[i]);
  }

  return output.join('');
}

function justify(words, maxWidth) {
  if (words.length === 0) return [];

  const lines = [];
  let currentLineWords = [words[0]];
  let currentLineLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    const nextWord = words[i];
    if (nextWord.length + 1 + currentLineLength > maxWidth) {
      // Doesn't fit. Format what we have and add this word as
      // the first on the next line.
      lines.push(formatRegularLine(currentLineWords, maxWidth));
      currentLineWords = [nextWord];
      currentLineLength = nextWord.length;
    } else {
      // Fits. Take it an move on.
      currentLineWords.push(nextWord);
      currentLineLength += nextWord.length + 1;
    }
  }
  if (currentLineLength > 0) {
    lines.push(formatLastLine(currentLineWords, maxWidth));
  }

  return lines;
}

/*
def formatLastLine(words: list[str], lineLength: int) -> str:
    combined = ' '.join(words)
    extraSpaces = lineLength - len(combined)
    spaces = ' ' * extraSpaces
    return combined + spaces

def formatRegularLine(words: list[str], lineLength: int) -> str:
    if len(words) == 1:
        return formatLastLine(words, lineLength)
    combinedLength = sum(len(word) for word in words)

    numOfWords = len(words)
    numOfBaselineSpaces = (lineLength - combinedLength) // (numOfWords - 1)
    remainder = (lineLength - combinedLength) % (numOfWords - 1)
    baselineSpaces = ' ' * numOfBaselineSpaces
    extraSpaces = baselineSpaces + " "

    output = [words[0]]
    for i in range(1, len(words)):
        if remainder > 0:
            output.append(extraSpaces)
            remainder -= 1
        else:
            output.append(baselineSpaces)
        output.append(words[i])

    return ''.join(output)

def fullJustify(words: list[str], maxWidth: int) -> list[str]:
    if len(words) == 0:
        return []

    lines = []
    currentLineWords = [words[0]]
    currentLineLength = len(words[0])

    for i in range(1, len(words)):
        nextWord = words[i]
        if len(nextWord) + 1 + currentLineLength > maxWidth:
            lines.append(formatRegularLine(currentLineWords, maxWidth))
            currentLineWords = [nextWord]
            currentLineLength = len(nextWord)
        else:
            currentLineWords.append(nextWord)
            currentLineLength += len(nextWord) + 1
    if currentLineLength > 0:
        lines.append(formatLastLine(currentLineWords, maxWidth))

    return lines

*/
