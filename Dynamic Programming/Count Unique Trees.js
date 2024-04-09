/**
 * @param {number} n
 * @return {number}

 https://leetcode.com/problems/unique-binary-search-trees/
 */
var numTrees = function(n) {
    //n = 1 , 1
    //n = 2 , 2
    //n = 3 , 5
    //n = 4 , 9
    //n = 5 , 16
    const res = []
    res[0] = 1
    res[1] = 1
    res[2] = 2

    for(let i = 3; i <= n; i++){
        let total = 0
        for(let p = 0; p < i; p++){
            total += res[p] * res[i-p-1]
        }
        res[i] = total
    }
    return res[n]
};
