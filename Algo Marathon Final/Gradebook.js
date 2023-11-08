/*
'''
Build a Gradebook.
 

EXAMPLE(S)
const gradebook = new Gradebook();

gradebook.recordGrade(90).recordGrade(100);

console.log(gradebook.min(), 90);
console.log(gradebook.max(), 100);
console.log(gradebook.average(), 95);
console.log(gradebook.mode(), 100);

console.log();
gradebook.recordGrade(90);
console.log(gradebook.min(), 90);
console.log(gradebook.max(), 100);
console.log(gradebook.average(), 93.3333333);
console.log(gradebook.mode(), 90);

 

FUNCTION SIGNATURE
Fill out the methods of the following class:

class Gradebook {  
  // Add any properties and constructor that you need here.  
  // record : new Array()

  recordGrade(grade) {
    record.push(grade)
  }

  min() {  
    return Math.min([record])
  }  

  max() {  
    return Math.max([record])

  }  

  average() {  
    return sum of record divide by length of record
  }

  mode() {  
    [2,1,2,1]
    map object
  }  
}  
'''
*/

class Gradebook {  

  constructor(){
    this.record = new Array()
  }

  recordGrade(grade) {
    // this.record.push(grade)
    this.record[index] = grade
    index++
    return
  }

  min() {  
    if(!this.record.length) return 'No values added to gradebook'
    return Math.min(...this.record)
  }  

  max() {  
    if(!this.record.length) return 'No values added to gradebook'
    return Math.max(...this.record)
  }  

  average() {  
    if(!this.record.length) return 'No values added to gradebook'

    const sum = this.record.reduce((a,b) => a + b)
    const length = this.record.length
    return sum / length
  }

  mode() {  
    if(!this.record.length) return 'No values added to gradebook'

    const map = {};
    const arr = this.record;
    for(let i of arr){
      map[i] = (map[i] ?? 0 )+ 1
    }
    
    let freq = 0
    let commonGrade = arr[0]

    for(let i in map){
      if(map[i] >= freq){
        freq = map[i]
        commonGrade = i
      }
    }

    return commonGrade
  }  

}


const gradebook = new Gradebook();
gradebook.recordGrade(90).recordGrade(100);

console.log(gradebook.min(), 90);
console.log(gradebook.max(), 100);
console.log(gradebook.average(), 95);
console.log(gradebook.mode(), 100);

console.log();
gradebook.recordGrade(90);
console.log(gradebook.min(), 90);
console.log(gradebook.max(), 100);
console.log(gradebook.average(), 93.3333333);
console.log(gradebook.mode(), 90);

class Gradebook {  
  constructor() {
    this._min = undefined;
    this._max = undefined;
    this._total = 0;
    this._count = 0;
    this._counts = new Map();
    this._mode = undefined;
    this._modeCount = 0;
  }

  recordGrade(grade) {
    this._min = Math.min(grade, this._min || Number.MAX_VALUE);
    this._max = Math.max(grade, this._max || Number.MIN_VALUE);
    this._total += grade;
    this._count++;

    // The statistical mode is the most frequent value. Count the frequences
    // of each grade and after each increment in the map, check to see if this
    // is a new max.
    this._counts.set(grade, (this._counts.get(grade) || 0) + 1);
    const newCount = this._counts.get(grade);
    if (newCount >= this._modeCount) {
      this._mode = grade;
      this._modeCount = newCount;
    }
    return this;
  }

  min() {
    return this._min;
  }  

  max() {
    return this._max;
  }

  average() {
    return this._total / this._count;
  }

  mode() {
    return this._mode;
  }
}

//O(1) -> runtime complexity
//Space -> O(1) for min, max, and average and O(n) for mode.
//Where n is the number of grades recorded.
