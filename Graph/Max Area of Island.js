/**
 * @param {number[][]} grid
 * @return {number}
 https://leetcode.com/problems/max-area-of-island/
 */

var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    const dir = [[0,1],[1,0],[0,-1],[-1,0]]

    let maxArea = 0
    function bfs(r,c){

        const queue = [[r,c]]
        let area = 0
        grid[r][c] = 0

        while(queue.length){
            const [currR,currC] = queue.shift();
            area++
            for(const [dr,dc] of dir){
                const newR = currR + dr
                const newC = currC + dc
                if( newR >= 0 && newC >= 0 && 
                    newR < ROWS && newC < COLS && 
                    grid[newR][newC] === 1
                ) {
                    grid[newR][newC] = 0
                    queue.push([newR,newC])
                }
            }
        }
        return area
    }

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === 1){
                maxArea = Math.max(maxArea, bfs(r,c))
            }
        }
    }

    return maxArea
};

var maxAreaOfIslandDFS = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    let maxArea = 0
    function helper(r,c){
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) return 0
        
        let area = 1
        grid[r][c] = 0
        area += helper(r-1,c)
        area += helper(r+1,c)
        area += helper(r,c+1)
        area += helper(r,c-1)
        return area
    }

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === 1){
                maxArea = Math.max(maxArea, helper(r,c))
            }
        }
    }

    return maxArea
};
