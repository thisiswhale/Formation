/*
'''
Partition Linked List into Segments

Given the head of a linked list and any number *parts*, partition the list into *parts* consecutive segments. No 2 segments should have a size difference >1.

Return an array of *n* of head nodes. The segments should be in the same original order, and segments occurring earlier should never be smaller than later segments.
 

EXAMPLE(S)
list1 = 1->2->3->4->5->6->7->8->9->10->None
segmentLinkedList(list1,1)
Output:
[
  1->2->3->4->5->6->7->8->9->10->None
]

list2 = 1->2->3->4->5->None
segmentLinkedList(list2, parts=10)
Output:
[
  1->None
  2->None
  3->None
  4->None
  5->None
  []
  []
  []
  []
  []
]

list3 = 1->2->3->4->5->None
segmentLinkedList(list3, parts=2)
Output:
[
  1->2->3->None
  4->5->None
]
 

FUNCTION SIGNATURE
function segmentLinkedList(head, parts) {

class Node {
  constructor(val=0, next=null) {
    this.val = val
    this.next = next
  }
}

// converts a list of lists to a string for testing
function toString(arr) {
  if (!arr || arr.length === 0)
    return "[]\n"

  let theString = "[\n"
  for (let head of arr)
    theString += "  " + toStringIndividual(head)
  return theString + "]"
}

// converts a list to a string for testing
function toStringIndividual(head) {
  if (!head || head.length === 0)
    return "[]\n"

  let theString = ""
  while (head) {
    theString += head.val + "->"
    head = head.next
  }
  return theString + "None\n"
}

def segmentLinkedList(head: Node, parts: int) -> list[Node]:

class Node:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

# converts a list of lists to a string for testing
def toString(arr: list[Node]) -> str:
  if not arr:
    return "[]\n"

  theString = "[\n"
  for head in arr:
    theString += "  " + toStringIndividual(head)
  return theString + "]"

# converts a list to a string for testing
def toStringIndividual(head: Node) -> str:
  if not head:
    return "[]\n"

  theString = ""
  while head:
    theString += str(head.val) + "->"
    head = head.next
  return theString + "None\n"
'''
*/

// Time: O(n) to iterate through the length N list
// Space: O(n) to store the length N list in various partitions
function segmentLinkedList(head, parts) {
  let listLength = 0
  let cur = head
  while (cur) {
    cur = cur.next
    listLength++
  }

  let segmentLength = Math.floor(listLength / parts)
  let remainder = listLength % parts

  let listOfHeads = []
  cur = head
  while (cur) {
    let curSegLen = 0
    listOfHeads.push(cur) // add the head of a new segment
    let prev = cur

    // append to the current partition segment
    while (cur && curSegLen < segmentLength) {
      prev = cur
      cur = cur.next
      curSegLen++
    }

    // use the remainder once each iteration until it's gone
    if (remainder > 0) {
      prev = cur
      cur = cur.next
      remainder--
    }

    prev.next = null
  }

  // there's more partitions than nodes
  while (listOfHeads.length < parts) {
    listOfHeads.push([])
  }

  return listOfHeads
}

console.log(JSON.stringify(segmentLinkedList(null, 1)) == "[[]]")
console.log(JSON.stringify(segmentLinkedList(null, 2)) == "[[],[]]")

// 1->2->3->4->5->6->7->8->9->10->None
let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8, new Node(9, new Node(10))))))))))
console.log(toString(segmentLinkedList(list1, 1)) == `[
  1->2->3->4->5->6->7->8->9->10->None
]`)

// 1->2->3->4->5->None
let list2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(toString(segmentLinkedList(list2, 10)) == `[
  1->None
  2->None
  3->None
  4->None
  5->None
  []
  []
  []
  []
  []
]`)

// 1->2->3->4->5->None
let list3 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(toString(segmentLinkedList(list3, 2)) == `[
  1->2->3->None
  4->5->None
]`)

// 1->2->3->4->5->None
let list4 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(toString(segmentLinkedList(list4, 3)) == `[
  1->2->None
  3->4->None
  5->None
]`)

// 1->2->3->4->5->None
let list5 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(toString(segmentLinkedList(list5, 5)) == `[
  1->None
  2->None
  3->None
  4->None
  5->None
]`)

// 1->2->3->4->5->6->7->8->9->10->None
let list6 = new Node(1, new Node(2,new Node(3, new Node(4, new Node(5,
new Node(6, new Node(7, new Node(8, new Node(9, new Node(10))))))))))
console.log(toString(segmentLinkedList(list6, 3)) == `[
  1->2->3->4->None
  5->6->7->None
  8->9->10->None
]`)
