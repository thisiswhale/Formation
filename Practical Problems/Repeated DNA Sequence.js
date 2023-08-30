/*
https://leetcode.com/problems/repeated-dna-sequences
*/

/**
 * @param {string} s
 * @return {string[]}
 */
 //BRAINSTORM
 // only given a str containing A, C, G and T
 // return [] for empty str
 // Find 10 letter long squence and search for repeating sequence
 // AAAACAAAAAAAA => []

 //EXPLORE
 //Use a hashmap to track sequence
 //move along substring to add
 //return the hashmap keys containing more than 1 repeating sequence

var findRepeatedDnaSequences = function(s) {
    if(!s.length) return []
    // if(s.length === 10) return [s]
    let sequence = {}
    for(let i = 10; i <= s.length; i++){
        let substring = s.substring(i-10, i)
        sequence[substring] = (sequence[substring]|| 0) + 1
    }
    return Object.keys(sequence).filter( val => sequence[val] > 1)
};
