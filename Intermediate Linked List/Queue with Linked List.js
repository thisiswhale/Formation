/*
'''
❓ PROMPT
Implement a basic queue class using a linked list as the underlying storage. Queues have two critical methods, enqueue() and dequeue() to add and remove an item from the queue, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the queue. All of these methods should run in O(1) time!

Remember, a queue is a first-in, first-out (or last-in, last-out) data structure!

A doubly linked list is one of the simplest ways to implement a queue. You'll need both a head and tail pointer to keep track of where to add and where to remove data. Using a doubly linked list means you can do both operations without walking the whole list and all modifications of the list are at the ends.

Example(s)
q = new LLQueue();
console.log(q.size()) // 0
q.enqueue(2);
q.enqueue(3);
console.log(q.size()) // 2
console.log(q.dequeue()); // 2
console.log(q.size()) // 1
console.log(q.dequeue()); // 3
 

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
class LLNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {}

  enqueue(newValue) {}

  dequeue() {}

  size() {}
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class LLNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {
    this.head = new LLNode("head");
    this.tail = new LLNode("tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.count = 0
  }
 
  enqueue(newValue) {
    const newNode = new LLNode(newValue, this.tail, this.tail.prev)
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.count++
  }

  dequeue() {
    if (this.count === 0) {
      return undefined; // or throw an exception?
    }
    const node = this.head.next;
    this.head.next = node.next;
    this.head.next.prev = this.head;
    node.next = null;
    node.prev = null;
    this.count--
  }

  show(){
    return this.head
  }
  size() {
    return this.count
  }
}

let q = new LLQueue();
console.log('1', q.show()) // head -> tail

q.enqueue(2);
console.log('2', q.show())
// q.enqueue(3);
// console.log(q.size()) // 2
// console.log(q.dequeue()); // 2
// console.log(q.size()) // 1
// console.log(q.dequeue()); // 3
