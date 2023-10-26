/*
'''
Given the root of a binary tree, collect a tree's nodes by level from the leaves up. Return an array of arrays representing the values of the leaves at each iteration.

The result will have the leaves of the tree (no matter the depth from the root) in the first array (index zero), and then the root will be in the last by itself. See the examples below.


EXAMPLE(S)
Input:
    1
   / \
  2   3
 / \
4   5

Output:
[[4, 5, 3], [2], [1]]

- if root (input) is null then return [[]]
- leaves can be on different levels at each iteration

- DFS, 
1. for leaves can check left and right are null -> push node val into array -> return null 
2. node.left = dfs(node.left)
   node.right = dfs(node.right)



   

FUNCTION SIGNATURE
def findLeaves(root: TreeNode) -> List[List[int]]:
'''
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findLeaves(root){
  const result = [];

  function dfs(node){
    if(!node) return null;
    
    if(!node.left && !node.right) {
      result[result.length - 1].push(node.val);
      return null;
    }
    
    node.left = dfs(node.left)
    node.right = dfs(node.right)
    return node;
  }
  
  while (root){
    result.push([]);
    root = dfs(root);
  }
  
  console.log(result);
  return result;
}

let root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3)
)

console.log(JSON.stringify(findLeaves(root)) == JSON.stringify([[4, 5, 3], [2], [1]]))

root = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
)

console.log(JSON.stringify(findLeaves(root)) == JSON.stringify([[2, 3], [1]]))

root = new TreeNode(1,
  new TreeNode(2)
)
console.log(JSON.stringify(findLeaves(root)) == JSON.stringify([[2], [1]]))


console.log(JSON.stringify(findLeaves(new TreeNode(1))) == JSON.stringify([[1]]))


let root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3
    new TreeNode)
)
