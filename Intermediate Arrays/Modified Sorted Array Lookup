/*
'''
CODE IS WRONG. FIX IT

Given a sorted list of integers of length N, get the index of an element *x* in the list without performing any multiplication, division, exponent, or bit-shift operations. If the element is not found, return -1.

It can still be done in O(log N) time, but it doesn't look like a normal binary search!

This problem is very difficult, and problems like this should not come up in most interviews (unless you're interviewing for a position working on device drivers or other low-level areas). Treat this problem not as interview preparation but as a fun challenge to stretch your abilities. Success in this problem requires some creative thinking.
 

EXAMPLE(S)
findIndex([10, 20, 30], 20) == 1
findIndex([10, 20, 30], 30) == 2
findIndex([10, 20, 30], 5) == -1
 

FUNCTION SIGNATURE
findIndex(arr: Array<number>, x: number): number:
'''
*/

/*
EXPLORE
Are values in the array unique: Yes
Values can be negative

BRAINSTORM

PLAN
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,  17 ]
# find length of original array
Binary Search initial starting point is mid
10
[8, 4, 2, 1]

crete a decreasing array of valid exponents of 2 
input array length 17
[16,  8, 4, 2, 1]

input array length 35
[32, 16,  8, 4, 2, 1]

length = len(arr)

value = 0
while currentExponent < length:
  currentExponent = 2 ** value
  exploringArray.append(currentExponent)
  value += 1

reverse(exploringArray)

target = 15
index = 0 + 8 
index = 8 + 4
index = 12 + 2
index = 14 + 1 = 15 == target

IMPLEMENT

VERIFY
*/

function findIndex(arr, target){
  if(!arr.length) return -1
  
  const len = arr.length -1
  
  let exp = []
  
  let currVal = 1, powOfTwo = 0
  while(powOfTwo < arr[arr.length-1]){
    powOfTwo = Math.pow(2, currVal)
    exp.push(powOfTwo)
    currVal++
  }
  exp = exp.reverse()
  

  
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
//target: 17
// [16, 8, 4, 2, 1]

  let i = 0
  let targetIndex = 0
  while(i < exp.length){

    // let currIdx = targetIndex + exp[i]
    
    // if(currIdx < target){
    //   targetIndex = currIdx
    // }  
    
    // if (currIdx === target) {
    //   return currIdx
    // }
    // console.log(targetIndex + exp[i])
    if(arr[targetIndex + exp[i]] < target){
      
      targetIndex += exp[i]
    } else if (arr[targetIndex + exp[i]] === target) {
      // return (arr[targetIndex + exp[i]] === target)
      return targetIndex + exp[i]
    }
    console.log(targetIndex)
    i++
  }

  return -1
}


const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const target = 11
console.log(findIndexL(input, target))
