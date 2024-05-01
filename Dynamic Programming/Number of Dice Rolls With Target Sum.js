/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 
 https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

n, # of dice
k, # of face of a dice
target, sum of value

output: # of possible ways to roll dice to get sum

ex: 1 dice, 6 faces, target: 3
1 way, 1 dice thrown can get a value 3

2 dice, 6 faces, target: 3
2 ways, (1,2) and (2,1)

2 dice, 6 faces, target: 4
3 ways, (3,1),(1,3),(2,2)

2 dice, 6 faces, target: 5
3 ways, (3,2),(2,3),(1,4),(4,1)

3 dice, 6 faces, target: 4
3 ways, (2,1,1),(1,2,1),(1,1,2),

5 dice, 6 faces, target: 6
5 ways, (2,1,1,1,1),(1,2,1,1,1),(1,1,2,1,1),(1,1,1,2,1),(1,1,1,1,2)

Bruteforce is to traverse values of k faces per n dice to find sum of target
Time: exponential, n^k
Space: n

DP
have a cache based off of the target, from 0 to the sum
Set table[0] = 1, there are 1 ways to get a target 0

                                target
    0   1   2   3   4   5   6
0   1   0   0   0   0   0   0
1   0   1   1   1   1   1   1
2   0   0   1   2   3   4   5
3   0   0   0   1   3   6   7
4   0   0   0   0   1   4   9
5   0   0   0   0   0   1   5
6   0   0   0   0   0   0   1
# of dice


n, # of dice
k, # of faces of a dice
target, sum of value
*/

//1D DP
//TIME: n*k*target
//SPACE: target
var numRollsToTarget = function(n, k, target) {
    const MOD = 1e9 + 7;
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let numDice = 1; numDice <= n; numDice++) {
        const newDP = new Array(target + 1).fill(0); // Initialize newDP array for each numDice
        for (let faceVal = 1; faceVal <= k; faceVal++) {
            for (let currTarget = faceVal; currTarget <= target; currTarget++) {
                newDP[currTarget] = (newDP[currTarget] + dp[currTarget - faceVal]) % MOD;
            }
        }
        // Update dp with newDP after processing all face values for numDice
        // bc we are only check the row above
        dp = [...newDP]; 
    }
    return dp[target];
}
//2D DP
//TIME: n*k*target
//SPACE: n * target
// var numRollsToTarget = function(n, k, target) {
//    const MOD = 1e9 + 7;
//     const table = new Array(n + 1).fill(null).map(() => new Array(target + 1).fill(0));
//     table[0][0] = 1;

//     for (let numDice = 1; numDice <= n; numDice++) {
//         for (let faceVal = 1; faceVal <= k; faceVal++) {
//             for (let currTarget = faceVal; currTarget <= target; currTarget++) {
//                 console.log(`Looking@ currTarget: ${currTarget} and faceVal: ${faceVal}`)
//                 console.log(`table at [${numDice}][${currTarget}] is set to: `)
//                 console.log(`${table[numDice][currTarget]}[${numDice}][${currTarget}] + ${table[numDice - 1][currTarget - faceVal]}[${numDice - 1}][${currTarget - faceVal}]`)
//                 table[numDice][currTarget] = (table[numDice][currTarget] + table[numDice - 1][currTarget - faceVal]) % MOD;
//             }
//         }
//     }
//     return table[n][target];
// };
