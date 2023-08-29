/*
https://leetcode.com/problems/swap-nodes-in-pairs


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return head

    let dummy = new ListNode(null, head)

    let curr = head
    let prev = dummy

    while(curr && curr.next){
        let nextPair = curr.next.next
        let second = curr.next

        second.next = curr
        curr.next = nextPair
        prev.next = second

        prev = curr
        curr = nextPair
    }

    return dummy.next
};
