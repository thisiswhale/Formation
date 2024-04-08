/*
'''
❓ PROMPT
Given a set of numbers S, and a sum K, write a function to compute whether there exists a subset of S whose elements add up to K.

Each element of S is unique and may only be used once in computing the sum.

Example(s)
doesSubsetSumExist([1,2,3], 6) == true (1+2+3=6)
doesSubsetSumExist([1,2,3], 5) == true (2+3=5)
doesSubsetSumExist([1,2,9], 4) == false (no sum exists)

🔎 EXPLORE
List your assumptions & discoveries:
Input: arr, value
Output: boolean

Elements are uniquie
ex, [1,1,1], not the right input

elements are USED ONCE, no repeat
ex. [1,2,3] , 6, cannot be [2,2,2] or [3,3]



Edge cases:
-Empty arr? If empty, return false
-Non-negative values only? Assume positive 

Q: Does the list contain negatives or 0?
A: No.

Q: Can the sum be negative or 0?
A: Yes. 0 is always true, negative is always false.

Insightful & revealing test cases:
doesSubsetSumExist([1,2,3], -1) == false
doesSubsetSumExist([1,2,3], -2) == false
doesSubsetSumExist([1,2,3], 0) == true


🧠 BRAINSTORM
What approaches could work?

Algorithm 1: Bruteforce backtracking
Exhaustive recursion to find all possible
Time: O(2^n), where n is the length of arr
Space: O(n), where n is the # of call stacks

At end of recursion: set variable to false when we dont find target, else set variable to true within the call stack

Algorithm 2: DP
As we go through the recursion problem, theres likely repeating subproblems, use DP
Time: O(n * sum)
Space: O(n)

📆 PLAN
Outline of algorithm #: 

Create an array up to the sum value
-use it to find if subset sum exist for each element at ith sum
-
 

🛠️ IMPLEMENT
function doesSubsetSumExist(nums, sum) {
def doesSubsetSumExist(nums: list[int], sum: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function doesSubsetSumExist(nums, sum) {

  if(!nums.length) return false
  if (sum === 0) return true
  if (sum < 0) return false
  
  let result = false
  const map = new Set()
let callstack = 0
  function helper(val) {
callstack++
    if (val === sum) {
      result = true
      return
    }
    if (val > sum) return

    for (let num of nums) {
      if (!map.has(num)) {
        map.add(num)
        helper(num + val)
        map.delete(num)
      }
    }
  }
  helper(0)
console.log('callstack',callstack)

  return result
  
} 

function doesSubsetSumExistDP(arr, sum) {
  if(sum < 0) return false
  const dp = new Array(sum + 1).fill(false)

  dp[0] = true

  for (let num of arr) {
    // Iterate backwards to avoid reusing the same element multiple times
    for (let j = sum; j >= num; j--) {
        dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[sum]
}


// console.log(doesSubsetSumExist([1, 2, 3], 6));
// console.log(doesSubsetSumExist([1, 2, 3], 5));
// console.log(doesSubsetSumExist([1, 2, 9], 4) === false);
// console.log(doesSubsetSumExist([], 4) === false);
// console.log(doesSubsetSumExist([4], 4));
// console.log(doesSubsetSumExist([1, 2, 3, 4, 5], 9));
// console.log(doesSubsetSumExist([3, 5, 7, 9], 14));
// console.log(doesSubsetSumExist([2, 4, 6, 8], 10));
// console.log(doesSubsetSumExist([1, 3, 5, 7, 9], 84) === false);
// console.log(doesSubsetSumExist([10, 20, 30, 40, 50], 9) === false);
// console.log(doesSubsetSumExist([1, 2, 3, 4, 5], -1) === false);
// console.log(doesSubsetSumExist([1, 2, 3, 4, 5], 0));

// console.log(doesSubsetSumExistDP([1, 2, 3], 6));
// console.log(doesSubsetSumExistDP([1, 2, 3], 5));
// console.log(doesSubsetSumExistDP([1, 2, 9], 4) === false);
// console.log(doesSubsetSumExistDP([], 4) === false);
// console.log(doesSubsetSumExistDP([4], 4));
// console.log(doesSubsetSumExistDP([1, 2, 3, 4, 5], 9));
// console.log(doesSubsetSumExistDP([3, 5, 7, 9], 14));
// console.log(doesSubsetSumExistDP([2, 4, 6, 8], 10));
// console.log(doesSubsetSumExistDP([1, 3, 5, 7, 9], 84) === false);
// console.log(doesSubsetSumExistDP([10, 20, 30, 40, 50], 9) === false);
// console.log(doesSubsetSumExistDP([1, 2, 3, 4, 5], -1) === false);
// console.log(doesSubsetSumExistDP([1, 2, 3, 4, 5], 0));
