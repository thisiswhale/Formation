/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}

https://leetcode.com/problems/minimum-domino-rotations-for-equal-row
 */


var minDominoRotations = function(tops, bottoms) {
    //create arr counting for domino counts 1 and 6
    const countTops = new Array(7).fill(0)
    const countBottoms = new Array(7).fill(0)

    let isSame = 0

    for(let i = 0; i < tops.length; i++){
        countTops[tops[i]]++
        countBottoms[bottoms[i]]++

        if(tops[i] === bottoms[i]) isSame++
    }

    //find all domino counts between 1 and 6
    for(let i = 1; i < 7; i++){
        if(countTops[i] + countBottoms[i] - isSame === tops.length){
            return tops.length - Math.max(countTops[i], countBottoms[i])
        }
    }

    return -1

};
