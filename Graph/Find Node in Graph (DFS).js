
/*
'''
❓ PROMPT
Given a starting node in a graph and a target, traverse the graph using DFS and return true if a node with the target value exists, and false otherwise

Example(s)
  1
 / \
2   3
node.hasPathTo(3) == true
node.hasPathTo(4) == false

12
|
18
| \
1  4 - 3
   |
   9
node.hasPathTo(9) === true
node.hasPathTo(14) === false
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function hasPathTo(node, target) {
hasPathTo(target) { // Alternatively, if it's written inside the Node class

def hasPathTo(node: Node, target: int) -> bool:
def hasPathTo(self, target: int) -> bool: # Alternatively, if it's written inside the Node class
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node{
  constructor(value = null, children = []){
    this.value = value
    this.children = children
  }

  hasPathTo(target) {

    const visited = new Set();

    function helper(node){
      if(node.value === target) return true
      visited.add(node)
      for(let nei of node.children){
        if(!visited.has(nei) && helper(nei)) return true
      }
      return false
    }

    return helper(this)
  }
}

let node = new Node(1, [new Node(2), new Node(3)])
console.log(node)
console.log(node.hasPathTo(3) === true)
console.log(node.hasPathTo(4) === false)
// standalone version
// console.log(hasPathTo(node, 3) === true)
// console.log(hasPathTo(node, 4) === false)

node = new Node(12, [
  new Node(18, [new Node(1), new Node(4, [new Node(3), new Node(9)])])
])
console.log(node.hasPathTo(9) === true)
console.log(node.hasPathTo(14) === false)
console.log(node.hasPathTo(0) === false)
console.log(node.hasPathTo(12) === true)
// // standalone version
// console.log(hasPathTo(node, 9) === true)
// console.log(hasPathTo(node, 14) === false)
// console.log(hasPathTo(node, 0) === false)
// console.log(hasPathTo(null, 0) === false)
// console.log(hasPathTo(node, 12) === true)

node = new Node(1)
console.log(node.hasPathTo(1) === true)
console.log(node.hasPathTo(2) === false)
// // standalone version
// console.log(hasPathTo(node, 1) === true)
// console.log(hasPathTo(node, 2) === false)

node = new Node(1, [new Node(2), new Node(3)])
let cycleNode = new Node(5, [node])
node.children.push(cycleNode)
console.log(node.hasPathTo(1) === true)
console.log(node.hasPathTo(2) === true)
console.log(node.hasPathTo(5) === true)
console.log(node.hasPathTo(4) === false)
// // standalone version
// console.log(hasPathTo(node, 1) === true)
// console.log(hasPathTo(node, 2) === true)
// console.log(hasPathTo(node, 5) === true)
// console.log(hasPathTo(node, 4) === false)

// node = new Node(12, [
//   new Node(18, [new Node(5), new Node(5, [new Node(5), new Node(5)])])
// ])
// console.log(node.hasPathTo(12) === true)
// console.log(node.hasPathTo(5) === true)
// console.log(node.hasPathTo(4) === false)
// // standalone version
// console.log(hasPathTo(node, 12) === true)
// console.log(hasPathTo(node, 5) === true)
// console.log(hasPathTo(node, 4) === false)

// let cycleNode1 = new Node(3)
// let cycleNode2 = new Node(2)
// cycleNode1.children.push(cycleNode2)
// cycleNode2.children.push(cycleNode1)
// node = new Node(12, [
//   new Node(18, [new Node(5), cycleNode1, new Node(5, [
//     new Node(5), cycleNode2, new Node(5)])])])
// console.log(node.hasPathTo(12) === true)
// console.log(node.hasPathTo(2) === true)
// console.log(node.hasPathTo(3) === true)
// console.log(node.hasPathTo(5) === true)
// console.log(node.hasPathTo(4) === false)
// // standalone version
// console.log(hasPathTo(node, 12) === true)
// console.log(hasPathTo(node, 2) === true)
// console.log(hasPathTo(node, 3) === true)
// console.log(hasPathTo(node, 5) === true)
// console.log(hasPathTo(node, 4) === false)
