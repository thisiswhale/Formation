
/*
Insertion sort is a stable, in-place sorting algorithm that builds the final sorted list one item at a time. The partially sorted list initially contains only the first element in the list. With each iteration, one element is removed from the remaining unsorted portion of the list and inserted into the sorted portion.

In Insertion Sort, there are two loops, one or both can be implemented with recursion. Start out with a goal of using recursion for one of the loops, and then making both loops recursive can be a stretch goal.

EXAMPLE(S)
inputArr = [3, 8, 5, 4, 1, 9, -2]
insertionSort(inputArr)
inputArr == [-2, 1, 3, 4, 5, 8, 9]

inputArr = [5, 4, 3, 2, 1]
insertionSort(inputArr)
inputArr == [1, 2, 3, 4, 5]

inputArr = [8, 4, 6, 2]
insertionSort(inputArr)
inputArr == [2, 4, 6, 8]

*/

// only whole numbers
// numbers can be negative
// in place (edit the current array)
// cannot be empty

// outer loop to look at each element in the array, starting with the second, i = 1
// inner loop to compare pairs of values going left from i, swapping if left is bigger than right
// [8, 4, 6, 2] i = 1, j =1
// [4, 8, 6, 2] i = 2 , j = 2
// [4, 6, 8, 2] i = 2 , j = 1
// [2, 4, 6, 8] i = 3 , j = 1

function insertionSort(arr, i=1){
  if (i >= arr.length) return arr
  
  function helper(j) {
    if (j < 1) return;

    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    }

    helper(j - 1);
  }

  helper(i)
  return insertionSort(arr, i + 1)
}




console.log(JSON.stringify(insertionSort([8, 4, 6, 2])) == JSON.stringify([2, 4, 6, 8]))
console.log(JSON.stringify(insertionSort([5, 4, 3, 2, 1])) == JSON.stringify([1, 2, 3, 4, 5]))
console.log(JSON.stringify(insertionSort([3, 8, 5, 4, 1, 9, -2])) == JSON.stringify([-2, 1, 3, 4, 5, 8, 9]))
console.log(JSON.stringify(insertionSort([])) == JSON.stringify([]))
console.log(JSON.stringify(insertionSort([1.1, 3, 5.2, 2, 3, 5.5])) == JSON.stringify([1.1, 2, 3, 3, 5.2, 5.5]))
