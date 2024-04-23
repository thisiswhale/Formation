/**
 * @param {string[]} words
 * @return {number}

 input : list of words
 output: # of longest possible word chain

 https://leetcode.com/problems/longest-string-chain/
 
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length)

    const wordsIndex = {}
    for(let i = 0; i < words.length; i++){
        wordsIndex[words[i]] = i
    }
    const dp = {}

    for(let i = 0; i < words.length; i++){
        const currWord = words[i]
        dp[i] = 1

        for(let j = 0; j < currWord.length; j++){
            const predecessor = currWord.substring(0,j) + currWord.substring(j+1, currWord.length)
            if(predecessor in wordsIndex){
                dp[i] = Math.max(dp[i], 1 + dp[wordsIndex[predecessor]])
            }
        }
    }
    console.log(dp)
    return Math.max(...Object.values(dp))
};

//TOP DOWN APPROACH
// var longestStrChain = function(words) {
//     words.sort((a,b) => a.length - b.length)

//     const wordsIndex = {}
//     for(let i = 0; i < words.length; i++){
//         wordsIndex[words[i]] = i
//     }
//     const dp = {}
//     function backtrack(index){

//         if(index in dp) return dp[index]

//         const currWord = words[index]

//         let res = 1
//         for(let i = 0; i < currWord.length; i++){
//             const predecessor = currWord.substring(0,i) + currWord.substring(i+1, currWord.length)
//             if(predecessor in wordsIndex){
//                 res = Math.max(res, 1 + backtrack(wordsIndex[predecessor]))
//             }
//         }
//         dp[index] = res
//         return res
//     }

//     for(let i = 0; i < words.length; i++){
//         backtrack(i)
//     }
//     return Math.max(...Object.values(dp))
// };

//RECURSIVE METHOD
// var longestStrChain = function(words) {
//     words.sort((a,b) => a.length - b.length)

//     const wordsIndex = {}
//     for(let i = 0; i < words.length; i++){
//         wordsIndex[words[i]] = i
//     }

//     function backtrack(index){

//         if(index >= words.length) {
//             return 0
//         }

//         const currWord = words[index]

//         let res = 1
//         for(let i = 0; i < currWord.length; i++){
//             const predecessor = currWord.substring(0,i) + currWord.substring(i+1, currWord.length)
//             if(predecessor in wordsIndex){
//                 res = Math.max(res, 1 + backtrack(wordsIndex[predecessor]))
//             }
//         }

//         return res
//     }

//     let longest = 0
//     for(let i = 0; i < words.length; i++){
//         longest = Math.max(longest, backtrack(i))
//     }
//     return longest
// };
