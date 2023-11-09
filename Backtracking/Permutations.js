/*
'''
All permutations of an array

Given an array of N integers, generate all permutations of the given array. 
 

EXAMPLE(S)
[1] -> [1]
[1, 2] -> [[1, 2], [2, 1]]

[1, 2, 3] -> [
  [1, 2, 3], 
  [1, 3, 2], 
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2], 
  [3, 2, 1],
]
 

FUNCTION SIGNATURE
function generatePermutations(nums) {
def generatePermutations(nums: list[int]) -> list[list[int]]:
'''
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//APPROACH 1 : Swapping values in nums array
var permute = function(nums) {
    const permutations = []

    function helper(start) {
        if (start === nums.length - 1) {
            permutations.push([...nums]);
            return;
        }

        // Continue without making any changes to the order.
        helper(start + 1);

        // Now swap the current starting location with each remaining location.
        // Must be sure to undo the swaps after each recursive call.
        for (let i = start + 1; i < nums.length; i++) {
            // swap(start, i);
            [nums[start], nums[i]] = [nums[i], nums[start]];

            helper(start + 1);
            // swap(start, i);
            [nums[start], nums[i]] = [nums[i], nums[start]];

        }

    }

    helper(0)

    return permutations
};

//APPROACH 2 : Use Maps to check used values to push Path list to result

var permute = function(nums) {

  const ans = [];
  const path = [];
  function get_permute() {
    if (path.length === nums.length) {
        ans.push([...path]);
        return;
    }

    for (let x of nums) {
        if (!path.includes(x)) {
            path.push(x);
            get_permute();
            path.pop();
        }
    }
    
  }

  get_permute();
  return ans;
}

//APPROACH 3 : Without Maps to check used values to push Path list to result

var permute = function(nums) {

  const result = []
  const path = []
  const used = new Set()

  function helper(){

    if(path.length === nums.length){
        result.push([...path])
        return 
    }

    for (let x of nums) {

      if(!used.has(x)){
        path.push(x)
        used.add(x)

        helper()
        
        path.pop()
        used.delete(x)
      }

    }
  }

  helper()

  return result
}

// console.log(generatePermutations([1,2,3,4]))
