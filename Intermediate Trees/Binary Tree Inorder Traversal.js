/**
https://leetcode.com/problems/binary-tree-inorder-traversal

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // const result = []
    // function dfs(node){
    //     if(!node) return

    //     dfs(node.left)
    //     result.push(node.val)
    //     dfs(node.right)
    // }
    // dfs(root)

    // return result

  const stack = []
  const result = []
  while(root || stack.length){
    if(root){
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }
  return result
};
