
/*
While on a hike, you are standing on the trail, looking up a peak, and wondering if it is the top of the mountain: the true summit. But the highest point is not always in view. It may be obscured by a false summit, a position that is lower than the true summit but stands in the way and obscures the highest point from view. For example:

                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - elevations

In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because a false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because there is another point in the way, blocking the view.

                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen above everything in the foreground. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

We can think about this from an urban perspective also! Imagine you are standing on a sidewalk somewhere in Manhattan. As you look around you, can you see the top of the tallest building on the island, One World Trade Center? From some positions, it is visible, but from most, it is not. Shorter buildings are standing in the way: Consider this situation where one building obscures a taller one behind it:

                  |
                  |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
  Height: 0  8  0  10
Position: 0  1  2  3  4  5  6

The function takes an array of elevations. The first elevation (at index 0) will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.
 

EXAMPLE(S)
canSeeTrueSummit([0, 1, 2, 3, 4, 5]) == true
canSeeTrueSummit([0, 2, 3]) == false
canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) == false
canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]) == true
 

FUNCTION SIGNATURE
function canSeeTrueSummit(elevations)


slope: y = mx+b
m = y2-y1/x2-x1 
=> slope = height / ind

1. iterate through array to find peak
2. calculate slope at peak
3. iterate through array until the peak to see if slope exceeds peak slope

*/


function canSeeTrueSummit(elevations){
    let maxPosition = 0
    for (let i = 0; i < elevations.length; i++) {
      if(elevations[i] > elevations[maxPosition]) {
        maxPosition = i
      }
    }

    // make sure that slopes BEFORE the one to the highest peak are smaller
    let slopeToSummit = elevations[maxPosition] / maxPosition;
    for (let j = 1; j < maxPosition; j++) {
      let slope = elevations[j]/j
      if (slope > slopeToSummit) return false

    }
    return true
}
console.log('canSeeTrueSummit')
console.log(canSeeTrueSummit([0, 1, 2, 3, 4, 5]), true)
console.log(canSeeTrueSummit([0, 2, 3]), false)
console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]),false)
console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]), true)

