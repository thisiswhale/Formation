
/*
'''
❓ PROMPT
Given M sorted arrays, find the Kth smallest number among all the arrays.

Example(s)
Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
Output: 4
Explanation: The 5th smallest index among all the arrays is 4, this can be verified from 
the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Input: L1=[5, 8, 9], L2=[1, 7], K=3
Output: 7
Explanation: The 3rd smallest number among all the arrays is 7. 
 [1,5,7,8,9]
 

🔎 EXPLORE

List your assumptions & discoveries:

Given a list of list => [L1,L2,L3...] and smallest kth
return an Int of the Kth smallest number

List is sorted

[[1],[2],[3]] k = 3, return 3

Insightful & revealing test cases:
 
-empty list [[]] returns -1?
-k is from 0 to positive kth
-K is within bounds of the total length count of list, else return -1?
 resolve that is to count length of each list and return -1 if count < k

[[1],[2],[4]] , k = 3 => 4
[[4],[2],[1]] , k = 3 => 4
[[4],[1],[2]] , k = 3 => 4



🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
-Brute Force: 
put all the list in one combined list and sort and return list[k-1]

[[1],[2],[4]] , k = 3 => [1,2,4] => [k-1] => 4


we want to traverse each list and count up to k and return the value
L1=[2, 6, 8]
    i
L2=[3, 6, 7], 
    j
L3=[1, 3, 4],
    k
K = 5

Time: O(M*i*j*k...) M is the Length of List, n is the length of  
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function kthSmallest(lists, k) {
def kthSmallest(lists: list[list[int]], k: int) -> int:
 
TIME: O(k*logM)

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function kthSmallest(lists, k) {
  const heap = []

  for(let i = 0; i < lists.length; i++){
    heap.push([lists[i][0], i, 0]) // add heap [value, listIndex, valIndex]
  }

  heap.sort((a,b) => a[0] - b[0]) //sort the heap

  //traverse the heap up to k
  for(let i = 0; i < k; i++){
    const [value, listIndex, valIndex] = heap.shift()
    if(valIndex + 1 < lists[listIndex].length){
      heap.push([lists[listIndex][valIndex+1], listIndex, valIndex+1])
    }

    heap.sort((a,b) => a[0] - b[0])

    if(i == k-1){
      return value
    }
  }
  
}
let lists = [[1, 5, 9], [2, 3, 7], [4, 6, 8]]
console.log(kthSmallest(lists, 5) == 5)

lists = [[1, 3, 5], [2, 4, 6], [7, 8, 9]]
console.log(kthSmallest(lists, 8) == 8)

lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(kthSmallest(lists, 4) == 4)
