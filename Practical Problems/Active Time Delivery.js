/*
'''
You are given a series of inputs representing delivery events. Each event is represented by an array of length 3:

[1, 1591846068, 0]

- The first element is an order number
- The second is the timestamp
- The third is either 0 (representing a pickup) or 1 (representing a dropoff)

Given a series of events, return the total active time, calculated by the period of time where they have an active delivery (if they've dropped everything off, they are not considered active until they pick something up again).

EXAMPLE(S)
Input:
[1, 1591846068, 0]
[2, 1591846070, 0]
[2, 1591846071, 1]
[1, 1591846080, 1]
[3, 1591846090, 0]
[3, 1591846102, 1]

Output: 24
 
start of activity: 1591846068
end of activity: 1591846080
difference: 80-68=12

start of activity: 1591846090
end of activity: 1591846102
difference: 102-90=12

total: 12+12=24

FUNCTION SIGNATURE
function activeDeliveryTime(events) {
def activeDeliveryTime(events: [int]) -> int:
'''

start = null
counter = 0
totalTime = 0
loop through thru the events 

  if action is 0 (picking up): 
    if counter is 0: 
      start = timestamp 
    counter++
  else 
    counter--

    if counter is 0: 
      totalTime += timestamp - start 
      
return totalTime 
*/


function activeDeliveryTime(events) {
  if (events == null) return 0; 

  if(!events.length === 0) return 0

  let start = null; 
  let activeOrders = 0;
  let totalTime = 0;

  for (const [_orderNum, timestamp, action] of events) {
    if (action === 0) {
      if (activeOrders === 0) {
        start = timestamp;
      }
      activeOrders += 1;
    } else {
      activeOrders -= 1;

      if(activeOrders === 0 ) {
        totalTime += timestamp - start;
      }
    }
  }
  return totalTime;
}

console.log(activeDeliveryTime([
  [1, 1591846068, 0],
  [2, 1591846070, 0],
  [2, 1591846071, 1],
  [1, 1591846080, 1],
  [3, 1591846090, 0],
  [3, 1591846102, 1],
]));  // 24
console.log(activeDeliveryTime([
  [1, 1591846068, 0],
  [2, 1591846070, 0],
  [3, 1591846090, 0],
  [2, 1591846071, 1],
  [1, 1591846080, 1],
  [3, 1591846102, 1],
]));  //34

console.log(activeDeliveryTime([]));  // 0
console.log(activeDeliveryTime(null));  // 0

/*
function activeDeliveryTime(events) {
  const PICKUP = 0, DROPOFF = 1;
  let activeCount = 0;
  let totalTime = 0;
  let firstActiveTime = undefined;

  for (const [id, time, action] of events) {
    if (action === PICKUP) {
      if (activeCount === 0) {
        firstActiveTime = time;
      }
      activeCount++;
    } else if (action === DROPOFF) {
      // must be a drop off
      activeCount--;
      if (activeCount === 0) {
        totalTime += time - firstActiveTime;
        firstActiveTime = undefined;
      }

    }
  }

  return totalTime;
}
*/
