/**
 * @param {number[][]} wall
 * @return {number}
 */

var leastBricks = function(wall) {
    const ROWS = wall.length
    let countGap = {0:0}

    for(let r = 0; r < ROWS; r++){
        let currentWidth = 0
        for(let c = 0; c < wall[r].length-1; c++){
            currentWidth += wall[r][c]
            countGap[currentWidth] = (countGap[currentWidth] ?? 0) + 1
        }
    }

    return ROWS - Math.max(...Object.values(countGap))
};
