/**
https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/
*/

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
 */
var goodNodes = function(root, previousMax = -Infinity) {
    // if(!root) return 0
    // const newMax = Math.max(root.val, previousMax)
    // return (root.val >= previousMax ? 1 : 0) + goodNodes(root.left, newMax) + 
    //         goodNodes(root.right, newMax) 

    // if(!root) return 0

    // let total = 0
    // function dfs(node, max){
    //     if(!node) return
    //     if(max <= node.val) {
    //         total++
    //         max = node.val
    //     }

    //     dfs(node.left, max)
    //     dfs(node.right, max)
    // }
    // dfs(root, root.val)
    // return total

    function dfs(node, previousMax){
        if(!node) return 0

        const newMax = Math.max(node.val, previousMax)

        return (node.val >= previousMax ? 1 : 0) + dfs(node.left, newMax) + dfs(node.right, newMax)
    }
    return dfs(root, -Infinity)

};
