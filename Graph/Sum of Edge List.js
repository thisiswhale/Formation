/*
'''
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes values accessible from the start node. For practice's sake, do this in DFS order.

Example(s)
vertexList: [1, 2, 3, 4, 5]
edgeList: [(1, 2), (2, 3), (1, 3)]

1--2
| /
3      4    5

sumNodes(vertexList, edgeList, 1) -> 6

Node 1 has access to 2 and 3. The sum of all these nodes is 6. Nodes 4 and 5 aren't accessible.
 

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
function sumNodes(vertexList, edgeList, startNode) {
def sumNodes(vertexList: list, edgeList: list, startNode: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// //DFS
// function sumNodes(vertexList, edgeList, startNode) {
//   const adjList = {}
//   for(let vertix of vertexList){
//     adjList[vertix] = []
//   }

//   for(let [a,b] of edgeList){
//     adjList[a].push(b)
//   }

//   let sum = 0;
//   let visited = new Set()

//   function dfs(curr){
//     if(!adjList[curr]) return
//     sum += curr
//     for(let nei of adjList[curr]){
//       if(!visited.has(curr)){
//         visited.add(curr)
//         dfs(nei)
//       }

//     }
//   }
//   dfs(startNode)

//   return sum
// }

//FORMATION SOLUTION : DFS

// function toAdjList(vertexList, edgeList) {
//   let output = {};
//   for (let v of vertexList) {
//       output[v] = [];
//   }
//   for (let [v1, v2] of edgeList) {
//       output[v1].push(v2);
//       output[v2].push(v1);
//   }
//   return output;
// }

// function sumNodes(vertexList, edgeList, startNode) {
//   if (!vertexList.includes(startNode)) {
//       return 0;
//   }
//   const adjList = toAdjList(vertexList, edgeList);
//   let visited = new Set();
//   let total = 0;
//   function dfs(curr) {
//       if (visited.has(curr)) {
//           return;
//       }
//       total += curr;
//       visited.add(curr);
//       for (let neighbor of adjList[curr]) {
//           dfs(neighbor);
//       }
//   }
//   dfs(startNode);
//   return total;
// }


//BFS
function sumNodes(vertexList, edgeList, startNode) {

  if (vertexList.indexOf(startNode) === -1) return 0;

  const adjList = {}
  for(let vertix of vertexList){
    adjList[vertix] = []
  }

  for(let [a,b] of edgeList){
    adjList[a].push(b)
  }

  let sum = 0;
  let visited = new Set()

  const stack = [startNode];

  while(stack.length){
    const currNode = stack.shift()
    if(visited.has(currNode)) continue;
    
    visited.add(currNode)
    sum += currNode
    for(let nei of adjList[currNode]){
      stack.push(nei)
    }
  }

  return sum
}

// Formation BFS

// function toAdjacencyList(vertexList, edgeList) {
//   if (vertexList.length === 0) return {};

//   const adjacencyList = {}; 

//   // map each vertex to a key and assign an empty array as the value
//   for (const vertex of vertexList) {
//     adjacencyList[vertex] = [];
//   }

//   // map all edges from edgeList to corresponding vertex in adjacencyList 
//    for (const [v1, v2] of edgeList) {
//     adjacencyList[v1].push(v2);
//     adjacencyList[v2].push(v1);
//    }

//   return adjacencyList;
// }

// // ********************* //
// // *** Main Function *** //
// // ********************* //
// function sumNodes(vertexList, edgeList, startNode) {
//   const adjacencyList = toAdjacencyList(vertexList, edgeList);

//   if (vertexList.indexOf(startNode) === -1) return 0;

//   const visited = new Set();
//   let sum = 0;
//   const queue = [startNode];

//   while (queue.length) {
//     const current = queue.shift();

//     if (visited.has(current)) continue;

//     visited.add(current);
//     sum += current;

//     const neighbors = adjacencyList[current];

//     for (const neighbor of neighbors) {
//       queue.push(neighbor);
//     }
//   }

//   return sum;
// }

// console.log(sumNodes(
//   [1,2,3,4,5],
//   [[2,1],[3,2], [3,1]],
//   4
// ) == 4)

let vertexList = [1, 2, 3, 4, 5];
let edgeList = [[1, 2], [2, 3], [1, 3]]

console.log(sumNodes(vertexList, edgeList, 1)) // 6
console.log(sumNodes(vertexList, edgeList, 10000)) // 0
console.log(sumNodes(vertexList, edgeList, 4)) //4
