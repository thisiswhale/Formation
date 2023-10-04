//https://leetcode.com/problems/symmetric-tree

var isSymmetric = function(root) {
    if(!root) return true

    function helper(left, right){

        if (!left && !right) return true

        if(!left || !right) return false
        else if (left.val !== right.val) return false

        return helper(left.left, right.right) && helper(left.right, right.left) 
    }

    return helper(root.left, root.right)
};
