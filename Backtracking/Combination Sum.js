/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 //Array is sorted?
 //negative values?
var combinationSum = function(candidates, target) {
    const result = []
    const path = []
    function count(total, i){

        if(total > target || i >= candidates.length) return

        if(total === target){
            result.push([...path])
            return
        }

        // path.push(candidates[i])
        // count(i, total+candidates[i])
        // path.pop()
        // count(i+1, total)

        // console.log(path)

        // OR
        for(let j = i; j < candidates.length; j++){
            path.push(candidates[j])
            count(total+candidates[j],j)
            path.pop()
        }

        //NOTE: THIS ONE IS WRONG
        // for(let j of candidates){
        //     path.push(j)
        //     count(total + j)
        //     path.pop()
        // }
    }
    count(0,0)
    return result
};

/*
WRONG, when logging 'path'

for(let j of candidates){
    path.push(j)
    count(total + j)
    path.pop()
}
[]
[ 2 ]
[ 2, 2 ]
[ 2, 2, 2 ]
[ 2, 3 ]
[ 3 ]
[ 3, 2 ]
[ 3, 3 ]
[ 6 ]


VS

RIGHT when logging 'path'

for(let j = i; j < candidates.length; j++){
    path.push(candidates[j])
    count(total+candidates[j],j)
    path.pop()
}
[]
[ 2 ]
[ 2, 2 ]
[ 2, 2, 2 ]
[ 2, 3 ]
[ 3 ]
[ 3, 3 ]
[ 6 ]
*/
