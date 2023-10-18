/*
'''
Sum Nodes With Odd Valued Parent

Given a binary tree, return the sum of all nodes with an odd-valued parent node.
 

EXAMPLE(S)
[6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5] => 19

            6
      7            8
 2*     7*      1    3
9 _   1* 4*    _ _  _ 5*  (underscore represent null)

2 + 7 + 1 + 4 + 5 = 19
 

FUNCTION SIGNATURE
function sumNodesWithOddParent(root) {
def sumNodesWithOddParent(root: TreeNode) -> int:
'''
*/
/*
[7,2,7] = 2 + 7 = 14
[1,_,_] = 0
[_] = 0;


*/
// function sumNodesWithOddParent(root) {
//   if(!root) return 0
//   let sum = 0

//   function dfs(node){
//     if(!node) return

//     if(node.value % 2 == 1){
//       if(node.left) sum += node.left.value
//       // sum += node.left?.value || 0
//       if(node.right) sum += node.right.value
//       // sum += node.right?.value || 0
//     }
//     dfs(node.left)
//     dfs(node.right)
//   }
//   dfs(root)

//   return sum
// } 

function sumNodesWithOddParent(root) {
  if(!root) return 0
  let sum = 0
  const queue = [root];
  while(queue.length) {
    const next = queue.shift();
    if(next.value % 2 !== 0) {
      sum += (next.left?.value || 0) + (next.right?.value || 0)
    }
    if(next.left) queue.push(next.left);
    if(next.right) queue.push(next.right);
  }
  return sum
} 



class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const test1 = new TreeNode(6,
  new TreeNode(7,
    new TreeNode(2, null, null),
    new TreeNode(7, null, null)
  ),
  new TreeNode(8,
    new TreeNode(1, null, null),
    new TreeNode(3, null, null)
  )
);

const test2 = new TreeNode(2,
  new TreeNode(5, null, null),
  new TreeNode(9, null, null)
);

//             6
//       7            8
//  2*     7*      1    3
// 9 _   1* 4*    _ _  _ 5*  (underscore represent null)

const test3 = new TreeNode(6,
  new TreeNode(7,
    new TreeNode(2, new TreeNode(9), null),
    new TreeNode(7, new TreeNode(1), new TreeNode(4))
  ),
  new TreeNode(8,
    new TreeNode(1, null, null),
    new TreeNode(3, null, new TreeNode(5))
  )
);

console.log(sumNodesWithOddParent(test1), 2+7)
console.log(sumNodesWithOddParent(test2), 0)
console.log(sumNodesWithOddParent(test3), 19)

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sumNodesWithOddParent(root) {
  let sum = 0;

  function dfs(node, parentValue) {
    if (!node) return;

    if (parentValue && parentValue % 2 != 0) {
      sum += node.value;
    }

    if (node.left) dfs(node.left, node.value);
    if (node.right) dfs(node.right, node.value);
  }

  dfs(root);
  return sum;
}
