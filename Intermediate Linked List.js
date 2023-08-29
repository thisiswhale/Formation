
/*
Given a linked list with each node representing a digit in an integer, add 1 to the number. The head holds the most significant digit and tail holds the least significant digit. Here is some starting code to implement and print out a linked list in Python.

Harder variations:
1. Do it both recursively and iteratively.
2. What if it's too big to be stored in an integer or long?
3. How can it be done in place without using another collection?
4. What about adding two linked lists? N linked lists?
5. What changes to add 2 linked lists that potentially have decimal values? (Submit your solution to this variation in #feedback-content so we can post it!)
 

EXAMPLE(S)
head = 1 -> 2 -> 3 -> None
head = addOne(head)
printLL(head) # 1 -> 2 -> 4 -> None
 

FUNCTION SIGNATURE
def addOne(head: Node) -> Node:
*/


// Cases to consider:
// ends in 0 
// invalid node (no number representation)
// 129 -> 130
// 9 -> 10
// 999 -> 1000

class Node {
  constructor(val, next=undefined){
    this.val = val
    this.next = next;
  }

  toString(){
    let curr = this
    let str = ''
  
    while(curr){
      str += curr.val
      curr = curr.next
    }
  
    return str
  }

}

function int2Node(number) {
  
}


/*
  Iterate to last node representing the ones (where next is undefined)
  increment

  take our carry bit - increment previous if needed
  if at most significant node, create new one, and handle overflow

*/

// let mylist = new Node(9);
// let mylist = new Node(1, new Node(2, new Node (9)));
// let mylist = new Node(1, new Node(2, new Node (9)));
let mylist = new Node(9, new Node(9, new Node (9)));
console.log(mylist.toString())

function addOne(head) {
  let cursor = head;
  let stack = []
  while (cursor != undefined) {
    stack.push(cursor)
    cursor = cursor.next;
  }

  let carry = 1;
  cursor = stack.pop();
  while (carry > 0 && stack.length !== 0) {
    let sum = cursor.val + 1;
    cursor.val = sum % 10;
    carry = Math.floor(sum / 10);
    cursor = stack.pop();
  }

  if (carry > 0) {
    cursor.val = 0;
    let new_node = new Node(carry);
    new_node.next = cursor;
    head = new_node;
  }
  
  return head;
}


mylist = addOne(mylist);
console.log(mylist.toString())
