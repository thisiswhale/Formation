/*
'''
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether they are friends of friends.

Example(s)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False
 

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
function isFOF(vertex_list, edge_list, user1, user2) {
def isFOF(vertex_list: list[str], edge_list: list, user1: str, user2: str) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

//DFS
function isFOF(vertex_list, edge_list, user1, user2) {

  const adjList = {}

  if(!vertex_list.includes(user1)) return false

  for(let vertex of vertex_list){
    adjList[vertex] = []
  }

  for(let [a,b] of edge_list){
    adjList[a].push(b)
  }
  // console.log(adjList)
  const visited = new Set()
  // let foundName = false

  function dfs(name, degree){
    if(visited.has(name)) return false;

    if(name === user2) {
      // foundName = degree === 2
      return degree === 2
    }
    visited.add(name)

    for(let user of adjList[name]){
      if(dfs(user, degree+1)) return true
    }
    return false
  }
  return dfs(user1, 0)

  // return foundName
}

//BFS
// function isFOF(vertex_list, edge_list, user1, user2) {
//   const adjList = {}

//   if(!vertex_list.includes(user1)) return false

//   for(let vertex of vertex_list){
//     adjList[vertex] = []
//   }

//   for(let [a,b] of edge_list){
//     adjList[a].push(b)
//   }

//   const listOfFriends = [[user1, 0]];
//   const visited = new Set();
//   while(listOfFriends.length){
//     const [user, degree] = listOfFriends.shift()

//     if(user === user2) return degree == 2;

//     for(let name of adjList[user]){
//       if(!visited.has(name)){
//         visited.add(user)
//         listOfFriends.push([name,degree+1])

//       }
//     }
//   }

//   return false
// }

const users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
const friends = [
  ["Jeff", "Susan"],
  ["Jeff", "Fred"],
  ["Susan", "Ed"],
  ["Ed", "Fred"],
  ["Jason", "Zach"]
]

// Jeff---|
//  |     |
// Susan  |   Jason - Zach
//  |     |
//  Ed - Fred

// {
//   Jeff: [ 'Susan', 'Fred' ],
//   Susan: [ 'Ed' ],
//   Ed: [ 'Fred' ],
//   Fred: [],
//   Jason: [ 'Zach' ],
//   Zach: []
// }

// // Happy path
console.log(isFOF(users, friends, "Jeff", "Ed") === true) 
console.log(isFOF(users, friends, "Ed", "Jeff") === false)
console.log(isFOF(users, friends, "Susan", "Fred") === true)
console.log(isFOF(users, friends, "Fred", "Susan") === false)

// Too close: Jason -> Zach (distance 1)
console.log(isFOF(users, friends, "Jason", "Zach") === false)

// Distance 1 or 3: Jeff -> Fred / Jeff -> Susan -> Ed -> Fred
console.log(isFOF(users, friends, "Jeff", "Fred") === false)

// Nonexistent path
console.log(isFOF(users, friends, "Zach", "Jeff") === false)
console.log(isFOF(users, friends, "Jeff", "Zach") === false)

// Users not in the network
console.log(isFOF(users, friends, "Foo", "Jeff") === false)
console.log(isFOF(users, friends, "Jeff", "Foo") === false)
console.log(isFOF(users, friends, "Foo", "Bar") === false)

// const users2 = ["Ben", "Emily", "Ana", "Chris", "John", "Jess", "Ken"]
// const friends2 = [
//   ["Chris", "Ben"],
//   ["Chris", "Emily"],
//   ["Chris", "Ana"],
//   ["Chris", "John"],
//   ["Chris", "Jess"],
//   ["Chris", "Ken"]
// ]

// // Ben ---|  |--- Emily
// // Ana -- Chris - John
// // Jess --|  |--- Ken

// // {
// //   Ben: [],
// //   Emily: [],
// //   Ana: [],
// //   Chris: [ 'Ben', 'Emily', 'Ana', 'John', 'Jess', 'Ken' ],
// //   John: [],
// //   Jess: [],
// //   Ken: []
// // }

// // Happy path
// console.log(isFOF(users2, friends2, "Ben", "Ana") === false)
// console.log(isFOF(users2, friends2, "Ana", "Ben") === false)
// console.log(isFOF(users2, friends2, "Jess", "Ana") === false)
// console.log(isFOF(users2, friends2, "Emily", "Ben") === false)
// console.log(isFOF(users2, friends2, "John", "Ken") === false)
// console.log(isFOF(users2, friends2, "Ken", "Emily") === false)

// console.log(isFOF(users2, friends2, "Chris", "Ben") === false)
// console.log(isFOF(users2, friends2, "Chris", "Ana") === false)
// console.log(isFOF(users2, friends2, "Chris", "Jess") === false)
// console.log(isFOF(users2, friends2, "Chris", "Emily") === false)
// console.log(isFOF(users2, friends2, "Chris", "John") === false)
// console.log(isFOF(users2, friends2, "Chris", "Ken") === false)
// console.log(isFOF(users2, friends2, "Ken", "Chris") === false)

// const users3 = ["Ben", "Emily", "Ana", "Tony", "Chris", "John", "Jess", "Ken"]
// const friends3 = [
//   ["Tony", "Ben"],
//   ["Tony", "Jess"],
//   ["Tony", "Ana"],
//   ["Tony", "Chris"], // friend bridge
//   ["Chris", "Emily"],
//   ["Chris", "John"],
//   ["Chris", "Ken"]
// ]

// // Ben ---|        |---- Emily
// // Ana - Tony -- Chris - John
// // Jess --|        |---- Ken

// // {
// //   Ben: [],
// //   Emily: [],
// //   Ana: [],
// //   Tony: [ 'Ben', 'Jess', 'Ana', 'Chris' ],
// //   Chris: [ 'Emily', 'John', 'Ken' ],
// //   John: [],
// //   Jess: [],
// //   Ken: []
// // }

// console.log(isFOF(users3, friends3, "Chris", "Ben"))
// console.log(isFOF(users3, friends3, "Chris", "Ana"))
// console.log(isFOF(users3, friends3, "Chris", "Jess"))
// console.log(isFOF(users3, friends3, "Tony", "Emily"))
// console.log(isFOF(users3, friends3, "Tony", "John"))
// console.log(isFOF(users3, friends3, "Tony", "Ken"))

// // Distance 3
// console.log(isFOF(users3, friends3, "Ben", "Emily") === false)
// console.log(isFOF(users3, friends3, "Ana", "John") === false)
// console.log(isFOF(users3, friends3, "Jess", "Ken") === false)
