/**

https://leetcode.com/problems/queens-that-can-attack-the-king

On a 0-indexed 8 x 8 chessboard, there can be multiple black queens ad one white king.

You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.

Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.





 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    
    if(!queens.length) return []
    const ROWS = 8;
    const COLS = 8;

    function checkAttackMove(x,y, dx, dy){
        
        if(x < 0 || y < 0 || y >= ROWS || x >= COLS) return

        for(const [queenX, queenY] of queens){
            if(x === queenX && y === queenY){
                result.push([queenX, queenY]) 
                return
            }
        }
            
        checkAttackMove(x + dx, y + dy, dx, dy)
    }

    const result = []
    const possibleMoves = [ [0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1], [-1,-1]]

    for(const [dx,dy] of possibleMoves){
        checkAttackMove(king[0],king[1], dx,dy)
    }

    return result
};
