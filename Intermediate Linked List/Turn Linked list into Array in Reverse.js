/*
'''
❓ PROMPT
Given a linked list, return an array with all the elements in reverse.

Example(s)
head = 1 -> 3 -> 5 -> 2
createArrayInReverse(head) == [2,5,3,1]
 

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
function createArrayInReverse(node) {
def createArrayInReverse(node: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function createArrayInReverse(node) {
  // if(!node) return []
  // let prev = null
  // let curr = node

  // while(curr){
  //   let next = curr.next
  //   curr.next = prev
  //   prev = curr
  //   curr = next
  // }

  // let result = []

  // while(prev){
  //   result.push(prev.value)
  //   prev = prev.next
  // }

  // return result

  if(!node) return []
  const result = []
  while(node){
    result.push(node.value)
    node = node.next
  }

  let i = 0, j = result.length-1

  while( i< j){
    [ result[i], result[j]] = [ result[j], result[i]]
    i++
    j--
  }
  return result
}

// 1 -> 3 -> 5 -> 2
let head = new Node(1, new Node(3, new Node(5, new Node(2))))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([2,5,3,1]))

// 4 -> 9 -> 14
head = new Node(4, new Node(9, new Node(14)))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([14,9,4]))

// 5 -> 10 -> 15 -> 20
head = new Node(5, new Node(10, new Node(15, new Node(20))))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([20,15,10,5]))

// 5
head = new Node(5)
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([5]))

// 5 -> 10
head = new Node(5, new Node(10))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([10,5]))

// 5 -> 5 -> 10 -> 10
head = new Node(5, new Node(5, new Node(10, new Node(10))))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([10,10,5,5]))

// 5 -> 5 -> 5
head = new Node(5, new Node(5, new Node(5)))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([5,5,5]))

// 0
head = new Node(0)
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([0]))

// null
console.log(JSON.stringify(createArrayInReverse(null))
=== JSON.stringify([]))
