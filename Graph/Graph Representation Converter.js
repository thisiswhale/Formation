
/*
'''
❓ PROMPT
Create a class that takes a vertex/edge list of a directed graph in the constructor. Suppose the inputted nodes are arbitrary strings.

Have 2 public methods:

(Map<string, int>, Array<Array<int>>) GraphConverter::getAsAdjacencyMatrix()

Return a tuple where the first value is a mapping to a row number and the second value is the VxV size matrix.

Map<string, List<string>> GraphConverter::getAsAdjacencyList()

Return a mapping from node ID to neighboring node IDs.

Example(s)
Suppose we have the following vertex list and edge list:
vertexList = ["n1", "n2", "n3"]
edgeList = [("n1", "n2")]

getAsAdjacencyList(vertexList, edgeList) should return
{
  "n1": ["n2"],
  "n2": [],
  "n3": [],
}

getAsAdjacencyMatrix(vertexList, edgeList) should return a tuple with the following values.

First value (IDs can be arbitrarily assigned in any order):
{
  "n1": 0,
  "n2": 1,
  "n3": 2,
}

Second value:
[
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
]
 

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
class GraphConverter {
  getAsAdjacencyList(vertexList, edgeList) {}
  getAsAdjacencyMatrix(vertexList, edgeList) {}
}

class GraphConverter:
  def getAsAdjacencyList(self, vertexList: list[str], edgeList: list) -> dict[str, list[str]]:
  def getAsAdjacencyMatrix(self, vertexList: list[str], edgeList: list):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
// Suppose we have the following vertex list and edge list:
// vertexList = ["n1", "n2", "n3"]
// edgeList = [("n1", "n2")]

// getAsAdjacencyList(vertexList, edgeList) should return
// {
//   "n1": ["n2"],
//   "n2": [],
//   "n3": [],
// }

// getAsAdjacencyMatrix(vertexList, edgeList) should return a tuple with the following values.

// First value (IDs can be arbitrarily assigned in any order):
// {
//   "n1": 0,
//   "n2": 1,
//   "n3": 2,
// }

// Second value:
// [
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

class GraphConverter {
  constructor(vertexList, edgeList){
    this.vertexList = vertexList
    this.edgeList = edgeList

    this.getList = this.getAsAdjacencyList(vertexList, edgeList)
    this.getMatrix = this.getAsAdjacencyMatrix(vertexList, edgeList)

    this.adjList = this.getList
    this.adjMatrix = this.getMatrix
  }

  getAsAdjacencyList(vertexList, edgeList) {
    const adjList = {}
    for(let vertex of vertexList){
      adjList[vertex] = []
    }

    for(let [a,b] of edgeList){
      adjList[a].push(b)
    }

    return adjList
  }

  getAsAdjacencyMatrix(vertexList, edgeList) {

    const adjMatrix = Array.from(new Array(vertexList.length), () => new Array(vertexList.length).fill(0))

    const adjId = {}
    for(let i = 0; i < vertexList.length; i++){
      adjId[vertexList[i]] = i
    }
    for(let [a,b] of edgeList){
      adjMatrix[adjId[a]][adjId[b]] = 1
    }
    return adjMatrix
  }
}

// vertexList = ["n1", "n2", "n3"]
// edgeList = [("n1", "n2")]
let node = new GraphConverter(["n1", "n2", "n3"], [["n1", "n2"]])
// console.log(node.adjList)
console.log(node.adjMatrix)
