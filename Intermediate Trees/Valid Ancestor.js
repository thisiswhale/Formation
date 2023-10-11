
/*
'''
Given a binary tree of numbers, and two numbers, A and B, determine if A is an ancestor of B.
 

EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false
 

FUNCTION SIGNATURE
function validAncestor(root, ancestor, descendent) {
def validAncestor(root: TreeNode, ancestor: int, descendent: int) -> bool:
'''
*/


// first go find the ancestor, then from that point forward check if the descendent exists 
// recursion -> DFS -> using a helper function to perform the search
// recursively call the left and right nodes -> inside our DFS 

// start by calling the helper function on the root

// Potential outcomes of DFS -> 
// 1. root may be null, return 
// 2. found our ancestor -> call dfs on the root, being the ancestor -> try finding the descendent within this call 
// 3. found our descendent -> return false 
    // a. found our descendent but not our ancestor, return false
    // b. found our descendent after finding our ancestor, return true 

    // include a flag (foundAncestor), which we toggle if our ancestor found (add to our dfs param)


    class TreeNode {
      constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
      }
    }
    

function validAncestor(root, ancestor, descendent) { 
  if(!root || ancestor === descendent) return false

  function dfs(subtree, foundAncestor) {
    if(!subtree) return false
    if(subtree.val === ancestor){
      foundAncestor = true
    }

    if(subtree.val === descendent){
      return foundAncestor
    }
    
    return dfs(subtree.left, foundAncestor) || dfs(subtree.right, foundAncestor)
  }

  return dfs(root, false)
}

function validAncestor(root, ancestor, descendent) { 
  if(ancestor === descendent) return false
  if(!root) return false
  if(root.val === ancestor){
    if(dfs(root)) return true
  }
  return validAncestor(root.left, ancestor, descendent) || validAncestor(root.right, ancestor, descendent)

  function dfs(root){
    if(!root) return false
    if(root.val === descendent) return true
    return dfs(root.left) || dfs(root.right)
  }
}

//    1
//  3   2
//     5 9
let tree = new TreeNode(1,
  new TreeNode(3, null, null),
  new TreeNode(2, 
     new TreeNode(5, null, null),
     new TreeNode(9, null, null)
  )
)
console.log(validAncestor(tree, 2, 2) == false)
console.log(validAncestor(tree, 1, 2) == true)
console.log(validAncestor(tree, 1, 7) == false)
console.log(validAncestor(tree, 1, 9) == true)

//   0
// 1   2
//    3 4
tree = new TreeNode(0,
  new TreeNode(1, null, null),
  new TreeNode(2,
     new TreeNode(3),
     new TreeNode(4)
  )
)
console.log(validAncestor(tree, 3, 4) == false)
