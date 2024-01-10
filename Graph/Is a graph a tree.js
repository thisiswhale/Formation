/*
'''
Given an adjacency list of a directed graph, return "BINARY TREE" if it's a binary tree, "TREE" if it's any other type of tree, or "GRAPH" if it's neither.
 

EXAMPLE(S)
     1
   /   \ 
 2     3
/
4

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [],
        4: []
    }
) -> BINARY TREE

--------------

     1        5
   /   \ 
 2     3
/
4

input:
classify(
    {
        2: [4],
        1: [2, 3],
        3: [],
        4: [],
        5: [],
    }
) -> GRAPH

--------------

     1       
   /   \ 
 2     3
   \  /
     4

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [4],
        4: [],
    }
) -> GRAPH
 

FUNCTION SIGNATURE
function classify(adjList) {
def classify(adjList: dict[int, list[str]]) -> str:

single node returns binary tree

visited set()

{
        1: [2, 3, 5],
        2: [4],
        3: [4],
        4: [],
        5: [1]
    }

    1: [2,3]



    
childNodes
isBinaryTree

loop over the nodes in adjacencyList
    - check if the array is of size > 2
    - set isBinaryTree to false

    - build up the childNodes by adding each elements in the arrays

    = childNodes set = 2, 3, 4

    roots = loop over the childNodes and check if the keys in the adj list is not present.
    roots = 1, 5

    if length of roots is 1 and binaryTree flag is true return BINARY TREE
    else if we have roots still be of length 1 : TREE
    else GRAPH
    
    traverse the tree one more time to make sure there's no
    duplicates -> GRAPH





'''
*/


function classify(adjList) {

  const visited = new Set()
  const childNodes = new Set()

  let isBinaryTree = true
  
  for(const key in adjList){
      const nodeList = adjList[key]
      
      if(nodeList.length > 2 && isBinaryTree) {
        isBinaryTree = false
      }
      
      for(const node of nodeList){
        childNodes.add(node)
      }
  }
  if(Object.keys(adjList).length - childNodes.size > 1) return 'GRAPH'
  
  function isCycle(node){
    if(visited.has(node)) return true
    visited.add(node)
    for(let nei of adjList[node]){
      if(isCycle(nei)) return true
    }

    return false
  }
//   {
//     "1": [2, 3],
//     "2": [4],
//     "3": [],
//     "4": []
// }

  for(const key in adjList){
    if(!childNodes.has(Number(key))) {
      if(isCycle(key)) return 'GRAPH'
    }
  }
  return isBinaryTree ? 'BINARY TREE' : 'TREE'
}

// console.log(classify({
//   1: [2, 3, 5],
//   2: [4],
//   3: [4],
//   4: [],
//   5: [1]
// })) // graph

// console.log(classify({
//         2: [4],
//         1: [2, 3],
//         3: [],
//         4: [],
//         5: [],
// })) // graph


console.log(classify(
  {
      1: [2, 3],
      2: [4],
      3: [],
      4: []
  })) // binary tree




//SOL
// function classify(adjList) {
//   // The initial set of potential roots is all of the nodes
//   // that have children, so the keys of the adjacency lists object.
//   const potentialRoots = new Set(Object.keys(adjList).map(k => Number(k)));

//   // Special case: if the graph is empty, then it can be any
//   // type so make it the most restrictive.
//   if (potentialRoots.size === 0) return "BINARY TREE";

//   let maxChildren = 0;
//   let maxParents = 0;
//   const parentCounts = {};

//   // Cull out potential roots that appear in child lists.
//   // Also count the number of parents a child has.
//   for (const node of Object.keys(adjList)) {
//     maxChildren = Math.max(maxChildren, adjList[node].length);
//     for (const child of adjList[node]) {
//       // This node has a parent so it's not a root.
//       potentialRoots.delete(child);

//       // Add this to the parent count for this child node.
//       if (parentCounts[child] === undefined) {
//         parentCounts[child] = 0;
//       }
//       parentCounts[child]++;
//       maxParents = Math.max(maxParents, parentCounts[child]);
//     }
//   }

//   // If any node has more than one parent, it's a graph.
//   if (maxParents > 1) return "GRAPH";

//   // If there is any number of potential roots OTHER than 1,
//   // it's a graph.
//   if (potentialRoots.size !== 1) return "GRAPH";

//   // Helper function to detect cycles vs DFS
//   function hasCycle(root) {
//     const visited = new Set();
//     const queue = [root];
//     let position = 0;

//     while (position < queue.length) {
//       const node = queue[position++];
//       visited.add(node);
//       if (adjList[node] === undefined) continue;
//       for (const child of adjList[node]) {
//         if (visited.has(child)) {
//           return true;
//         }
//         queue.push(child);
//       }

//     }
//     return false;
//   }

//   // We know we have one root. Is there a cycle from this point?
//   const [singleRoot] = potentialRoots;
//   if (hasCycle(singleRoot)) return "GRAPH";

//   // After eliminating other possibilities, it's a tree or binary tree
//   // based on the max number of children.
//   return maxChildren > 2 ? "TREE" : "BINARY TREE";
// }






















