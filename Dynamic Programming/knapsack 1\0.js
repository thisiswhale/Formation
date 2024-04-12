/*▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given weights and values of items, put these items in a knapsack of capacity c to get the maximum total.

Note:
• You are given two array of integers values and weights which represent values and weights of given items respectively and c which represents knapsack capacity.
• Compute the maximum value subset of values such that sum of the weights of this subset does not exceed c.
• You cannot include a fraction of an item nor include the same item multiple times. 

Example:
• Given: 
 values = [6, 9, 13]
weights = [1, 2, 3]
      c = 5 // returns 22

• Note: 9 + 13 (weight: 2 + 3 <= 5)

-Sum of weights cannot exceed c
-values and weights corresponds respectively
-No repeats

values can contain 0 or negative values
weights can contain 0 or positive values

c = 0, then 1

values = [3,4]
weight = [1,3]
c = 1 => 3
c = 0
c = 
dp[weight] = dp[weight] + dp[c-weight]

Bruteforce: Backtracking method

Find max by recursively find the total values of combinations of weights that up to c

Time: O(values^weight) length of values, and length of weight
Space: O(1)

Dynamic Programming:
                            0
                [6]         [9]             [13]
                6(1)        9(2)           13(3)
             [9]  [13]    [6]  [13]     [6]    [9]  
            15(3)  19(4). 15(3) 22(5)   19(4).  22(5)
        
optimal substructure exists
Subproblems overlapping

Create a 1d array from 0 to c
set dp[0] = 0 
dp[1]


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
function knapsack(limit, items) {
    // Write your code here.
}

// Test Cases
test.startProblem("Knapsack")
test.test(0, knapsack(0, []), 1)
test.test(0, knapsack(0, {1: 6, 2: 9, 3: 13}), 2)
test.test(22, knapsack(5, {1: 6, 2: 9, 3: 13}), 3)
test.test(43, knapsack(10, {1: 6, 2: 10, 3: 12, 4: 15, 5: 1}), 4)
test.endProblem()

*/

function knapsack(limit, items) {

    const seenWeight = new Set()
    let max = -Infinity;
    function helper(sum, totalWeight) {
        if (totalWeight > limit) return

        if (totalWeight <= limit) {
            max = Math.max(max, sum)
        }

        for (let key in items) {
            const idx = Number(key)
            if (!seenWeight.has(idx)) {
                seenWeight.add(idx)
                helper(sum + items[idx], totalWeight + idx)
                seenWeight.delete(idx)
            }

        }

    }

    helper(0, 0)
    return max
}
// console.log(knapsack(0, {}))
// console.log(knapsack(0, { 1: 6, 2: 9, 3: 13 }))
// console.log(knapsack(5, { 1: 6, 2: 9, 3: 13 }))
// console.log(knapsack(10, { 4: 6, 2: 9, 10: 13 }))
// console.log(knapsack(10, { 1: 6, 2: 10, 3: 12, 4: 15, 5: 1 })) //43


function knapsackDP_1D(limit, items) {

    const dp = new Array(limit + 1).fill(0)

    for (let item in items) {
        let weight = Number(item)
        for (let currentLimit = limit; currentLimit > 0; currentLimit--) {
            if (currentLimit >= weight) {
                dp[currentLimit] = Math.max(dp[currentLimit], dp[currentLimit - weight] + items[weight])
            }
        }
    }
    return dp[limit]
}

//FINAL SOLUTION
function knapsackDP_2D(limit, items) {
  // Extract weights and values from the items object
  const weights = Object.keys(items)
  const values = Object.values(items)
  
  // Initialize a 2D array to store computed results for dynamic programming
  const dp = new Array(weights.length).fill().map(() => new Array(limit+1).fill(0))

  // Iterate through the weight/value pairs and initialize the first row of the dynamic programming table
  for (let currLimit = 1; currLimit <= limit; currLimit++){
    dp[0][currLimit] = values[0]
  }

  // Iterate through the remaining weight/value pairs
  for (let weightIdx = 1; weightIdx < weights.length; weightIdx++){
    for (let currLimit = 1; currLimit <= limit; currLimit++) {
      // Extract the value of the current item
      const itemVal = values[weightIdx]

      // Check if the current item's weight exceeds the current limit
      if (weights[weightIdx] > currLimit) {
        // If so, the maximum value remains the same as the value computed for the previous item at the same limit
        dp[weightIdx][currLimit] = dp[weightIdx-1][currLimit]
      } else {
        // Otherwise, update the maximum value by considering whether to include the current item or not
        dp[weightIdx][currLimit] = Math.max(dp[weightIdx-1][currLimit], dp[weightIdx-1][currLimit-weights[weightIdx]]+itemVal)
      }
    }
  }

  // Return the maximum value computed for the last item at the maximum limit
  return dp[weights.length-1][limit]
}


