function insertionSort(arr){

  if(!arr.length) return arr

  for(let i = 1; i < arr.length; i++){

    for(let j = i+1; j > 0; j--){
      if(arr[j-1] > arr[j]){
        [arr[j], arr[j-1]] = [arr[j-1],arr[j]]
      }
    }
  }

  return arr
}
// console.log(insertionSort([9,4,7,2,3,1]))
