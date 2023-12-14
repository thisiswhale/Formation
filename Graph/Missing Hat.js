
/*
'''
❓ PROMPT
Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

As a follow-up, how would you handle it when there's circular knowledge? For example, Jono's suggestion is to ask Angus, and Angus' suggestion is to ask Jono. These 'cycles' aren't restricted to pairs of dogs, they can be of any size.

Example(s)
dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
findHat(dogs, 'Loki') == 'Ivy'
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function findHat(dogs, bestFriend) {
def findHat(dogs: dict, bestFriend: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function findHat(dogs, bestFriend) {
  
  const stack = [bestFriend];
  const visited = new Set();

  while(stack.length){
    const currDog = stack.shift()

    if(visited.has(currDog)) continue;
    visited.add(currDog)

    for(let dog of dogs[currDog]){
      if(dog === 'HAT') return currDog
      stack.push(dog)
    }
  }
  
  return "Couldn't find the hat"
}

let dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}

console.log(findHat(dogs, 'Loki') == "Ivy")
console.log(findHat(dogs, 'Snoopy') == "Ivy")
console.log(findHat(dogs, 'Ivy') == "Ivy")
console.log(findHat(dogs, 'Fido') == "Couldn't find the hat")

dogs = {
  'Ariel': ['Bork'],
  'Bork': ['Cassie'],
  'Cassie': ['Drex'],
  'Drex': ['Zoe'],
  'Zoe': ["HAT"],
}

console.log(findHat(dogs, "Ariel") == "Zoe")
console.log(findHat(dogs, "Bork") == "Zoe")
console.log(findHat(dogs, "Cassie") == "Zoe")
console.log(findHat(dogs, "Drex") == "Zoe")
console.log(findHat(dogs, "Zoe") == "Zoe")

dogs = {
  'Zoe': ['Jono'],
  'Jono': ['Angus'], // dead-end, circular knowledge
  'Angus': ['Jono'], // dead-end, circular knowledge
  'Paavo': ['Zoe', 'Oliver'],
  'Oliver': ["HAT"],
}

console.log(findHat(dogs, "Paavo") == "Oliver")
console.log(findHat(dogs, "Oliver") == "Oliver")
console.log(findHat(dogs, "Zoe") == "Couldn't find the hat")
console.log(findHat(dogs, "Angus") == "Couldn't find the hat")
console.log(findHat(dogs, "Jono") == "Couldn't find the hat")

dogs = {
  'Zoe': ['Jono'], // circular knowledge
  'Jono': ['Angus'], // circular knowledge
  'Angus': ['Paavo'], // circular knowledge
  'Paavo': ['Zoe', 'Oliver', 'Angus'], // can lead to circular knowledge
  'Oliver': ["HAT"],
}

console.log(findHat(dogs, "Paavo") == "Oliver")
console.log(findHat(dogs, "Oliver") == "Oliver")
console.log(findHat(dogs, "Zoe") == "Oliver")
console.log(findHat(dogs, "Angus") == "Oliver")
console.log(findHat(dogs, "Jono") == "Oliver")
