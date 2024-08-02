/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}

asteroids at least 2
values cannot be 0

[-1,4] -> [-1,4]
[-1,-4] -> [-1,-4]
[5,-4,7] -> [5,7]
[5,-9,7] -> [5,7]

create new array
traverse array from end
    only push first element to result

    if asteroid[i] and result[i-1] are in collision

    else
        push asteroid[i] into result
        pop element and compare next end element are in collision, popElement < endElement
        if Math.abs(endElement) === Math.abs(popElement), pop endElement
        if(Math.abs(endElement) < Math.abs(popElement)),  pop endElement
    else
        push element into result

 */
var asteroidCollision = function(asteroids) {
    
    const queue = asteroids

    const result = []

    for(let i = 0; i < asteroids.length; i++){
        const last = result[result.length-1]
        const curr = asteroids[i]

        if(!result.length || last < 0 || curr > 0){
        // if(!result.length || last < curr){
            //asteroid is first, or curr and last are NOT in collision
            result.push(curr)
        } else if ( -curr === last){
            //asteroid is in collision and same weight
            result.pop()
        } else if (-curr > last){
            result.pop()
            i--
        }
    }
    return result
};

