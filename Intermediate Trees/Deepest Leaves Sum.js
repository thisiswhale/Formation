/**

https://leetcode.com/problems/deepest-leaves-sum/description/

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
var deepestLeavesSum = function(root) {
    
    let deepestSum = 0
    const queue = [root]

    while(queue.length){
        const len = queue.length
        let levelSum = 0
        for(let i = 0; i < len; i++){
            const node = queue.shift()
            levelSum += node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        deepestSum = levelSum
    }

    return deepestSum

    //First Attempt
    
    // const result = []
    // let depth = 0

    // const queue = [root]

    // while(queue.length){
    //     const len = queue.length
    //     result[depth] = 0
    //     for(let i = 0; i < len; i++){
    //         const node = queue.shift()
    //         result[depth] += node.val
    //         if(node.left) queue.push(node.left)
    //         if(node.right) queue.push(node.right)
    //     }
    //     depth++
    // }

    // return result[result.length-1]
};
