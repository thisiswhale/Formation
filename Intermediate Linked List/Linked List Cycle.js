/*
'''
https://leetcode.com/problems/linked-list-cycle/

Linked List Cycle

Given a linked list, determine if it has a cycle.
 

EXAMPLE(S)
Input: 1 → 2 → 3
Output: False

Input:
1 → 2 → 3  → 4 → 5  
        ↑________↓
Output: True
 

FUNCTION SIGNATURE
function hasCycle(head) {
'''
*/
var hasCycle = function(head) {
  
  let fast = head
  
  while(fast && fast.next){

    head = head.next
    fast = fast.next.next
    if(head == fast) {
      return true
    }
  }

  return false
};
