/**
 * 
 * 
 Levenshtein Distance

 Q. Given two strings, return the minimum number of operations to edit the first string to get the second string. Three operations to consider are:
      1. insertion of a character
      2. deletion of a character
      3. substitution of a character for another 

Examples:
Example 1:
• Given strings: str1 = "abc", str2 = "ab" // returns 1
• Possible operations: delete "c"

Example 2:
• Given strings: str1 = "abc", str2 = "c" // returns 2
• Possible operations: delete "a", delete "b"


// Test Cases
console.log(levenshteinDistance("abc", "adbc")) // 1
console.log(10, levenshteinDistance("formation", "buildschool"), 2) // 10
console.log(levenshteinDistance("", "")) // 0
console.log(levenshteinDistance("coding", "coding")) // 0
console.log(levenshteinDistance("apple", "pineApple")) // 5
console.log(levenshteinDistance("af12312fasfesf", "afase1iu3wfuwi")) // 10

 */


function levenshteinDistance(str1, str2) {

    const dp = new Array(str1.length + 1).fill().map(() => new Array(str2.length+1).fill(0))
    //Base case for min number character changes for when str2 length is 0
    for (let r = 0; r <= str1.length; r++){
        dp[r][0] = r
    }

    //Base case for min number characters changers for when str1 length is 0
    for (let c = 0; c <= str2.length; c++){
        dp[0][c] = c
    }

    for (let i = 1; i <= str1.length; i++){
        for (let j = 1; j <= str2.length; j++){
            if (str1[i - 1] === str2[j - 1]) {
               //Set to prev row and col bc nothing changed
                dp[i][j] = dp[i-1][j-1]
            } else {
               //Set to the min of (prev col, prev row, or prev row and col) + 1 (as insert, delete, or substitute)
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i-1][j-1])+1
            }
        }

    }
    return dp[str1.length][str2.length]
}

console.log(levenshteinDistance('ab', 'abc'))
console.log(levenshteinDistance("abc", "adbc")) // 1
console.log(levenshteinDistance("formation", "buildschool")) // 10
console.log(levenshteinDistance("", "")) // 0
console.log(levenshteinDistance("coding", "coding")) // 0
console.log(levenshteinDistance("apple", "pineApple")) // 5
console.log(levenshteinDistance("af12312fasfesf", "afase1iu3wfuwi")) // 10
