/**
 * @param {string} s
 * @return {number}
 
 '', return 0
 'a', return 1
 'aa', return 1
 Assume s is string type, include spaces
 Is a space a string, ' ' return 1?

Approach is using pointers wrt sliding window

-Start left and right pointers where both set to 0
-Instantiate a count map
-Variable to set longest = 0, at end of function, return longest
-Traverse the s in a while loop where r < s.length

    if the s at r not in count map, then increment to 1

    when check in while loop s at r in count map is greater than 1
        -decremenat s at r in count map
        -increment l
    check for longest is r - l + 1 greater than variable longest
    increment r

Time: O(n)
Space: O(n)
 */
var lengthOfLongestSubstring = function(s) {
    
    let l = 0
    let longest = 0
    let count = {}

    let r = 0
    while(r < s.length){
        count[s[r]] = (count[s[r]] ?? 0 ) + 1

        while(count[s[r]] > 1){
            count[s[l]]--
            l++
        }
        
        longest = Math.max(longest, r - l + 1)
        r++
    }
    // for(let r = 0; r < s.length; r++){

    //     count[s[r]] = (count[s[r]] ?? 0 ) + 1
    //     while(count[s[r]] > 1){
    //         count[s[l]]--
    //         l++
    //     }
        
    //     longest = Math.max(longest, r - l + 1)
    // }

    return longest
};
