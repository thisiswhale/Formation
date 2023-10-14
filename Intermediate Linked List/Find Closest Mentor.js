
/*
'''
❓ PROMPT
We've been given a list of employees at the company, each person's seniority is denoted by a number, eg: Junior => 3, Senior => 5, and so on.

For each person on the list, we want to find an adjacent employee that outranks them in the list to become their mentor. Return a new list of the same length corresponding to the level of the mentor.

If someone can't find an adjacent superior, they should not be assigned a mentor so it should return their own level.

Example(s)
head = 3 -> 1 -> 3
assignMentors(head) == [3,3,3]

head = 5 -> 6 -> 9
assignMentors(head) == [6,9,9]

head = 2 -> 2 -> 2
assignMentors(head) == [2,2,2]

head = 2 -> 7 -> 4 -> 3 -> 5
assignMentors(head) == [7,7,7,5,5]


🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function assignMentors(head) {
def assignMentors(head: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


function assignMentors(head){
  if(!head) return []
  const mentors = []

  let curr = head
  let prev = null
  while(curr){
    if(curr.next && curr.value < curr.next.value ){
      mentors.push(curr.next.value)
    } else if(prev && curr.value < prev.value){
      mentors.push(prev.value)
    } else {
      mentors.push(curr.value)
    }

    //Readability
      // mentors.push(Math.max(
      //   curr.value,
      //   prev.value,
      //   curr.next ? curr.next.value : Number.MIN_VALUE
      // ))
    prev = curr
    curr = curr.next
  }

  return mentors
}
// head = 2 -> 7 -> 4 -> 3 -> 5

const test = new ListNode(2, new ListNode(7, new ListNode(4, new ListNode(3, new ListNode(5)))))
console.log(assignMentors(test))


const test1 = new ListNode(0, new ListNode(0, new ListNode(0)))
console.log(assignMentors(test1))

const test2 = new ListNode(3)
console.log(assignMentors(test2))
