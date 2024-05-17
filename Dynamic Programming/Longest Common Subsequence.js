/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = new Array(text1.length+1).fill().map(()=> new Array(text2.length+1));

    for(let r = 0; r <= text1.length; r++){
        dp[r][text2.length] = 0;
    }
    for(let c = 0; c <= text2.length; c++){
        dp[text1.length][c] = 0;
    }

    for(let r = text1.length-1; r >= 0; r--){
        for(let c = text2.length-1; c >= 0; c--){
            if(text1[r] == text2[c]) dp[r][c] = dp[r+1][c+1] + 1
            else dp[r][c] = Math.max(dp[r+1][c], dp[r][c+1])
        }
    }

    return dp[0][0];
};
