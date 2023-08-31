/*
Q. Given a sorted linked list, insert an element in the appropriate position iteratively.

Example:
- Given a linked list: **`1 -> 3 -> 4`**, target: **`2`**
 // returns **`1 -> 2 -> 3 -> 4`**
*/

function insert(list, target) {
  // // If there is no list
  if (!list) return new ListNode(target);
  
  // sentinel pattern, dummy first value point to head of the actual list
  let sentinel = new ListNode(null, list);
  let curr = sentinel;
      
  while (curr) {
      if (!curr.next || target < curr.next.value) {
          // swap logic
          const next = curr.next;
          curr.next = new ListNode(target);
          curr.next.next = next;
          break;
      };
      // need to keep the chain moving
      curr = curr.next;
  };
  
  return sentinel.next;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

// console.log(arrarify(insert(LL1, 2))) // [1, 2, 3, 4]
// console.log(arrarify(insert(LL1, -4))) // [-4, 1, 2, 3, 4]
// console.log(arrarify(insert(LL2, -4))) // [-4, -3, -2, -1]
// console.log(arrarify(insert(LL2, 0))) // [-3, -2, -1, 0]
// console.log(arrarify(insert(null, 1))) // [1]
// console.log(arrarify(insert(new ListNode(1), -1))) // [-1,1]
// console.log(arrarify(insert(LL3, 2))) // [1, 2, 2, 3, 4]

