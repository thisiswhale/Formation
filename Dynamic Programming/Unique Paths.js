/**
 * @param {number} m
 * @param {number} n
 * @return {number}

https://leetcode.com/problems/unique-paths/
 
 */
//DP
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill().map( () => new Array(n).fill(0));

    for(let row = m-1; row >= 0; row--){
        dp[row][n-1] = 1; 
    }

    for(let col = n-1; col >= 0; col--){
        dp[m-1][col] = 1;
    }
    for(let row = m-2; row >= 0; row--){
        for(let col = n-2; col >= 0; col--){
            dp[row][col] = dp[row+1][col] + dp[row][col+1];
        }
    }
    return dp[0][0]

    // const table = new Array(m).fill().map(()=> new Array(n).fill(0))

    // for(let r = 0; r < m ; r++){
    //     table[r][0] = 1
    // }
    // for(let c = 0; c < n; c++){
    //     table[0][c] = 1
    // }
    // for(let r = 1; r < m ; r++){
    //     for(let c = 1; c < n; c++){
    //         table[r][c] = table[r-1][c]+table[r][c-1]
    //     }
    // }
    // return table[m-1][n-1]
}
//MEMOIZATION
// var uniquePaths = function(m, n) {

//     const table = new Array(m+1).fill().map(()=> new Array(n+1).fill(0))
    
//     function recursive(r,c){

//         if(r >= m || r < 0 || c >= n || c < 0) return 0;
//         if (r === m - 1 && c === n - 1) return 1;

//         if(table[r][c]) return table[r][c]

//         let res = recursive(r+1,c) + recursive(r,c+1)
//         table[r][c] =  res
//         return res

//     }
//     recursive(0,0)
//     return table[0][0]
// }

//RECURSIVE
// var uniquePaths = function(m, n) {

//     function recursive(r,c){
//         if(r == m-1 && c ==n-1) return 1
//         if(r >= m || r < 0 || c >= n || c < 0 ) return 0

//         let res = 0
//         res = recursive(r+1,c) + recursive(r,c+1)
//         return res
//     }

//     return recursive(0,0)
// };
