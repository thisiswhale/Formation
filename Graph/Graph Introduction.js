/*
Graph

Trees -> root, leaf, left child and right child
Graphs -> source, neighbours, vertices, edges


source -> entry point of graph
A graph can have multiple sources

neighbours -> B and C are the neighbours of A
vertices -> A,B and C        
edges -> connection between the two vertices (A,B) or (B,A) (B,C) and (A,C)

undirected graph -> A graph which is made of undirected edge 
directed graph ->  A graph which is made of directed edges 


                   A->B , B->A (forms a cycle)
                    p
                     A (source).  -> cyclic graph -> undirected
                    /. \
                   B--- C        D--E
                  p

 cyclic graph -> comming back to the same node again means there is the cycle                 
                  parent
                    A----B.     while checking for cycle, parent nodes are allowed to be visited

acyclic graph -> graph without cycles

connnected graph -> there's only a single component
disconnected -> more than one component in a graph


weighted graph -> assigning a weight to an edge (it can be in the form of cost, distance or time taken)

cost 
A->B is X
B->A is Y

distance between A-B and B-A is same

unweighted graph -> default graph with unweighted edges

Trees are known as DAG (Directed acyclic graph)
Difference between graphs and trees

- trees don't have cycles 
- in trees the edges are directed
- we have only a single component

vertex_list: [1, 2, 3, 4, 5]
edge_list: [(1, 2), (1, 3), (3, 4), (4, 2), (4, 5)]

Adjacency List 

undirected
{
  1: [2,3]
  2: [1,4]
  3: [4,1]
  4: [2,3,5]
  5: [4]
}


Adjacency List 

directed
{
  1: [2,3]
  2: []
  3: [4]
  4: [2,5]
  5: []
}


Adjacency Matrix

# top-down = there's an edge from node number N
# left-right = to node number X

preferrable for dense graph

graph = [
 # 1  2  3  4  5
  [0, 1, 1, 0, 0], # 1
  [0, 0, 0, 0, 0], # 2
  [0, 0, 0, 1, 0], # 3
  [0, 1, 0, 0, 1], # 4
  [0, 0, 0, 0, 0], # 5
]





*/

function addEdge(edge, adjList){
  let source = edge[0];
  let destination = edge[1];

  adjList[source].push(destination);
  adjList[destination].push(source);
}

let adjList = new Map();

let edges = [(), ()];

for(let edge in edges){
  addEdge(edge,adjList);
}

/*
Graph traversal

we need a visited set to keep track of visited nodes to avoid cycles

DFS (Depth first search)

def dfs(graph):
  visited = set() # Set to keep track of visited nodes.

  def explore(node):
      if node not in visited:
          visited.add(node)
          print(node)
          for neighbor in graph[node]:
              explore(neighbor)
          
  explore('A')

dfs(graph)


                              a (v)        -> level1
                            /  \
                           b(v)   c         -> level2
                          |
                        d,e,                -> level3

                          f-g-h

BFS (level order traversal) -> shortest path from src -> dest

def bfs(graph, node):
  visited = set() # Set to keep track of visited nodes.
  queue = []     #Initialize a queue

  visited.add(node)
  queue.append(node)

  while queue:
    s = queue.pop(0) 
    print (s, end = " ") 

    for neighbor in graph[s]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append(neighbor)

bfs(graph, 'A')


https://leetcode.com/problems/keys-and-rooms/

*/
