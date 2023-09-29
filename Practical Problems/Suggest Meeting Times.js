/*
'''
Suggest Meeting Times

You've been asked to write a function that finds all available time slots for scheduling a meeting between a group of people. The function should take as input a dictionary of schedules, where each key represents a person and the value is a list of busy intervals during the workday. The busy intervals are represented as tuples of start and end times. For example, the following schedule shows that Alice is busy from 8am to 10am and from 1pm to 2pm, while Bob is busy from 9am to 11am and from 2pm to 3pm:

schedules = {
    'Alice': [(8, 10), (13, 14)],
    'Bob': [(9, 11), (14, 15)],
}

The function should also take as input the duration of the meeting in hours, and should return a list of all available time slots during the workday where the meeting can be scheduled. A workday begins at 8am and ends at 5pm. A time slot is represented as a single integer that represents the start time of the slot in hours past midnight.

Your task is to implement the find_available_slots function that takes these inputs and returns the list of available time slots. Be sure to consider edge cases, such as when there are no busy intervals, when the meeting duration is longer than the workday, and when multiple start times are possible within a single free interval.
 

EXAMPLE(S)
schedules = {
    'Alice': [(8, 10), (13, 14)],
    'Bob': [(9, 11), (14, 15)],
}
duration: 2
output: [11,15]

For example, if the meeting duration is 2 hours and the workday is from 8am to 5pm, the available time slots for the above schedule would be [11, 15], since those are the only times where both Alice and Bob are available for a meeting of 2 hours.
 

FUNCTION SIGNATURE
find_available_slots(schedules: dict, duration: int) -> list:
'''
input: object schedules, int duration
output: array

1. when there are no busy intervals
input:
schedules = {
      'Alice': [],
    'Bob': [],
}
duration = 1 hours
output: [8,9,10...16]

2. when the meeting duration is longer than the workday
input:
schedules = {
      'Alice': [8,15],
    'Bob': [8,15],
}
duration: 4
output: []

3. when multiple start times are possible within a single free 
interval bothFree//[[10,14]]
output: 10, 11, 12,13
time = 1 hour

input:
schedules = {
    'Alice': [(8, 10), (13, 14)], // free [[10,13], [14,17]]
    'Bob': [(9, 11), (14, 15)], // free [[8,9], [12,14], [15,17]]
}
duration: 1 hour

schedules = {
    'Alice': [[8, 10], [13, 14]],
    'Bob': [[9, 11], [14, 15]],
}

1. combine
combined = [(8, 10), (13, 14), (9, 11), (14, 15)]
for( schedule of schedules)
  arr.concat(schedule)
2. sort
[[8,10], [9,11], [13,14],[14,15]]
arr.sort( (a,b) => a[0] > b[0])

3. merge
[[8,11], [13,15]]

4. inverse
[[11,13], [15,17]]
5. result
[11,15]
duration: 2
output: [11,15]


[11,15] --> 
{
  8:['Alice']
  9:['Alice', 'Bob']
  10:[],
  11: [],
  
}


*/
let schedules = {
  'Alice': [[8, 10], [13, 14]],
  'Bob': [[9, 11], [14, 15]],
}

console.log(findAvailableSlots(schedules, 2))

function findAvailableSlots(schedules, duration) {
  if (duration > 8) return [];

  const intervals = [[8, 8]];//Set the start and end times of the workday

  // Create a list of all busy intervals from all schedules
  for (const key in schedules) {
    for (const interval of schedules[key]) {
      intervals.push(interval);
    }
  }

  intervals.push([17, 17]);//Set the start and end times of the workday
  // sort intervals
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals)

  let mergeIntervals = [];/** Merging part */

  let i = 1;
  let prevInterval = intervals[0];
  let pevStart = intervals[0][0]

  while (i < intervals.length) {

    let nextInterval = intervals[i];

    if (nextInterval[0] <= prevInterval[1]) {
      prevInterval = nextInterval;
      i++;

    } else {
      mergeIntervals.push([pevStart, prevInterval[1]]);

      prevInterval = nextInterval;
      pevStart = nextInterval[0];
      i++
    }
  }

  mergeIntervals.push([pevStart, prevInterval[1]]);
  const availableSlots = [];
// [ [ 8, 11 ], [ 13, 15 ], [ 17, 17 ] ]
  for (let i = 1; i < mergeIntervals.length; i++) {
// 13 (start) - 11 (end)
    if (mergeIntervals[i][0] - mergeIntervals[i - 1][1] >= duration) {
      availableSlots.push(mergeIntervals[i - 1][1]);
    }
  }

  return availableSlots;
}
