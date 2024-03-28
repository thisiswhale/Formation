// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// https://leetcode.com/problems/word-ladder/description/

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

/**
 * 
 edge cases:

 endWord needs to be in wordList
 wordList is not empty
 endWord  equal the beginWord return 0 if wordList contains endWord

 inputs: beginWord, endWord, wordList
 output: int value, # of word was transformed
hit 

"hit" -> "hot" -> "dot" -> "dog" -> cog"

traverse the beginWord of char
 h, i, t
  
  traverse the wordList of word, check the ch

 */


        hit 
                  lot
        /   \.     |
      lit   hot - bot
      / |.    | 
    lot bit.   dot 
    |.          / |
    bot        lot bot

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    
};




// def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
//   if endWord not in wordList:
//       return 0
  
//   #create adjacency list
//   adj = defaultdict(list)
//   for i in range(len(wordList)):
//       for j in range(len(beginWord)):
//           word = wordList[i]
//           adj_key = word[:j] + '*' + word[j+1:]
//           adj[adj_key].append(word)
  
//   q = deque([beginWord])
//   count = 1
//   visit = set()
  
//   while q:
//       for i in range(len(q)):
//           word = q.popleft()
//           if word == endWord:
//               return count
//           for x in range(len(word)):
//               adj_word = word[:x] + '*' + word[x+1:]
//               if adj_word in adj:
//                   for nei in adj[adj_word]:
//                       if nei not in visit:
//                           q.append(nei)
//                           visit.add(nei)
//       count += 1
      
//   return 0
