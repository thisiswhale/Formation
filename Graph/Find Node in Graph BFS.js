
class Node {
  constructor(val = null, children = []){
    this.val = val
    this.children = children
  }

  hasPathTo(target= null){

    if(target === this.val) return true

    if(target == null) return false

    const queue = [...this.children];
    while(queue.length){
      const node = queue.pop()
      if(node.val === target) return true
      if(node.children.length){
        queue.push(...node.children)
      }
    }
    return false
  }
}

let node = new Node(1, [new Node(2), new Node(3)])
console.log(node.hasPathTo(3) === true)
console.log(node.hasPathTo(4) === false)
// // standalone version
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

node = new Node(12, [
  new Node(18, [new Node(5), new Node(5, [new Node(5), new Node(5)])])
])
console.log(node.hasPathTo(12) === true)
console.log(node.hasPathTo(5) === true)
console.log(node.hasPathTo(4) === false)
// // standalone version
// console.log(hasPathTo(node, 12) === true)
// console.log(hasPathTo(node, 5) === true)
// console.log(hasPathTo(node, 4) === false)

let cycleNode1 = new Node(3)
let cycleNode2 = new Node(2)
cycleNode1.children.push(cycleNode2)
cycleNode2.children.push(cycleNode1)
node = new Node(12, [
  new Node(18, [new Node(5), cycleNode1, new Node(5, [
    new Node(5), cycleNode2, new Node(5)])])])
console.log(node.hasPathTo(12) === true)
console.log(node.hasPathTo(2) === true)
console.log(node.hasPathTo(3) === true)
console.log(node.hasPathTo(5) === true)
console.log(node.hasPathTo(4) === false)
// // standalone version
// console.log(hasPathTo(node, 12) === true)
// console.log(hasPathTo(node, 2) === true)
// console.log(hasPathTo(node, 3) === true)
// console.log(hasPathTo(node, 5) === true)
// console.log(hasPathTo(node, 4) === false)
