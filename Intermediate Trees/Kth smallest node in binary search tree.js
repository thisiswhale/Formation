/*
'''
❓ PROMPT
Given a binary search tree and integer k, return the kth smallest value in the tree. Note that k should be 1-indexed.

Example(s)
     30 <--- root
  20    40
10 25  33 60

kSmallestNode(root, 1) == 10
kSmallestNode(root, 2) == 20
kSmallestNode(root, 4) == 30
kSmallestNode(root, 7) == 60
 

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
function kthSmallest(root, k) {
def kthSmallest(root: Node, k: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function kthSmallest(root, k) {
  let position = 0;

  function helper(node) {
    if (!node) return null;

    const left = helper(node.left);
    if (left !== null) return left;

    if (++position === k) return node.value;

    return helper(node.right);
  }

  return helper(root);
}
