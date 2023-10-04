/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 //both linked list empty will return []
 //either list is empty will return either non empty list
 //uneven length of list1 and list2
 //list1 and list2 are sorted linked list
 
 //input: list1, list2 :Linked List
 //output: result: linked list
 
 //create a new ListNode
 //traverse list1 and list2 with curr1 and curr2 with while loop
 //append lesser value between list1 or list2 to new listNode , then update curr variable

 //edge case when traverse one of the linked list is null do another while loop

//RECURSIVELY
// list1: [1,2,4]
// list2: [1,3,4]

// call stack #1: 
// -list2.next = mergeTwoLists(list1, list2.next)
// list1: [1,2,4]
// list2: [3,4]

// call stack #2: 
// -list1.next = mergeTwoLists(list1.next, list2)
// list1: [2,4]
// list2: [3,4]

// call stack #3: 
// -list1.next = mergeTwoLists(list1.next, list2)
// list1: [4]
// list2: [3,4]

// call stack #4: 
// -list2.next = mergeTwoLists(list1, list2.next)
// list1: [4]
// list2: [4]

// call stack #5: 
// -list2.next = mergeTwoLists(list1, list2.next)
// list1: [4]
// list2: []

// call stack #6: 
// return list1 // [4]

// back to call stack #5
// -list2.next = list1 // [4]
// return list2 //[4,4]

// back to call stack #4
// -list2.next = list2 // [4,4]
// return list2 //[3,4,4]

// back to call stack #3
// -list1.next = list2 // [3,4,4]
// return list1 // [2,3,4,4]

// back to call stack #2: 
// -list1.next = list1 // [2,3,4,4]
// return list1  // [1,2,3,4,4]

// back to call stack #1: 
// -list2.next = list1 // [1,2,3,4,4]
// return list2 // [1,1,2,3,4,4]


var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return list1
    if(!list1) return list2
    if(!list2) return list1

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
    
};

//ITERATIVELY
// var mergeTwoLists = function(list1, list2) {
//     if(!list1 && !list2) return list1
//     if(!list1) return list2
//     if(!list2) return list1

//     const head = new ListNode(null)
//     let currHead = head

//     let curr1 = list1
//     let curr2 = list2
//     while(curr1 && curr2){
//         if(curr1.val < curr2.val){
//             currHead.next = new ListNode(curr1.val)
//             curr1 = curr1.next
//         } else{
//             currHead.next = new ListNode(curr2.val)
//             curr2 = curr2.next
//         }
//         currHead = currHead.next
//     }

//     currHead.next = curr1 || curr2

//     return head.next
// };
