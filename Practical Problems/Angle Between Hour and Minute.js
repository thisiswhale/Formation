/*
'''
Given a time in the hh:mm format, return the angle (to the closest whole degree) between the hour and the minute hands.

As a follow-up, find all the times when the angle between both hands is 0.
 

EXAMPLE(S)
calcluateAngle('12:00') returns 0
calcluateAngle('12:30') returns 165
calcluateAngle('12:31') returns 171
calcluateAngle('11:59') returns 6
calcluateAngle('01:59') returns ?
 

FUNCTION SIGNATURE
function calculateAngle(time) {
def calculateAngle(time: str) -> int:
'''

minutePosition: minute * 6
hourPosition: (hour * 30) + (0.5 * minutes)

30 deg/ 60 min/hr 0.5 deg/min

'12:30'
minutePosition = 180
hourPosition = 360 + 15 = 375
abs(180 - 375) = 195

min(diff, 360-diff) min(195, 165) = 165

abs(minutePosition - hourPosition)


*/

// standard time, always correct format, return smaller angle


// split timeString to get hr and min
//minutePosition: minute * 6
//hourPosition: (hour * 30) + (0.5 * minutes)
// get abs difference
// return min(diff, 360 - diff)
function calculateAngle(time){
  let [hr, min] = time.split(':');
  const minPosition = Number(min) * 6;
  const hrPosition = (Number(hr) * 30) + (.5 * Number(min));
  const diff = Math.abs(minPosition - hrPosition);

  return Math.round(Math.min(diff, 360-diff));
}

console.log(calculateAngle("12:00") == 0)
console.log(calculateAngle("12:30") == 165)
console.log(calculateAngle("12:31") == 171)
console.log(calculateAngle("11:59") == 6)
console.log(calculateAngle("01:42") == 159)
console.log(calculateAngle("03:30") == 75)

/*

function calculateOverlappingTimes (){

  loop(through hours)
  loop(through minutes)
    diff = calculateAngle(hour:minutes)
      if (diff === 0) add to list

  return list

}*/

function calculateOverlappingTimes() {

  const ret = [];
  for (let hr = 1; hr <= 12; hr++) {
    for (let min = 0; min <= 59; min++) {
      let timestamp = `${hr > 9 ? hr: '0'+hr}:${min > 9 ? min : '0' + min}`;
      if (calculateAngle(timestamp) <= 2.5) {
        ret.push(timestamp)
      }
    }
  }
  return ret;
}

console.log(calculateOverlappingTimes())
