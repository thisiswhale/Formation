

/*
'''
❓ PROMPT
Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) * 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 * 3 = 9. 
Then the depth of [2, 9] is 2 so (2+9) * 2 = 22.
4 is added at the end to get  22 + 4 = 26.

Example(s)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5

sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2
 

🔎 EXPLORE
List your assumptions & discoveries:
 Empty array returns 0
 negative values exists
 empty array in a array exist, will be 0
 No string values, whole integers
 Input: list
 Output: integer

 Approach:
 Brute force:
 Easiest is to arr.flat(infinity) and arr.reduce to sum the values 



Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sumNestedList(list) {
function sumNestedListWithDepth(list) {

def sumNestedList(nestedList: list[int]) -> int:
def sumNestedListWithDepth(nestedList: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


function sumNestedList(list){
  let sum = 0

  for(let element of list){
    if(Array.isArray(element)){
      sum += sumNestedList(element)
    } else {
      sum += element
    }
  }

  return sum
}

function sumNestedListWithDepth(list, depth = 1){
  let sum = 0

  for(let element of list){
    if(Array.isArray(element)){
      sum += sumNestedListWithDepth(element, depth + 1)
    } else {
      sum += element
    }
  }

  return sum * depth
}

// console.log(sumNestedList([1, 2, 3]) == 6)
// console.log(sumNestedList([1, [1, 2, 3], 3]) == 10)
// console.log(sumNestedList([1, [1, [1, [1, [1]]]]]) == 5)

// console.log(sumNestedListWithDepth([4, [2, 3]]) == 14) // because 4 + (2+3)*2
// console.log(sumNestedListWithDepth([4, [2, [3]]]) == 26) //because 4+(2+ (3*3))*2
 

