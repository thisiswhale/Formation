/**
 * @param {number[][]} grid
 * @return {number}

 -Input 2d grid, m x n
 -output Min number of ALL oranges are rotten
 -horizontal and vertical movement only


 - grid with no rotten oranges return -1
 - grid with rotten orange that dont reach a fresh one return -1
 - grid with all rotten orange at start return 0 minutes

DFS or BFS

DFS to look each depth of direction up, then right, then down, then left
- traverse grid and enter recursive function when we found a 1
- check for neighbors for rotten orange, then update the curr grid position as rotten and recurse again with next direction
-To check all oranges are rotten, do a orange count and if 

BFS, will check all neighboring cells an
 */
var orangesRotting = function(grid) {

    const ROWS = grid.length;
    const COLS = grid[0].length;

    const directions = [[1,0],[0,-1],[-1,0],[0,1]];

    const foundRotten = []
    let freshCount = 0;
    let time = 0
    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === 2) {
                foundRotten.push([r,c])
            }
            if(grid[r][c] === 1) {
                freshCount++
            }
        }
    }

    function inBounds(r,c){
        if(r < ROWS && c < COLS && r >= 0 && c >= 0) return true
        return false
    }

    while(foundRotten.length > 0 && freshCount > 0){
        
        const len = foundRotten.length;
        //for loop will be check surrounding neighbors when orange at 2 at time x
        for(let i = 0; i < len; i++){

            const [r,c] = foundRotten.shift()

            for(let [dr, dc] of directions){
                const row = r + dr;
                const col = c + dc;
                if(inBounds(row, col) && grid[row][col] === 1){
                    foundRotten.push([row, col]);
                    grid[row][col] = 2;
                    freshCount--;
                }
            }
        }
        time++;
    }

    return freshCount === 0 ? time : -1;
};
