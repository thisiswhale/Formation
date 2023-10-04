// https://leetcode.com/problems/two-sum-iv-input-is-a-bst
//DFS
var findTarget = function(root, k) {
    if(!root) return false
    const visited = new Set()

    function helper(node){
        if(!node) return false
        if(visited.has(node.val)) return true
    
        visited.add(k-node.val)
        
        return helper(node.left) || helper(node.right)
    }

    return helper(root)
};

//BFS
var findTarget = function(root, k) {

    if(!root) return false
    const visited = new Set()
    const queue = [root]
    while(queue.length){
        const node = queue.shift()
        if(visited.has(node.val)) return true

        visited.add(k-node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return false
}
