
/*
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Implement a trie with insert, search, and startsWith methods.

Note:
• A trie is a tree-like data structure whose nodes store the letters of an alphabet.
• By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.
• You may assume that all inputs are consist of lowercase letters a-z.
• All inputs are guaranteed to be non-empty strings.

Examples: 
//     trie = Trie()
//     trie.insert("apple")
//     trie.search("apple")       // returns True
//     trie.search("app")         // returns False
//     trie.startsWith("app")     // returns True
//     trie.insert("app")   
//     trie.search("app")         // returns True
*/
class Node{
  constructor(val = null, isCharEnd = false){
    this.val = val
    this.children = {}
    this.isCharEnd = isCharEnd
  }
}

class Trie {
  
  // Initialize your data structure here.
  constructor() {
      this.head = new Node()
  }
     
  // Inserts a word into the trie.
  insert(word) {
    let curr = this.head
    let i = 0;
    while(i < word.length){
      if(!curr.children[word[i]]){
        curr.children[word[i]] = new Node(word[i], i === word.length -1 ? true : false)
      } else if(i === word.length -1){
        curr.children[word[i]].isCharEnd = true
      }
      curr = curr.children[word[i]]
      i++
    }
  }


  // Returns if the word is in the trie.
  search(word) {
    let i = 0;
    let curr = this.head
    while(i < word.length-1){
      if(!curr.children[word[i]]) {
        return false
      }
      curr = curr.children[word[i]]
      i++
    }
    return curr.children[word[i]].isCharEnd
  }
      
  // Returns if there is any word in the trie that starts with the given prefix.
  startsWith(prefix) {
    let i = 0;
    let curr = this.head
    while(i < prefix.length-1){
      if(!curr.children[prefix[i]]) {
        return false
      }
      curr = curr.children[prefix[i]]
      i++
    }
    return true
  }
}

// Test Cases
var trie = new Trie()
trie.insert("apple")
trie.insert("app")
console.log(trie.search("apple"))
console.log(trie.startsWith("app"))
console.log(trie.search("app"))
console.log(trie.startsWith("a"))
console.log(trie.startsWith("ple"))
