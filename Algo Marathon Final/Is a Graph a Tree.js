
// Is a graph a tree?
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
// connected components
// 
     1        5
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
        4: [],
        5: [],
    }
) -> GRAPH


// If: all nodes are connected, 
 {
    2: [4],
    1: [2, 3],
    3: [],
    4: [],
   // 5: [],
}

[2->1]

possible_roots = {1, 5}
boolean to check if Tree or Binary tree
//

--------------
  1       | 7
   3      | 
 4  5     |


input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [4],
        4: [],
    }
) -> GRAPH
 
{
  1:[1]
}
// Graph

FUNCTION SIGNATURE
function classify(adjList) {
def classify(adjList: dict[int, list[str]]) -> str:
'''
*/

// Brainstorming:
/*
'''
def classify(adjList: dict[int, list[str]]) -> str:

  def getPotentialRoots(adjList):
    potential_roots = set()
       {  1: [2, 3],
          2: [4],
          3: [4],
          4: [],
          5: []
       }
    // put all the keys in it.
    // remove once which cannot be root
    // return potential roots array
    potentialroot = set()
    for node in adjList:
       potentialroot.add(node)
      
    for node,children in adjList:
      for child in children:
       if child in potentialroot:
        potentialroot.remove(child)

    return potentialRoots;
    

 // if potentialRoots.size() > 1 return Graph // connected components
 // loop the adjacencyMap - check if already Visited: Graph
 // finally check if the number of children > 2 (isBinaryTree) ? Tree : BINARY Tree
  
        
  def isBinaryTree(adjList):
    for children in adjList.values:
      if len(children) > 2:
        return False
    return True

    
///
  classify(
    {
        2: [4],
        1: [2, 3],
        3: [4],
        4: [2]
    }
) -> GRAPH

///
 
  def check(adjList):
    if isBinaryTree(adjList):
      return "Binary Tree"
    
  

'''
*/

//not working DFS
function classifyDFS(adjList){
  let potentialTreeType = 'BINARY TREE'
  const potentialRoots = new Set()
  const visited = new Set()

  function dfs(key){
    console.log(visited.has(key), key)
    if(visited.has(key)) return false
    visited.add(key)

    if (adjList[key].length > 2){
      potentialTreeType = 'TREE'
    }

    for(let node of adjList[key]){
      if (potentialRoots.has((node))) {
        potentialRoots.delete(node)
      }
      if(!dfs(node)) return false
    }

    return true
  }

  for(let parentNode in adjList){
    parentNode = Number(parentNode)
    if(!potentialRoots.has(parentNode)){
      potentialRoots.add(parentNode)
    }

    if(!dfs(parentNode)) return 'GRAPH'

  }
  return potentialRoots.size > 1 ? 'GRAPH' : potentialTreeType
}
function classify(adjList) {
  let potentialTreeType = 'BINARY TREE'

  const potentialRoots = new Set()
  const visited = new Set()
   
  for(let key in adjList){
    key = Number(key)

    if(!potentialRoots.has(key) && !visited.has(key)){
      potentialRoots.add(key)
      visited.add(key)
    }
    
    // check number of children
    if (adjList[key].length > 2){
      potentialTreeType = 'TREE'
    }

    // iterate over children
    for(let node of adjList[key]){
      if (potentialRoots.has((node))) {
        potentialRoots.delete(node)
      }
      if (visited.has(node)) return 'GRAPH'

      visited.add(node)
    }
  }
  return potentialRoots.size > 1 ? 'GRAPH' : potentialTreeType
}
console.log(classifyDFS(
  {
      2: [4],
      1: [2, 3],
      3: [4],
      4: [2]
  }
) ) // GRAPH

console.log(classifyDFS(
  {
    1: [2, 3],
    2: [4],
    3: [],
    4: []
  }
) ) //BINARY TREE
