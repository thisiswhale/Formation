/*
'''
https://leetcode.com/problems/group-anagrams/

❓ PROMPT
Given an array of strings, group all anagrams together in an array and return an array of these groups.

Example(s)
Input: ["bat", "cat", "tab", "car", "atb"]
Output: [["bat", "tab", "atb"], ["cat"], ["car"]]
 

2 SOLUTIONS

'''
*/

// Runtime: O(n*klogk), where n is # of strings and k is the max length of string. klogk comes from sorting the letters in each string.
// Space: O(nk)
function groupAnagrams(words) {
  const dict = {};
  const result = [];

  for (const w of words) {
    const sorted = w.split('').sort().join('');
    if (dict[sorted] === undefined) {
      dict[sorted] = [];
      result.push(dict[sorted]);
    } 
    dict[sorted].push(w);
  }

  return result;
}

// Runtime: O(n*m), 
// Space: O(n)

var groupAnagrams = function(strs) {
    if(!strs.length || strs.length == 1) return [strs];

    const result = {};
    for(let str of strs){
        let key = new Array(26).fill('*');
        for(let char of str){
            const code = char.charCodeAt() - 'a'.charCodeAt();
            if(!key[code]) key[code] = 1;
            else key[code]++ 
        }
        key = key.join(',');

        if(!result[key]) result[key] = [str]
        else result[key].push(str);
    }

    return Object.values(result);
};
