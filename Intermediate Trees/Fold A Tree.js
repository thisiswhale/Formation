
class TreeNode {
  constructor(value, left = null, right = null) {
      this.value = value
      this.left = left
      this.right = right
  }
}

function treeToString(root, indent = '') {
    if (!root) {
        return '';
    }
  
    let result = '';
  
    function dfs(node, indent) {
        if (!node) return;
  
        result += indent + node.value + '\n';
        if (node.left) dfs(node.left, indent + '  |- ');
        if (node.right) dfs(node.right, indent + '  |- ');
    }
  
    dfs(root, '');
  
    return result;
}


/*
'''
❓ PROMPT
Fold the right side of the binary tree onto the left side of the tree as if it was on a piece of paper with the root at the center of the vertical axis. Combine the values when they overlap.

**Hint**: Start out by solving complete trees, then move on to symmetric trees, and finally explore asymmetric trees. Use helper functions to do some of the steps.

Example(s)
        1
    /       \
   2         3
 /   \     /   \
4     5   6     7

Becomes:
     1
    / 
   5
 /   \ 
11   11

        1
    /       \
   2         3
 /   \         \
4     5         7

Becomes:
     1
    / 
   5
 /   \ 
11    5
 
- create a new tree node starting with root value
- use dfs function to traverse the root tree
  -


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
function treeFold(root) {
def treeFold(root: Node) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const symmetric = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))

const asymmetric = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7)))
function treeFold(root) {

  if(!root) return root

  function reverse(node){
    if(!node) return
    [node.right, node.left] = [node.left, node.right]

    reverse(node.left)
    reverse(node.right)
  }

  function combine(left, right){
    
    //Support symmetric tree
    // if(left && right) {
    //   left.value += right.value
    //   combine(left.left, right.right)
    //   combine(left.right, right.left)
    // }

    //Support asymmetric tree
    if(left){
      left.value += right ? right.value : 0

      combine(left.left, right ? right.right : null)
      combine(left.right, right ? right.left : null)
      return left
    }
    // no left! Need to reverse the right and return that as the left.
    if(right){
      reverse(right)
      return right
    }


  }

  combine(root.left, root.right)
  root.right = null

  return root

}

console.log(treeToString(symmetric))
console.log(treeToString(treeFold(symmetric)))

console.log(treeToString(asymmetric))
console.log(treeToString(treeFold(asymmetric)))
