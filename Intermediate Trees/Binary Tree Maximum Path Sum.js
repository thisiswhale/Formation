/**

https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

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
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity

    function dfs(node){
        // if no nodes in this (sub-)tree then zero sum
        if (!node) return 0;

        // look at the left subtree and find it's max path. If negative, we don't want it.
        const left = Math.max(dfs(node.left), 0);
        // same for right
        const right = Math.max(dfs(node.right), 0);

        // update the max to either be what ever max we found previously
        // OR the sum of the left, right and the current node
        maxSum = Math.max(maxSum, node.val + left + right);
        // return the max path including this node
        return node.val + Math.max(left, right);
    }
    dfs(root)
    return maxSum === -Infinity ? 0 : maxSum;

};
