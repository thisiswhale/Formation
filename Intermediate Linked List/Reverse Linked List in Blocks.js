/*
'''
❓ PROMPT
Given a linked list and a positive number, *k*, reverse *k* items in the list at a time and reverse the remaining fragment if any.

Example(s)
head = 1 -> 2 -> 3
reverseBlocks(head, 2) == "2 -> 1 -> 3"

head = 1 -> 2 -> 3 -> 4 -> 5 -> 6
reverseBlocks(head, 3) == "3 -> 2 -> 1 -> 6 -> 5 -> 4"

 null -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
null <- 1  2 -> 3 -> 4 -> 5 -> 6
null <- 1 <- 2  3 -> 4 -> 5 -> 6
null <- 1 <- 2 <- 3  4 -> 5 -> 6

1 <- 2  3 -> 4 -> 5 -> 6
1 <- 2 <- 3  4 -> 5 -> 6
1 <- 2 <- 3  4 -> 5 -> 6
3 -> 2-> 1 -> 4 -> 5 -> 6

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
function reverseBlocks(head, k) {
def reverseBlocks(head: Node, k: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''


*/

function reverseBlocks(head, k){
  if (!head || !head.next || k === 1) return head

  let curr = head
  let prev = null
  let count = 0

  while(curr && count < k){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next

    count++
  }

  if(curr) {
    head.next = reverseBlocks(curr, k)
  }

  return prev
}

// let test = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))

// console.log(arrayify(test))
// console.log(arrayify(reverseBlocks(test, 3)))


function toString(head) {
  if (!head)
    return "<empty>"

  let parts = []
  while(head) {
    parts.push(head.value)
    head = head.next
  }

  return parts.join(" -> ")
}

console.log(toString(reverseBlocks(null, 1)) == "<empty>")

let head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 1)) == "1")

head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 9)) == "1")

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 1)) == "1 -> 2 -> 3")

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 3")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 3)) == "3 -> 2 -> 1 -> 6 -> 5 -> 4")

// 5 -> 6 -> 9
head = new Node(5, new Node(6, new Node(9)))
console.log(toString(reverseBlocks(head, 3)) == "9 -> 6 -> 5")

// 2 -> 2 -> 2
head = new Node(2, new Node(2, new Node(2)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 2 -> 2")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 4 -> 3 -> 6 -> 5")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 4)) == "4 -> 3 -> 2 -> 1 -> 6 -> 5")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 6)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 9)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")
