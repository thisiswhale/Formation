/*
'''
❓ PROMPT
You're exhausted after a long day and heading to bed, but you still have to set the alarm clock on your phone. You already have one you set the day before, so all you have to do is update it.

To set your alarm, the hours and minutes are set independently, each by scrolling upwards or downwards. One shift changes an hour or minute value by one, up or down. The values are organized cyclically, which means that dragging 0 minutes downwards turns it into 59, and dragging 59 upwards turns it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

Given the time of the previous alarm and the new desired time, what is the minimum number of scroll moves to set the new time?

Example(s)
For setTime = "07:30" and timeToSet = "08:00", the output should be
minScrollToSet(oldTime, newTime) = 31.

Shifting hours upwards once will change the alarm to "08:30", and shifting minutes 30 times downwards will change it to "08:00".

minScrollToSet("7:30", "8:00") === 31 // Shift hour by 1, shift minutes by 30 thus 31
minScrollToSet("7:00", "6:31") === 30 // shift hour by 1, shift minutes by 29 thus 30
minScrollToSet("7:00", "6:25") === 26 // shift hour by 1, shift minutes by 25 this 26
 

🔎 EXPLORE
List your assumptions & discoveries:
Hours: 0-23
Minutes: 00-59, 
Will moving 59 up also shift the hour by 1 ? Assume no


Insightful & revealing test cases:

Input two string values
output Int value by amt of scroll moves
Edge case when inputs are "7:61", "30:00", return 0?
 

🧠 BRAINSTORM
What approaches could work?
split str values between ":"
Calculate absolute difference for the Hour and Minutes moves
Add differences of Hour and Minutes moves and return value

Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function minScrollToSet(oldTime, newTime) {
def minScrollToSet(oldTime: str, newTime: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// minScrollToSet("7:30", "8:00") === 31 // Shift hour by 1, shift minutes by 30 thus 31
// minScrollToSet("7:00", "6:31") === 30 // shift hour by 1, shift minutes by 29 thus 30
// minScrollToSet("7:00", "6:25") === 26 // shift hour by 1, shift minutes by 25 this 26
 
function minScrollToSet(oldTime, newTime) {

  const [oldTimeHour, oldTimeMinutes] = oldTime.split(":").map( x => parseInt(x))
  const [newTimeHour, newTimeMinutes] = newTime.split(":").map( x => parseInt(x))

  const hourDiff = Math.abs(oldTimeHour - newTimeHour)
  const hourMoves = Math.min(hourDiff, 24 - hourDiff)

  const minutesDiff = Math.abs(oldTimeMinutes - newTimeMinutes)
  const minutesMoves = Math.min(minutesDiff, 60 - minutesDiff)

  return hourMoves + minutesMoves
}

// console.log(minScrollToSet("7:31", "7:04"))
// console.log(minScrollToSet("2:00", "23:00"))
// console.log(minScrollToSet("7:00", "6:25"))
// console.log(60-31)
