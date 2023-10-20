// https://leetcode.com/problems/longest-univalue-path/
var longestUnivaluePath = function(root) {
    let longestPath = 0

    function dfs(node){
        if(!node) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)

        if(!node.left || node.left.val !== node.val) {
            left = 0
        }
        if(!node.right || node.right.val !== node.val) {
            right = 0
        }

        longestPath = Math.max(longestPath, left + right)
        return 1 + Math.max(left, right)
    }

    dfs(root)
    return longestPath 
};
