
/*
'''
❓ PROMPT
Suppose you are given the root of a *Node* class for a supposed N-ary tree.

This *Node* class has a *children* method that returns a list of *Node* children.

However, this tree is actually corrupted! There may be edges in the *children* class that break the basic rules of trees, resulting in possible cycles or multiple parents.

How many edges do you need to remove from this faulty tree to construct a valid tree?

Example(s)
    1
  /   \
  2   3
   \ /
    4
return 1
Explanation: 4 has two parents. We can remove any one of them to create a valid tree.

    1 <--
  /   \ |
  2   3 |
   \    |
    4 --|
return 1
Explanation: 4 loops back to the root (1). We can remove this back edge to create a valid tree.
 
    1
  /   \
  2   3
   \ / \
    4   5

1 points

🔎 EXPLORE
List your assumptions & discoveries:
 
 Assume unidirected

 single node points to itself, return 1
 return 0 when its a N-ary tree

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(value, children = []) {
      this.value = value
      this.children = children
  }
}

function edgesAwayFromTree(root) {

  let count = 0
  // const visited = {}
  const visited = new Set()

  function dfs(node){

      // if(visited[node.value] > 0){
      //   count++
      //   return;
      // }

      // if(visited[node.value]){
      //   visited[node.value]++
      //   count++
      // } else{
      //   visited[node.value] = 1
      // }

      if(visited.has(node.value)){
        count++
        return
      }
      visited.add(node.value)

      const children = node.children
      for(let childNode of children){
        dfs(childNode)
      }

  }

  dfs(root)
  return count == 0 ? 0 : count
}

let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

let root = new Node(1, [node2, node3])
node2.children = [node4]
node3.children = [node4]

console.log(edgesAwayFromTree(root))

// root = new Node(1, [ new Node(2,[node4, new Node(5)]), new Node(3,[node4])])
// console.log(edgesAwayFromTree(root))

// root = new Node(1, [ new Node(2, new Node(3,[node4]))])
node2 = new Node(2)
node3 = new Node(3)
node4 = new Node(4)
node5 = new Node(5)

root = new Node(1, [node2, node3])
node2.children = [node4]
node4.children = [root]
console.log(edgesAwayFromTree(root))


node2 = new Node(2)
node3 = new Node(3)
root = new Node(1, [node2, node3])
console.log(edgesAwayFromTree(root))

node2 = new Node(2)
node3 = new Node(3)
node4 = new Node(4)
node5 = new Node(5)

root = new Node(1, [node2, node3, node5])
node2.children = [node4, node5]
node3.children = [node4]
node4.children = [root]
console.log(edgesAwayFromTree(root))

