/**
 * @param {number[][]} grid
 * @return {number}

 8 directions
 input: 2x2 matrix, 1s and 0s where 1s are valid paths , nxn matrix, min n=1
 output: integer, number of visited cells 

 Should return number of visited cells when reaches end of 2d grid, ROW-1, COL-1
grid[0][0] can have 1 so return -1

edge cases

1x1 matrix with 1, returns 1
1x1 matrix with 0, returns -1

false bc is invalid path at the end of grid
[[1,0,0],
 [1,1,0],
 [1,1,0]]

 Approaches:
 BFS, looking at every direction at the level bases
 create a queue for all directions from 0,0 and starting length of path
    update the grid at the point as 1, for visited
    check for the point queue is in bound of grid
    check for the point of dr,dc is 0
    when dr and dc is at the end of grid and grid[dr][dc] is 0 return path

return -1 when path not found
 */

var shortestPathBinaryMatrix = function(grid) {
    
    if(grid[0][0] === 1) return -1

    const ROWS = grid.length
    const COLS = grid[0].length

    const queue =[[0,0,1]] // r,c,length
    const visited = new Set()
    while(queue.length){
        
        const [currR, currC, length] = queue.shift();

        if(currR == ROWS-1 && currC == COLS-1) return length
        if(visited.has(`${currR},${currC}`)) continue;
        visited.add(`${currR},${currC}`)

        for(let dr of [-1,0,1]){
            for(let dc of [-1,0,1]){
                
                if(dr == 0 && dc == 0) continue;

                const row = currR + dr
                const col = currC + dc
                if( row < ROWS && col < COLS && row >= 0 && col >= 0 && grid[row][col] === 0){
                    queue.push([row,col, length+1])
                }

                // if(row >= ROWS || col >= COLS || row < 0 || col < 0 || grid[row][col] == 1) continue
                // queue.push([row,col, length+1])
                
            }
        }
        
    }

    return -1
};