// console.log(knapsackDP(0, {}))
// console.log(knapsackDP(0, { 1: 6, 2: 9, 3: 13 }))
console.log(knapsackDP_2D(5, { 1: 6, 2: 9, 3: 13 })) //Output: 22
console.log(knapsackDP_2D(12, { 2: 6, 3: 9, 4: 13 })) //Output: 28
console.log(knapsackDP_2D(5, { 2: 6, 4: 20, 5: 13 })) //Output: 26
// console.log(knapsackDP(10, { 1: 6, 2: 10, 3: 12, 4: 15, 5: 1 })) //43

//FORMATION SOLUTION 
function knapsack(values, weights, limit) {
  function solveCoordinate(row, col) {
    const itemWeight = weights[row];
    const itemVal = values[row];
    const maxWeight = col;

    //Set the first row to the itemVal
    if (row === 0) {
      if (maxWeight < itemWeight) {
        return 0;
      }

      return itemVal;
    }

    const maxValExcludingItem = dp[row - 1][col];
    const maxValIncludingItem = dp[row - 1][col - itemWeight] + itemVal;

    if (itemWeight > maxWeight) {
      return maxValExcludingItem;
    }

    return Math.max(maxValExcludingItem, maxValIncludingItem);
  }

  const numRows = values.length;
  const numCols = limit + 1;
  const dp = new Array(numRows).fill().map(() => new Array(numCols).fill(0));

  for (let row = 0; row < numRows; row++) {
    // skip col === 0, as this is the base case
    for (let col = 1; col < numCols; col++) {
      dp[row][col] = solveCoordinate(row, col);
    }
  }
  return dp[numRows - 1][numCols - 1];
}

//MY ALTERNATIVE SOLUTION FROM FORMATION 
function knapsack2(values, weights, limit) {

  const numRows = values.length;
  const numCols = limit + 1;
  const dp = new Array(numRows).fill().map(() => new Array(numCols).fill(0));

  for (let row = 0; row < numRows; row++) {
    // skip col === 0, as this is the base case\
      for (let maxWeight = 1; maxWeight < numCols; maxWeight++) {

        const itemWeight = weights[row]; //[1,2,3]
        const itemVal = values[row]; // [6,9,13]

        if (row === 0) {
            dp[row][maxWeight] = itemVal;
            continue
        }
        const maxValExcludingItem = dp[row - 1][maxWeight];
        const maxValIncludingItem = dp[row - 1][maxWeight - itemWeight] + itemVal;
        if (itemWeight > maxWeight) {
            dp[row][maxWeight] = maxValExcludingItem;
        } else {
            dp[row][maxWeight] = Math.max(maxValExcludingItem, maxValIncludingItem);
        }

      }
    
  }
  return dp[numRows - 1][numCols - 1];
}
let weights = [1,2,3]
let values = [6, 9, 13]
let limit = 5
/*
     0. 1. 2. 3. 4. 5
6   [0, 6, 0, 0, 0, 0]
9   [0, 0, 9, 0, 0, 0]
13  [0, 0, 0, 13, 0, 0]

[
  [ 0, 6, 6, 6, 6, 6 ],
  [ 0, 6, 9, 15, 15, 15 ],
  [ 0, 6, 9, 15, 19, 22 ]
]
*/

// console.log(knapsack(values, weights, limit)) //Output: 22
// console.log(knapsack2(values, weights, limit)) //Output: 22
