/*
'''
Suppose you're a school headmaster and somebody has drafted a course list for a new program. Each course has an ID associated with it, and they may have prerequisites.

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
 

EXAMPLE(S)
Input: numCourses = 1, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 
DFS
Time: O(v+e)
Space: O(v+e)

Convert prerequisites -> adjList

traverseing all numCourses, 0 -> numCourses into a recursive function
  check if all courses meet prerequisites, return true

return false

Use visited map to mark courses visited

helper
  check visited for course, return false
  check adjList at course length is empty, return true

  loop the course in adjList
    recursive call

  add course to visited
  adjList at course to empty array

  return false

FUNCTION SIGNATURE
function courseSchedule(numCourses, prerequisites)
'''
*/
// Input: numCourses = 1, prerequisites = [[1,0]]
/**
 * {
 *  0:[]
 *  1:[0]
 * }
 */
function courseSchedule(numCourses, prerequisites){

  const adjList = {}
  
  for(let i = 0; i <= numCourses; i++){
    adjList[i] = []
  }

  for(let [pre, course] of prerequisites){
    adjList[pre].push(course)
  }
  const visited = {}

  function helper(course){

    if(visited[course]) return false
    if(!adjList[course].length) return true

    visited[course] = 1

    for(const crs of adjList[course]){
      if(!helper(crs)) return false
    }

    visited[course] = 0
    adjList[course] = []
    
    return true
  }

  for(let crs = 0; crs < numCourses; crs++){
    if(!helper(crs)) return false
  }

  return true
}

//1, [0, 1], [0, 2]

console.log(courseSchedule(1, [[1,0]])) //true
console.log(courseSchedule(2, [[1,0],[0,1]])) //false
console.log(courseSchedule(3, [[1,0],[2,0]])) // true
console.log(courseSchedule(3, [[1,0],[2,1]])) // true
console.log(courseSchedule(3, [[0,1],[0,2]])) // true
console.log(courseSchedule(1, [[0,1],[0,2]])) // true

/**
 * {
 *  0:[]
 *  1:[]
 * }
 */
1, 2, 0
2, 1, 0

function courseSchedule(numCourses, prerequisites) {
  const graph = new Map();

  const indegree = Array(numCourses).fill(0);
  const queue = [];

  const coursesTaken = [];

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indegree[e]++;
  }

  // Push our starting/no-dependency nodes into a queue
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  // Process our course dependencies
  while (queue.length) {
    // Dequeue course
    const course = queue.shift();

    // Push to order
    coursesTaken.push(course);

    // Track indegree edges
    const dependentCourses = graph.get(course);

    if (dependentCourses) {
      for (const dependentCourse of dependentCourses) {
        indegree[dependentCourse]--;
        if (indegree[dependentCourse] === 0) queue.push(dependentCourse);
      }
    }
  }

  // Return results at end
  return numCourses === coursesTaken.length;
};
