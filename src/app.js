/**
 * This object represents the game world, containing all players, enemies, items and NPCs
 */

const gameWorld = {
  players: [
    {
      name: "Hero",
      health: 100,
      location: "forest",
      inventory: ["sword", "health potion"],
    },
  ],
  enemies: [
    {
      name: "enemy",
      health: 80,
      location: "castle",
      inventory: ["axe", "health potion"],
    },
  ],
  items: [
    {
      name: "health potion",
      effect: "heals hp",
    },
  ],
  npcs: [],

  /**
   * Add a new player to the game world
   * @param {Object} player - The player object
   */
  addPlayer: function (player) {},

  /**
   * Remove a player from the game world
   * @param {Object} player - The player object
   */
  removePlayer: function (player) {},

  /**
   * Add a new enemy to the game world
   * @param {Object} enemy - The enemy object
   */
  addEnemy: function (enemy) {
    this.enemies.push(enemy);
  },

  /**
   * Remove an enemy from the game world
   * @param {Object} enemy - The enemy object
   */
  removeEnemy: function (enemy) {
    this.enemies = this.enemies.filter(
      (enemyObj) => enemyObj.name !== enemy.name
    );
  },

  /**
   * Add a new item to the game world
   * @param {Object} item - The item object
   */
  addItem: function (item) {},

  /**
   * Remove an item from the game world
   * @param {Object} item - The item object
   */
  removeItem: function (item) {},

  /**
   * Add a new NPC to the game world
   * @param {Object} npc - The NPC object
   */
  addNPC: function (npc) {},

  /**
   * Remove an NPC from the game world
   * @param {Object} npc - The NPC object
   */
  removeNPC: function (npc) {},

  /**
   * Check for encounters between a player and enemies
   * @param {Object} player - The player object
   */
  checkForEncounters: function (player) {},

  /**
   * Simulate combat between a player and an enemy
   * @param {Object} player - The player object
   * @param {Object} enemy - The enemy object
   */
  combat: function (player, enemy) {},

  /**
   * Interact with an NPC in the game world
   * @param {Object} player - The player object
   * @param {Object} npc - The NPC object
   */
  talkToNPC: function (player, npc) {},

  /**
   * Create a new game entity
   * @param {string} name - The name of the entity
   * @param {number} health - The health of the entity
   * @param {Object} position - The position of the entity
   * @param {Array} inventory - The inventory of the entity
   * @returns {Object} The new entity
   */
  createEntity: function (name, health, position, inventory = []) {},

  /**
   * Create a new item
   * @param {string} name - The name of the item
   * @param {Object} effect - The effect of the item
   * @returns {Object} The new item
   */
  createItem: function (name, effect) {},

  /**
   * Create a new ability
   * @param {string} name - The name of the ability
   * @param {Object} effect - The effect of the ability
   * @returns {Object} The new ability
   */
  createAbility: function (name, effect) {},

  /**
   * Create a new player
   * @param {string} name - The name of the player
   * @param {number} health - The health of the player
   * @param {Object} position - The position of the player
   * @param {Array} inventory - The inventory of the player
   * @param {Array} abilities - The abilities of the player
   * @param {number} level - The level of the player
   * @param {number} xp - The xp of the player
   * @param {string} playerClass - The class of the player
   * @returns {Object} The new player
   */
  createPlayer: function (
    name,
    health,
    position,
    inventory,
    abilities,
    level,
    xp,
    playerClass
  ) {},

  /**
   * Create a new enemy
   * @param {string} name - The name of the enemy
   * @param {number} health - The health of the enemy
   * @param {Object} position - The position of the enemy
   * @param {Array} inventory - The inventory of the enemy
   * @param {Array} abilities - The abilities of the enemy
   * @returns {Object} The new enemy
   */
  createEnemy: function (name, health, position, inventory, abilities) {},

  /**
   * Create a new NPC
   * @param {string} name - The name of the NPC
   * @param {number} health - The health of the NPC
   * @param {Object} position - The position of the NPC
   * @param {Array} inventory - The inventory of the NPC
   * @param {string} dialog - The dialog of the NPC
   * @returns {Object} The new NPC
   */
  createNPC: function (name, health, position, inventory, dialog) {},
};

gameWorld.addEnemy({
  name: "bob",
  health: 120,
  location: "forest",
  inventory: ["short sword", "health potion"],
});
gameWorld.addEnemy({
  name: "moshe",
  health: 140,
  location: "mountain",
  inventory: ["broadsword", "health potion"],
});
console.log(gameWorld.enemies);

gameWorld.removeEnemy({
  name: "bob",
});
gameWorld.removeEnemy({
  name: "moshe",
});
console.log(gameWorld.enemies);
