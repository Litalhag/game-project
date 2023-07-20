// 1.

const filteredNames = (players) => players.map((player) => player.name);
console.log(
  filteredNames([{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }])
);

//2

const filterPlayersBylevel = (playerLevels, minLevel) => {
  return playerLevels.filter((player) => player.level >= minLevel);
};
console.log(
  filterPlayersBylevel(
    [{ level: 1 }, { level: 2 }, { level: 3 }],
    (minLevel = 2)
  )
);

//3

const calcPlayersHealth = (players) =>
  players.reduce((total, player) => total + player.health, 0);
console.log(
  calcPlayersHealth([{ health: 100 }, { health: 120 }, { health: 80 }])
);

//4

const combine = (players) =>
  players.map((player) => `${player.name} - Level ${player.level}`);

console.log(
  combine([
    { name: "Hero", level: 1 },
    { name: "Warrior", level: 2 },
  ])
);

//5

const players = [
  { name: "Hero", health: 100 },
  { name: "Warrior", health: 120 },
];
const updatePlayer = (players, newHealth, playerName) => {
  return players.map((player) => {
    if (player.name === playerName) {
      return { ...player, health: newHealth };
    } else {
      return player;
    }
  });
};
console.log(updatePlayer(players, 150, "Hero"));
//6
const filterPlayers = (players, location) => {
  const filteredPlayers = players.filter((player) => {
    if (player.location === location) {
      return player;
    }
  });
  return filteredPlayers;
};

console.log(
  filterPlayers(
    [{ location: "forest" }, { location: "mountain" }, { location: "castle" }],
    "forest"
  )
);

// 7
const averagePlayerLevel = (players) => {
  const totalLevels = players.reduce(
    (total, player) => total + player.level,
    0
  );
  return totalLevels / players.length;
};

console.log(averagePlayerLevel([{ level: 1 }, { level: 2 }, { level: 3 }]));

// 8

const sortPlayers = (players) => {
  const sortedPlayers = players.sort((a, b) => a.health - b.health);
  return sortedPlayers;
};
console.log(sortPlayers([{ health: 100 }, { health: 120 }, { health: 80 }]));

//9
const inventories = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];

const playerInventories = (inventories) =>
  inventories.map((player) => player.inventory);
console.log(playerInventories(inventories));
