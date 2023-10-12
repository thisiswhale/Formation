/*
'''

https://leetcode.com/problems/partition-list/


Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.
 

EXAMPLE(S)
Given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 5, the solution could be 
1 -> 0 -> 3 -> 5 -> 8

or any of the following:
0 -> 1 -> 3 -> 5 -> 8
0 -> 3 -> 1 -> 5 -> 8
1 -> 3 -> 0 -> 5 -> 8
3 -> 0 -> 1 -> 5 -> 8
3 -> 1 -> 0 -> 5 -> 8
 
value  == k move to right
include negative values, in linked list and k
empty list returns empty list

5 -> 1 -> 8 -> 0 -> 3, k = 5
1 -> 5 -> 8 -> 0 -> 3
1 -> 8 -> 5 -> 0 -> 3

two dummy nodes, 
traverse the LL,
 if( value < k) push dummy1
   else dummy2

return   dummy1 -> dummy2


FUNCTION SIGNATURE
def partition(head: Node, k: int) -> Node:
'''
*/
class Node{
  constructor(val, next= null){
    this.val = val
    this.next = next
  }
}

function partition(head, k){
  if(!head) return head

  let left = new Node()
  let right = new Node()
  let leftHead = left
  let rightHead = right

  let curr = head
  while(curr){
    if(curr.val >= k){
      right.next = new Node(curr.val)
      right = right.next
    } else {
      left.next = new Node(curr.val)
      left = left.next
    }
    curr = curr.next
  }

  left.next = rightHead.next
  
  return leftHead.next
}
//5 -> 1 -> 8 -> 0 -> 3
//output: 1 -> 0 -> 3 -> 5 -> 8
let test0 = new Node()
let test1 = new Node(5, new Node(1, new Node(8, new Node(0, new Node(3)))))

let test2 = new Node(-5, new Node(1, new Node(8, new Node(0, new Node(-3)))))

function arrayify(list){
  let arr = []
  while(list){
    arr.push(list.val)
    list = list.next
  }
  return arr
}
//-5 , 1, 8 , 0 , -3
// left -5, 1, 0 , -3
// right 8

//5 -> 1 -> 8 -> 0 -> 3
// left 5 , 1
console.log(arrayify(partition(test1, -2)))
// console.log(arrayify(partition(test2, 2)))

// Two pointer list re-wiring
function partition(head, pivot) {
  // The head might change so let's use a sentinel for
  // the overall list.
  const sentinel = new LLNode("sentinel", head);
  // Collect the nodes greater than the pivot with the equal nodes
  // at the beginning.
  const greaterOrEqualNodes = new LLNode("greater");
  // remember the location of the last node in the greater
  // or equal list.
  let lastGreater = greaterOrEqualNodes;
  
  let curr = sentinel;

  while (curr.next) {
    if (curr.next.value > pivot) {
      const node = curr.next;
      lastGreater.next = node;
      curr.next = node.next;
      node.next = null;
      lastGreater = node;
    } else if (curr.next.value === pivot) {
      // place at the beginning of the greater or equal nodes list
      const node = curr.next;
      curr.next = node.next;
      node.next = greaterOrEqualNodes.next;
      greaterOrEqualNodes.next = node;
    } else {
      // just keep moving
      curr = curr.next;
    }
  }

  curr.next = greaterOrEqualNodes.next;

  return sentinel.next;
}

// This solution is significantly harder. Use two-pointers. One is the curr pointer and one is holding onto the first node with a greater than value. As you're iterating curr, if the value is greater than pivot, just keep moving. If the value is less than the pivot, swap the value with the node at the other pointer and then move both pointers forward. You will need to handle the special case at the front of the list.



// Solution

// 2 arrays approach
// Iterate through the linked list, creating an array of numbers less than k and an array of numbers greater than k. Then, iterate through the linked list again, writing all the less-than numbers first and then going through the greater-than list.
// 2 pointer list re-wiring approach
// Use a sentinel node for the whole list, and a second for the set of nodes that are greater or equal than the pivot. Initialize a pointer to to the end of the greater or equal list (at first just it's sentinel) and curr pointer to the sentinel for the whole list. Now walk through the whole list. If the next node is smaller than the pivot, just advance curr. If the next node is larger, then place it at the end of the greater or equal list and advance the pointer into that list. If the next node is equal to the pivot, place that node at the start of the greater or equal list. After iterating through the whole list, the curr pointer is now at the last node that is smaller than the pivot. Set that node's next pointer to the actual head of the greater or equal list, then return sentinel.next.
// 2 pointer swapping approach
// This solution is significantly harder. Use two-pointers. One is the curr pointer and one is holding onto the first node with a greater than value. As you're iterating curr, if the value is greater than pivot, just keep moving. If the value is less than the pivot, swap the value with the node at the other pointer and then move both pointers forward. You will need to handle the special case at the front of the list.

