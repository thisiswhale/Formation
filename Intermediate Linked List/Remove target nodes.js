//Given a linked list and a target integer, remove all nodes with the value target.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
    
    if(!list || !list.next) return list
    
    while(list.value === target){
        list = list.next
    }
    let curr = list
    
    while(curr && curr.next){
        if(curr.next.value === target){
            curr.next = curr.next.next
        }
        curr = curr.next
    }
    
    return list
}
