// 1
const enemyArray=[
    {
        id:12,
        name: 'enemy name',
        health:100
    },
    {
        id:14,
        name: 'haim',
        health:200
    }
];
function processEnemies(enemyArray,callback){
    if (!Array.isArray(enemyArray)) {
        throw new Error("Expected an array of enemies");
    }
    for (let enemyObj of enemyArray){
        if (!enemyObj.name||!enemyObj.health){
            throw new Error(`enemy with ID ${enemyObj.id} is not in the right structure`);
        }
    }
    const newEnemies = JSON.parse(JSON.stringify(enemyArray));
    newEnemies.forEach(callback);
    return newEnemies;
};
function newHealth(obj){
    obj.health+=10;
}
console.log(processEnemies(enemyArray,newHealth));

// 2
const questArray=[
    {
        id: 5,
        name: 'quest name',
        experience: 100
    },
    {
        id: 6,
        name: 'quest name 2',
        experience: 200
    }
];
function processQuests (questArr,callback){
    if (!Array.isArray(questArr)) {
        throw new Error("Expected an array of quests");
    }
    for (let questObj of questArr){
        if (!questObj.name||!questObj.experience){
            throw new Error(`Quest with the ID ${questObj.id} is not in the right structure`);
        }
    }
    const newQuests = JSON.parse(JSON.stringify(questArr));
    newQuests.forEach(callback);
    return newQuests;
};
function newExperience(obj){
    obj.experience+=10;
}
console.log(processQuests(questArray,newExperience));

// 3
const playersArray=[
    {
        id: '45e3e',
        name: 'players name',
        health: 100,
        level:1,
        location: 'forest',
        inventory: ['sword','health potion']
    }
];
function processPlayers (playerArr,callback){
    if (!Array.isArray(playerArr)) {
        throw new Error("Expected an array of players");
    }
    for (let playerObj of playerArr){
        if (!playerObj.name||!playerObj.health||!playerObj.level||!playerObj.location||!playerObj.inventory){
            throw new Error(`player with ID ${playerObj.id} is not in the right structure`);
        }
    }
    const newPlayers = JSON.parse(JSON.stringify(playerArr));
    newPlayers.forEach(callback);
    return newPlayers;
};

console.log(processPlayers(playersArray,newHealth));