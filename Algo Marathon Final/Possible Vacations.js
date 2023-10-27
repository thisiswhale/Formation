/*
'''
Possible Vacations

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.

The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

{
  'Phoenix': [], // dead-end
  'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the number of flights needed for each destination. If a destination is not reachable, do not include it in the output.
 

EXAMPLE(S)
possibleVacations(
  {'Phoenix': ['Seattle'], 'Seattle':[]},
  'Phoenix', 
  ['Seattle']
)
returns {'Seattle': 1}

Want to go to seattle, pheonix has seattle listed, so we add it to the object, We add it with a 1. 

possibleVacations(
  {'Phoenix': [], 'Seattle':[]},
  'Phoenix',
  ['Seattle']
)
returns {}

possibleVacations(
  {'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix','Seattle']},
  'Phoenix',
  ['Seattle', 'Boston']
)
returns {'Seattle': 1, 'Boston': 2}
 
currentCity variable, set it to home city, and see if we find the matching city, then we can set the current city to the next one. 

flight table is empty should return {}
there's multiple ways to get to the same city, you want to minimize the number of stops. 

Sounds like Backtracking. 


FUNCTION SIGNATURE
function possibleVacations(flightTable, homeCity, destinationList) {
def possibleVacations(flightTable: dict, homeCity: str, destinationList: list[str]) -> dict:
'''
*/


/*

possibleVacations(
  {'Phoenix': ['Seattle','Boston'], 
   'Seattle':['Boston', 'P  '], 
  'Boston': ['Phoenix','Seattle']
  },
  'Los Angeles',
  ['Seattle', 'Boston']
)
returns {'Seattle': 1, 'Boston': 1}

function possibleVacations(flightTable, homeCity, destinationList){

  let results = {}
  let visted = new Set()

  function backtrackingVacations(currentCity, currentDestination, numOfCurrentStop){

    if(city has been seen){
      return 
    }

    if (destination){
      {destination : # of stops }
    }
    // flightTable[currentCity] loop = [city1, city 2]
    for 

  }

  // destinationList Loop
  for loop
  backtrackingVacations(homeCity, )
}


*/
// possibleVacations(
//   {'Phoenix': ['Seattle'], 'Seattle':[]},
//   'Phoenix', 
//   ['Seattle']
// )
// returns {'Seattle': 1}

function possibleVacations(flightTable, homeCity, destinationList){

  let results = {}

  function backtrackingVacations(currentCity, currentDestination, numOfCurrentStop, visited){
    console.log({currentCity, currentDestination, numOfCurrentStop})
    if(visited.has(currentCity)){
      console.log("-----------END OF TRACK----------")
      return 
    }

    visited.add(currentCity)
    
    if (currentCity == currentDestination){
      results[currentDestination] = numOfCurrentStop 
      console.log(results)
      console.log("-----------END OF TRACK----------")
      return 
    }
    
    // flightTable[currentCity] loop = [city1, city 2]
    for (let connectingCity of flightTable[currentCity]){
      console.log({connectingCity})
      backtrackingVacations(connectingCity, currentDestination, numOfCurrentStop + 1, visited)
    }

  }

  // destinationList Loo
  for(let destinationCity of destinationList){
    console.log(destinationCity)
    backtrackingVacations(homeCity, destinationCity, 0, new Set())
  }
  console.log(results)
  return results
}


// console.log(JSON.stringify(possibleVacations({'Phoenix': [], 'Seattle': []}, 'Phoenix', ['Seattle'])) == '{}')
console.log(JSON.stringify(possibleVacations(
  {'Phoenix': ['Seattle', 'Boston'], 
  'Seattle': ['Phoenix', 'Boston'], 
  'Boston': ['Phoenix', 'Seattle']}, 
  'Phoenix', 
  ['Seattle', 'Boston'])) == '{"Seattle":1,"Boston":1}')

  function possibleVacations(flightTable, homeCity, destinationList) {
    const desired = new Set(destinationList);
    const seen = new Set([homeCity]);
    const results = {};
    const queue = [[homeCity, 0]]; // initialized with a tuple of the home city at distance zero
  
    while (queue.length > 0) {
      const [departure, distance] = queue.shift(); // dequeue
      seen.add(departure);
  
      const flights = flightTable[departure];
      for (let i = 0; i < flights.length; i++) {
        const arrival = flights[i];
        if (seen.has(arrival)) {
          continue;
        } else {
          queue.push([arrival, distance + 1]);
        }
  
        if (desired.has(arrival) && !results[arrival]) {
          results[arrival] = distance + 1;
        }
  
      }
    }
    return results;
  }
