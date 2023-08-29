/*
'''
Reverse Linked List in Groups of K

This solution is different from Leetcode based on k requirement

Given a linked list and an integer k, reverse the list in groups of k.
 

EXAMPLE(S)
Input:
1→2→3→4→5→6
K=2

Output:
2→1→4→3→6→5
 
Input: 
1→2→3→4→5
K=3

Output:
3→2→1→5→4

Input: 
1→2→3→4→5
K=5

Output:
5→4→3→2→1

Input: 
1→2→3
K=5

Output:
3→2→1
'''
*/

function reverseKGroup(head, k) {        
    let prev = undefined;
    let curr = head;

    for (let i = 0; i < k; i++) {
        if (!curr) return prev;
        const nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }

    // After reverse, we know that `head` is the tail of the group.
    head.next = reverseKGroup(curr, k)
    return prev;
}
