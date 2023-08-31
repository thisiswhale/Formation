/**

https://leetcode.com/problems/roman-to-integer/

 * @param {string} s
 * @return {number}

 I = 1
 V = 5
 X = 10
 L = 50
 C = 100
 D = 500
 M = 1000
 
 III = 3
 IV = 4
 V = 5
 VI = 6
 IIX = 8, not correct
 VIII = 8, 

 empty string = 0

 */
var romanToInt = function(s) {

    if(!s.length) return 0

    const symbols ={
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    let total = 0;
    for(let i = 0; i < s.length; i++){
        const currRoman = symbols[s[i]]
        const nextRoman = symbols[s[i+1]]
        if (i + 1 < s.length && nextRoman > currRoman) {
            total -= currRoman;
        } else {
            total += currRoman;
        }
    }

    return total
};
