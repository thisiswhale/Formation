function selectionSort(arr){

  if(!arr.length) return arr

  for(let i = 0; i < arr.length;i++){
    
    let min = i;
    
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }
    
    if(min != i){
      [arr[min], arr[i]] = [arr[i],arr[min]]
    }
  }

  return arr
}


// console.log(selectionSort([9,4,7,2,3,1]))
