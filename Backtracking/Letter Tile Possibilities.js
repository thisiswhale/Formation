/**
 * @param {string} tiles
 * @return {number}

 input: str
 output: int

 Tile length is at least 1
 Only uppercase letters
 No repeating sequences

Approach #1
Backtrack by counting up n number of tiles

-Create an object charFreq and map it to count up the # of characters in tiles
-Create a backtrack recursive function
    -base case: if object.values of charFreq is 0, return 0

    -set variable total to 0
    -for loop of Object.keys of charFreq
        - continue if charFreq[i] <= 0
        - decrement charFreq[i]
        - set total += backtracking
        - increment charFreq[i]
    -return total


 */

var numTilePossibilities = function(tiles) {
    // let charFreq = {}
    // for(let char of tiles){
    //     charFreq[char] = (charFreq[char] ?? 0) + 1
    // }
    // function backtrack(){

    //     if(Object.values(charFreq).length <= 0) return 0

    //     let total = 0;
    //     for(let tile of Object.keys(charFreq)){
    //         if(charFreq[tile] <= 0) continue;
            
    //         charFreq[tile] -= 1;
    //         total += backtrack() +1
    //         charFreq[tile] += 1;

    //     }
        
    //     return total
    // }
    
    // return backtrack()
    
    const result = new Set()
    const letters = []
    const used = new Set

    function helper(i){
        console.log(i, used)
        if(used.size === tiles.length){
            console.log(i, letters)
            if(letters.length > 0){
                result.add(letters.join(''))
            }
            return
        }

        for(let i = 0; i < tiles.length; i++){
            if(!used.has(i)){
                used.add(i)

                helper(i+1)
                letters.push(tiles[i])

                helper(i+1)
                letters.pop()

                used.delete(i)
                
            }
        }

    }

    helper(0)

    return result.size
};
