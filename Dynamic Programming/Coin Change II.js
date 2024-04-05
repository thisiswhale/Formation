/**
https://leetcode.com/problems/coin-change-ii/

Q. Given coins of different denominations (e.g. cent, dime, quarter in U.S. currency) and a total amount of money, calculate the number of combinations to make up the target amount. You may assume there are infinite number of each kind of coin.

Examples:
• Given: amount = 2, coins = [1, 2, 3] // returns 2
• Possible Combinations: (2 = 2), (2 = 1+1)
• Given amount = 5, coins = [1, 2, 5] // returns 4
• Possible Combinations: (5 = 1 + 1 + 1 + 1 + 1), (5 = 2 + 1 + 1 + 1), (5 = 2 + 2 + 1), (5 = 5)

*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(amount+1).fill(0)
    dp[0] = 1

    for(let c of coins){
        for(let amt = 1; amt <= amount; amt++){
            if(c <= amt){
                dp[amt] += dp[amt-c]
            }
        }
    }
    return dp[amount]
};
