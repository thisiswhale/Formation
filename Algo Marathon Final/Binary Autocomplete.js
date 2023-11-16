/*
'''
The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result. 

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.
 

EXAMPLE(S)
Possible commands = ['0', '000', '1110', '01', '001', '110', '11']


Trie
time: O(n)
space: O(n*k)
                ""
            0*            1
          0   1*       0   1*
        0  1 0 1     0 1  0 1...

Hashmap
time: O(1)
space: O(n*k^2)
  {
    0: ['000', '01','001'],
    01: ['01'],
    00: ['000','001'],
  }




FUNCTION SIGNATURE
Implement a class that should be initialized with a list of possible commands. The class should have the following public method:

autocomplete(command) {
def autocomplete(self, command: str) -> list[str]:



class => possibleCommandList
  data: possibleCommandList

  autocomplete(command)
    => 
      output = []
      loop through data to see if word starts with command
        if yes, add to output

'''
*/

class Commands{
  constructor(list = []){
    this.data = this.constructData(list)
  }

  constructData(list){  
    const data = {} // new Map()
    for(let command of list) { // "010"
      for(let i = 0; i < command.length; i++) {
        const prefix = command.slice(0, i + 1) // "01"
        if(prefix in data) {
          data[prefix].push(command)
        } else {
          data[prefix] = [command]
        }
      }
    }

    console.log(data)
    return data
  }
  /*
  {
    0: ['000', '01','001'],
    01: ['01'],
    00: ['000','001'],
  }
  */
  
  autocomplete(command){
    if (this.data[command]) {
      return this.data[command];
    }else {
      return [];
    }
  }

}

const command = new Commands(['000', '1110', '01', '001', '110', '11'])
console.log(command.autocomplete("0")) // ['000', '01', '001']
console.log(command.autocomplete("1")) // ['1110', '110', '11']
console.log(command.autocomplete("00")) // ['000', '001']
console.log(command.autocomplete("1111")) // []
console.log(command.autocomplete("2")) // []

class Node {
  constructor(isCommand, children) {
    // isCommand is used to mark the end of a valid command
    this.isCommand = isCommand
    this.children = children
  }
}


// Trie Solution
//['000', '1110', '01', '001', '110', '11']
/*
                  ''
        {0: false, {}} {1: false, {}}
    {0: false, {}}
  {0: true, {}}
*/


class Solution {
  build(commands) {
    const trie = new Node(false, {})
    for (const command of commands) {
      let current = trie
      for (const char of command) {
        if (!(char in current.children))
          current.children[char] = new Node(false, {})

        current = current.children[char]
      }
      current.isCommand = true
    }
    this.trie = trie
  }

  autocomplete(command) {
    let current = this.trie
    for (const char of command) {
      if (!(char in current.children))
        return []

      current = current.children[char]
    }

    const commands = []
    this.dfs(current, command, commands)
    return commands
  }

  dfs(node, prefix, commands) {
    if (node.isCommand)
      commands.push(prefix)

    for (const char in node.children)
      this.dfs(node.children[char], prefix + char, commands)
  }
}
