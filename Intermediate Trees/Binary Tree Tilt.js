/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}

- [] == 0
- [1] == 0
- abs(left - right)
-dont need to set vals

-sum variable set to 0
- use recursion helper function with input of root
-prob dont need helper function

    base case:

    - if left node is null AND right node is null, return 0
      else return the absolute sum of left node val and right node val

    return a the absolute sum of the recursion function of left node and recursion function of right node
 */
 
var findTilt = function(root) {

    let sum = 0

    function dfs(node){
      if(!node) return 0

      const left = dfs(node.left)
      const right = dfs(node.right)
      sum += Math.abs(left - right)
      return left + right + node.val
    }

    dfs(root)
    return sum
};
