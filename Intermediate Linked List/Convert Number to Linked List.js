
/*
'''
In this problem, we will be taking in a number and creating a linked list out of it, 
where each node has a value of a single digit in the number. 
The output should read in the same order as the input number.
 

EXAMPLE(S)
createLL(123)
Output: 1 -> 2 -> 3  
 

FUNCTION SIGNATURE
func createLL(number: Int) -> Node:
'''
*/

function createLL(number) {
  if (number <= 0) return new Node(0)

  let currNum = number
  let prevNode = null
  let currNode = null
  
  while (currNum > 0) {
    let nodeValue = currNum % 10 
    currNode = new Node(nodeValue)
    currNode.next = prevNode 
    prevNode = currNode  
    currNum = Math.floor(currNum / 10) 
  }
  
  return currNode
}
