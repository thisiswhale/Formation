/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//     const count = {}
//     for(let x of nums){
//         count[x] = (count[x] ?? 0 )+ 1
//     }
//     const result = []
//     const path = []

//     function helper(){

//         if(path.length === nums.length){
//             result.push([...path])
//             return
//         }

//         for(let x of Object.keys(count)){
//             if(count[x] !== 0){
//                 count[x]--
//                 path.push(x)
//                 helper()
//                 count[x]++
//                 path.pop()
//             }
//         }

//     }

//     helper()

//     return result
// };

var permuteUnique = function(nums) {

    const result = []
    const visited = new Set()

    function helper(start){
        if(start === nums.length-1){
            if(!visited.has(`${[...nums]}`)){
                visited.add(`${[...nums]}`)
                result.push([...nums])
            }
            return
        }

        helper(start+1)

        for(let i = start + 1; i < nums.length; i++){
            [nums[i],nums[start]] = [nums[start], nums[i]];
            helper(start + 1);
            [nums[i],nums[start]] = [nums[start], nums[i]];
        }
    }
    helper(0)
    return result
};
