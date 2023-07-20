//Ex-1
const getPlayerNames = (players) => players.map((player) => player.name);

console.log(
  getPlayerNames([{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }])
);

//EX-2
const filterPlayersByMinLevel = (players, minLevel) =>
  players.filter((player) => player.level >= minLevel);
const players = [{ level: 1 }, { level: 2 }, { level: 3 }];

const minLevel = 2;

const filteredPlayers = filterPlayersByMinLevel(players, minLevel);
console.log(filteredPlayers);

//EX-3
const getTotalHealth = (players) =>
  players.reduce((total, player) => total + player.health, 0);

console.log(getTotalHealth([{ health: 100 }, { health: 120 }, { health: 80 }]));

//Ex-4
const getPlayerDetails = (players) =>
  players.map((player) => `${player.name} - Level ${player.level}`);

console.log(
  getPlayerDetails([
    { name: "Hero", level: 1 },
    { name: "Warrior", level: 2 },
  ])
);

//Ex-5

const updatePlayerHealth = (players, newHealth, playerName) => {
  return players.map((player) => {
    if (player.name === playerName) {
      return {
        ...player,
        health: newHealth,
      };
    } else {
      return player;
    }
  });
};
console.log(
  updatePlayerHealth(
    [
      { name: "Hero", health: 100 },
      { name: "Warrior", health: 120 },
    ],
    150,
    "Hero"
  )
);

//EX-6

const filterPlayersByLocation = (players, location) =>
  players.filter((player) => player.location === location);

console.log(
  filterPlayersByLocation(
    [{ location: "forest" }, { location: "mountain" }, { location: "castle" }],
    "forest"
  )
);
//Ex-7
const getAverageLevel = (players) => {
  const totalLevels = players.reduce((sum, player) => sum + player.level, 0);
  return totalLevels / players.length;
};
console.log(getAverageLevel([{ level: 1 }, { level: 2 }, { level: 3 }]));

//8
const sortByHealthAscending = (players) =>
  players.sort((a, b) => a.health - b.health);
console.log(
  sortByHealthAscending([{ health: 100 }, { health: 120 }, { health: 80 }])
);

//Ex-9
const getPlayerInventories = (players) =>
  players.map((player) => player.inventory);

console.log(
  getPlayerInventories([
    { inventory: ["sword", "health potion"] },
    { inventory: ["axe", "shield"] },
  ])
);
