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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

 //1st approach
// var addOneRow = function(root, val, depth) {
    
//     if(!root) return new TreeNode(val)
//     if(depth == 1) return new TreeNode(val, root, null)

//     function dfs(curr, lvl){
//         if(!curr) return

//         if(lvl === depth-1){
//             curr.left = new TreeNode(val, curr.left, null)
//             curr.right = new TreeNode(val, null, curr.right)
//             return
//         }

//         dfs(curr.left, lvl+1)
//         dfs(curr.right, lvl+1)
//     }

//     dfs(root, 1)

//     return root
// };

//2nd approach

var addOneRow = function(root, val, depth, level=1, isRightTree=false) {
    //edge case for if the depth is after a leaf node
    if (!root && level === depth) return new TreeNode(val)
    if (!root) return null
    
    //If we are on a depth level, add the node and do not recursively call further nodes from this node
    if (level === depth) {
        // let node = new TreeNode(val)
        // if (isRightTree) node.right = root
        // else node.left = root
        // return node

        return new TreeNode(val, isRightTree ? null: root, isRightTree ? root: null )
    }
    
    root.left = addOneRow(root.left, val, depth, level+1, false)
    root.right = addOneRow(root.right, val, depth, level+1, true)
    
    return root
};

     
