/**

https://leetcode.com/problems/delete-nodes-and-return-forest/description/

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if(!root) return root
    const forest = []
    const set = new Set(to_delete)

    function dfs(node){
        if(!node) return null

        //dfs traversal through the tree
        node.left = dfs(node.left)
        node.right = dfs(node.right)

        //removes the child from the parent, and return null to the root
        if(set.has(node.val)){
            if(node.left) forest.push(node.left)
            if(node.right) forest.push(node.right)
            return null
        }
        
        //returns node that does not need deletion
        return node
    }
    
    if(!set.has(root.val)) forest.push(root)
    dfs(root, 0)
    return forest

};
