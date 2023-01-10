'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
//1
const gameEventsSet = [...new Set(gameEvents.values())];
console.log(gameEventsSet);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

const duration = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${duration / gameEvents.size} minutes.`
);

//4
for (const [min, ev] of gameEvents) {
  let halfTime = min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${halfTime} ${min}: ${ev}`);
}


// Coding Challenge #2

// 1

let gameScored = game?.scored.entries();

for (const [i, el] of gameScored) {
  console.log(`Goal ${i + 1}: ${el}`);
}

//2

//calcAverage(odd);

const odds = Object.values(game?.odds);
console.log(odds);
let average = 0;
for (let odd of odds) average += odd;

let result = average / odds.length;
console.log(result);

//3

for (const [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}



// Coding Challenge #1

//1
//const players1 = game.players[0];
//const players2 = game.players[1];
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
//let team1 = game.odds.team1;
//let draw = game.odds.x;
//let team2 = game.odds.team2;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
//const printGoals = function (allPlayers) {
//  console.log(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
//};

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');
*/
