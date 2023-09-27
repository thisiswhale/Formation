/*
'''
Imagine you work at a company like Google, Facebook, OpenAI or any other company with a major online service. Millions to potentially billions of people are counting on your service to be up and running and accessible. It's an interesting thought exercise just to estimate the number of individual HTTP requests made to one of these services in a single day or even per second!

One key component of these systems is to ensure that no user can consume more than their fair share of the system's capacity to respond to these requests. This is accomplished via rate limiting, restricting the rate at which any single user can make requests.

The goal of the rate limiter is to make sure humans who use the system are able to do so, while scripts and other automatic processes might be slowed down or even denied access to reserve enough capacity for real users.

A rate-limiting algorithm (or heuristic) tracks the rate of requests from any single user and decides to allow the request through or deny it.

Work with your fellows to derive, implement, and test multiple rate-limiting algorithms. Discuss the pros and cons of each along the way.

Design these rate limiters in a testable way. We recommend passing in the current time as an argument along with the user id. The time can be a number representing seconds or milliseconds.
 

EXAMPLE(S)
console.log(isRateLimited('spammy', 1)); // false, not limited, allowed through
for (let i = 0; i < 1000; i++) isRateLimited('spammy', 1); // make a lot of calls at the same time
console.log(isRateLimited('spammy', 1)); // true, limiter kicks in, request is denied
console.log(isRateLimited('other', 1)); // false, this other user is allowed through!

// simulate waiting a long time by increasing the current time
console.log(isRateLimited('spammy', 1000000)); // false
 

FUNCTION SIGNATURE
function isRateLimited(userID: string, currentTime: number): boolean
'''
*/

/*
1)
3.3s you can make 1 request
10s you can make 3 requests.
100s 30 requests
1000s 300 requests

CONS: you can actually double the number of requests.
PROS: easy to implement and efficient.

interval 10s
max req 3

"a" 10 // 1 the block is starting at 10 
"a" 12 // 2
"a" 15 // 3
"a" 16 3 -> limited
"a" 17 -> limited
"a" 20 -> ok

there's no current block => set block starting at currentTime
the block is "old" (currentTime - block starting time > 10) => set block starting at currentTime, reset all the counts to 0
increment the counter for the userID
return false if the counter for the userID  < limit
*/


const MAX_REQUESTS = 3;
const INTERVAL = 10;

// track the counts key: userId, value is count in the block
let userCount = {}

let blockStartTime = undefined


// return true if it's blocked
function isRateLimited(userID, currentTime) {
  
  if (blockStartTime === undefined || currentTime - blockStartTime >= INTERVAL) {
    blockStartTime = currentTime
    userCount = {}
  } 
  
  if(userCount[userID] === undefined) {
    userCount[userID] = 1
  } else if (userCount[userID] >= MAX_REQUESTS){
    return true
  } else {
    userCount[userID]++
  }
  
  return false
}

// console.log(isRateLimited('spammy', 1)); // false, not limited, allowed through
// for (let i = 0; i < 1000; i++) isRateLimited('spammy', 1); // make a lot of calls at the same time
// console.log(isRateLimited('spammy', 1)); // true, limiter kicks in, request is denied
// console.log(isRateLimited('other', 1)); // false, this other user is allowed through!

// // simulate waiting a long time by increasing the current time
// console.log(isRateLimited('spammy', 1000000)); // false

console.log(isRateLimited('spammy', 1) === false)
console.log(isRateLimited('spammy', 2) === false)
console.log(isRateLimited('spammy', 3) === false)
console.log(isRateLimited('spammy', 4) === true)

console.log(isRateLimited('spammy', 11) === false)
