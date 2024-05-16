/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {

    let goal = nums.length-1
    for(let i = nums.length-1; 0 <= i; i--){
        //i + nums[i], at i, you can reach up to nums[i]
        //thus if i + nums[i] is over goal, then update the new goal since its reachable.
        if(i + nums[i] >= goal){
            goal = i
        }

    }
    return goal === 0
};

var canJump = function(nums) {
    const dp = new Array(nums.length).fill(false); // Initialize dynamic programming array
    
    // Base case: Set dp[last index] to true
    dp[nums.length - 1] = true;
    
    // Traverse the array backwards
    for (let i = nums.length - 2; i >= 0; i--) {
        // Calculate the maximum jump length from index i
        const maxJump = Math.min(i + nums[i], nums.length - 1);
        
        // Check if it's possible to reach the last index from index i
        for (let j = i + 1; j <= maxJump; j++) {
            if (dp[j]) {
                dp[i] = true;
                break; // Exit the loop once a path to the last index is found
            }
        }
    }
    
    return dp[0]; // Return whether it's possible to reach the last index from the first index
};


// var canJump = function(nums) {
    
//     function helper(currIdx){
//         if(currIdx === nums.length-1) return true

//         // const maxJump = nums[currIdx]
//         //WHY nums.length-1
//         const maxJump = Math.min(currIdx + nums[currIdx], nums.length - 1);

//         for(let nextPosition = currIdx+1; nextPosition <= maxJump; nextPosition++){
//             if(helper(nextPosition)) {
//                 return true
//             }
//         }
//         return false
//     }


//     return helper(0)
// };
