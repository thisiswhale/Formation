/*
'''
❓ PROMPT
Convert a sorted array into a balanced binary search tree. Return the root of the created tree.

Example(s)
Input:  [1, 2, 3, 4, 5] =>

Output:
        3
   2        5
1        4

or
        3
    2       4
1              5

or
    3
1       5
   2  4

or
   3
1     4
   2     5
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sortedArrayToBST(nums) {
def sortedArrayToBST(nums: list[int]) -> TreeNode:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
//input: Array of numbers, can be negative or positive whole integers
//output : Balanced tree

//[1,2,3,4,5] //mid: 3

//3 be the root
//follow by 1 or 5

//[1,2,3,4,5,6,7,8,9] //mid: 5

//find mid
function sortedArrayToBST(nums) {

  if(!nums.length) return nums

  const mid = Math.floor(nums.length/2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid+1, nums.length)

  let root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(left) //[1,2]
  root.right = sortedArrayToBST(right) // [4,5]

  return root
  
}
console.log(isCorrect(sortedArrayToBST([1, 2, 3, 4, 5])))
console.log(isCorrect(sortedArrayToBST([-10, -3, 0, 5, 9])))
console.log(isCorrect(sortedArrayToBST([])))
console.log(isCorrect(sortedArrayToBST([1])))
console.log(isCorrect(sortedArrayToBST([1,2])))
console.log(isCorrect(sortedArrayToBST([1,2,3,4,5])))
console.log(isCorrect(sortedArrayToBST([1,2,10,20,35,50,420,609])))
console.log(isCorrect(sortedArrayToBST([-100,-50,-25,-20,-10,-1,0,1,2,10,20])))

/*******************************************/
/** This code is intentionally obfuscated **/
/*******************************************/
function isCorrect(r){return b(r)&&v(r);}
function gH(r){if(r == null)return 0;
let lH=gH(r.left);if(lH==-1)return -1;
let rH=gH(r.right);if(rH==-1)return -1;
if(Math.abs(lH-rH)>1)return -1;return Math.max(lH,rH)+1;}
function b(r){return gH(r)!=-1;}
function v(r){return v(r,Number.
MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);}
function v(r,m,M){if(r==null)return true;
if(r.val>=M||r.val<=m)return false;
return v(r.left,m,r.val)&&v(r.right,r.val,M);}
