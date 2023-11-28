
/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals zero (a + b + c = 0).

Examples:
• Given an array: [1, 2, 0] returns: []
• Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
• Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]

//If arr has length less than 3, return []
Both non-negative and negative values
return an array of arrays that sum up to 0
not sorted array
no repeating , since we need unique


Approach:

Sort the array?
[-5, -1, 0, 1, 4, -1] -> [-5, -1, -1, 0, 1, 4], provide time nLogn

3 Pointers:
[-5, -1, 0, 1, 4, -1]
 p1     p2  p3

time: 0(n^2)
space: O(1), or O(n) from result arr
p1 set to 0
p2 set to p1+1
i is the traversal pointer
 if [p1, p2, i] == 0, put into result

backtracking:
time: O(3^n) n is the length of array, exponential
space: O(n)
find sum of 0 of each index of all combinations recursively
ie: 
[-5, -1, 0], [-5, -1, 1], [-5, -1, 4], [-5, -1, -1]
[-5, 0, 1], [-5, 0, 4], [-5, 0, -1],
[-5, 1, 4], [-5, 1, -1]
[-5, 4, -1]




*/

function tns(input) {
  const result = []
  input.sort((a,b) => a-b)

  for(let i = 0; i < input.length; i++){
    let l = i+1, r = input.length-1;

    if(input[i] === input[i-1]) continue

    while(l < r){
      const sum = input[i] + input[l] + input[r];

      if(sum > 0){
        r--;
      } else if(sum < 0){
        l++;
      } else {
        result.push([input[i], input[l], input[r]]);
        l++;
        r--;

        // skip over any duplicate values
        while (l < r && input[l] === input[l - 1]) {
          l++;
        }
        while (l < r && input[r] === input[r + 1]) {
          r++;
        }
      }
    }
  }

  return result
}

console.log(tns([1, 2, 0])) // []
console.log(tns([-1, 0, 1, 0, 1])) //  [[-1, 0, 1]]
console.log(tns([-5, -1, 0, 1, 4, -1])) // [[-5,1,4], [-1,0,1]]
