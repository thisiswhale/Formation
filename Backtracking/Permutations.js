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

//[1,2,2,3]
function generatePermutationsWithMap(nums) {
  //  map<value, count> from nums
  const map =  new Map()
  for(let i of nums){
    map.set( i, (map.get(i) ?? 0) + 1)
  }
  const result = []
  const temp = []
  function helper(){

    if(temp.length === nums.length){
      return result.push([...temp])
    }

    for(const [key, val] of map){
      if(val > 0) {
        temp.push(key)
        map.set(key, val-1)
        helper()
        temp.pop()
        map.set(key, val)
      }
    }
  }

  helper()

  return result
  //  the output array
  //  the "current" array, the state
  // 
  //  helper function
  //    base case, if current array same length as nums, push copy of state into output array. return
  // 
  //    loop through keys in the map
  //      check count to see if we still have instances to try
  // 
  //      "pick" decrement count in the map for the value, push value into state
  //      recurse
  //      "undo" increment count in the map for the value, pop value from state
  // 
  //  return output array
}


// function generatePermutations(nums) {
//   //  map<value, count> from nums

//   const result = []
//   const temp = []
//   const set = new Set()
//   function helper(i){

//     if(temp.length === nums.length){
//       return result.push([...temp])
//     }
//     for(let i = 0; i < nums.length; i++){

//       if(!set.has(i)){
//         temp.push(nums[i])
//         set.add(i)

//         helper(i+1)
        
//         set.delete(i)
//         temp.pop()
//       }

//     }
//   }

//   helper(0)

//   return result
// }

function generatePermutations(nums) {
  const ans = [];
  function get_permute(part) {
    if (part.length === nums.length) {
      ans.push([...part]);
      return;
    } else {
      for (let x of nums) {
        if (!part.includes(x)) {
          part.push(x);
          get_permute(part);
          part.pop();
        }
      }
    }
  }

  get_permute([]);
  return ans;
}

// console.log(generatePermutations([1,2,3,4]))
