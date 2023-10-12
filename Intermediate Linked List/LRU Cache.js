
/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class.

If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Examples:
See test cases.

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class LRUCache {
  capacity = 3;

  get(key) {} // int -> int

  put(key, val) {} // int, int -> int
}

// Test Cases
let cache = new LRUCache()
console.log(cache.get(0)) // undefined
cache.put(1, 10)
cache.put(2, 20)
cache.put(3, 30)
console.log(cache.get(1)) // 10
console.log(cache.get(2)) // 20
cache.put(4, 40)
console.log(cache.get(3)) // undefined because purged when 4 was put in.
*/

class LRUCache {
  capacity = 3;
  constructor(){
    this.capacity = capacity;
    this.map = new Map();
    this.list = new DoublyLinkedList();
  }
  get(key) {
    if(!this.map.had(key)) return -1

    const node = this.map.get(key)
    this.list.remove(node)

    this.map.set(key, this.list.push(key, node.value))
    return node.value
  } // int -> int

  put(key, val) {
    if(key > capacity) return 'error'
    this.map.set(key, val)
  } // int, int -> int
}


class DoublyLinkedListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, value) {
    const node = new DoublyLinkedListNode(key, value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;

    return node;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }

    this.length -= 1;
  }
}
