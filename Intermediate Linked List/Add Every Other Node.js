class ListNode {
  constructor(value, next= null) {
    this.value = value;
    this.next = next;
  }
}

//Given a linked list, insert a node with the value of zero after each node.
function solution(node) {
  if(!node) return node
  
  let curr = node
  while(curr){

    const zeroNode = new ListNode(0);
    zeroNode.next = curr.next;
    curr.next = zeroNode;
    curr = zeroNode.next;

  }
  return node
}

let test = new ListNode(1, new ListNode(2))
console.log('test', test)
console.log(arrayify(solution(test)))
