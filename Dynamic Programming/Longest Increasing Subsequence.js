/*
'''
Longest Increasing Subsequence

Given an array of integers, return an array representing the longest increasing subsequence.
 

EXAMPLE(S)
[1, 2, 3] => 3 (whole array)
[5, 1, 4, 2, 3] => 3 ([1, 2, 3] is the longest increasing subsequence)
 
input: list
output: # for longest increasing subsequence, Number

Values can be duplicates

[] => 0
[1] => 1
[1, 2, 3] => 3
[1, 1, 3] => 2
[5, 1, 4, 2, 3] => 3
[5, 3, 4, 2, 1] => 1

[5, 3, 4, 2, 1] 
[3, 4, 2, 1] 
[4, 2, 1] 
[2, 1] 
[1] 

[1, 3, 2, 4, 5] => 3

count= 2
                    [1, 2 , 3]
        i=0 (1)     i=1 (2)      i=2 (3)
      [2,3]  
    i=1 (2)  i=2 (2)
  [3] (3)     

main(sequence: list[int]) -> int
  - track result variable
  - iterate over every element in sequence
  - update result variable with the max(result, helper(index))
  - return result

[1,3] -> 2
[1,4,2,3] -> 3

1,4
1,2,3

helper(0, 1) -> 1 + helper(1,2) -> 0 + helper(2, 3) -> 

[1,4]
value = 1
1 + Max(helper(1,2), helper(0, 2))

helper(i, j) -> int
  if j == seq.length: return 1
  value = seq[i] < seq[j] ? 1 : 0
  return Max(value + helper(j,j+1), helper(i,j+1))

                  [1,4,2,3]
              
FUNCTION SIGNATURE
function longestIncreasingSubSequenceLength(sequence: [Int]) -> Int:
'''
*/

//RECURSIVE
function LIS_recursive(sequence) {

  let longest = 0

  function backtrack(i) {

    if (i >= sequence.length) {
      return 0
    }
    let res = 0
    for (let j = i + 1; j < sequence.length; j++){
      if (sequence[i] < sequence[j]) {
        res = Math.max(res , 1 + backtrack(j)) 
      }
    }
    return res
  }

  for (let i = 0; i < sequence.length; i++) {
    longest = Math.max(longest, 1+ backtrack(i))
  }

  return longest
}

//TOP DOWN MEMOIZATION
function LIS_topDown(sequence) {

  const dp = []

  function recursive(i) {

    if (i in dp) return dp[i]
    let res = 1
    for (let j = i + 1; j < sequence.length; j++){
      if (sequence[i] < sequence[j]) {
        res = Math.max(res , 1 + recursive(j)) 
      }
    }
    dp[i] = res
    return res
  }

  for (let i = 0; i < sequence.length; i++) {
    recursive(i)
  }

  return Math.max(...dp)
}

//BOTTOM UP
function lis_bottomUp(sequence) {
  if (!sequence.length) return 0
  //dp will be based on length of sequence
  const dp = new Array(sequence.length).fill(1)

  //base case where LIS at index 0 is 1
  dp[0] = 1
  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++){
      if (sequence[i] > sequence[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
  }

  return Math.max(...dp)
}

console.log(longestIncreasingSubSequenceLength([])) // 0
console.log(longestIncreasingSubSequenceLength([1])) // 1
console.log(longestIncreasingSubSequenceLength([1,2,3])) // 3
console.log(longestIncreasingSubSequenceLength([1,1,3]))// 2
console.log(longestIncreasingSubSequenceLength([5, 1, 4, 2, 3])) // 3
console.log(longestIncreasingSubSequenceLength([5, 3, 4, 2, 1])) // 2
