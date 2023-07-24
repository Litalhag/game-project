// 1
const quests = [
    { name: "Quest 1", experience: 100 },
    { name: "Quest 2", experience: 150 },
    { name: "Quest 3", experience: 75 },
  ];

const totalPlayerExperience= (questsArr)=>{
    let sum=0;
    for (let i=0; i<questsArr.length; i++){
        sum+=questsArr[i].experience;
    }
    return sum;
}

// check
console.log('question 1');
console.log(totalPlayerExperience(quests));

// 2
const questByName=(questsArr,questName)=>{
    for (let i=0; i<questsArr.length; i++){
        if (questsArr[i].name===questName) return questsArr[i];
    }
}
// check
console.log('question 2');
console.log(questByName(quests,'Quest 2'));

// 3
const questsByExperience=(questsArr)=>{
    for (let i=0; i<questsArr.length; i++){
        for(let j=0; j<questsArr.length-1-i; j++){
            if (questsArr[j].experience>questsArr[j+1].experience){
                [questsArr[j],questsArr[j+1]]=[questsArr[j+1],questsArr[j]];
        }}
    }
    return questsArr;
}
// check
console.log('question 3');
console.log(questsByExperience(quests));

// 4
const enemies = [
    { name: "Enemy 1", health: 80 },
    { name: "Enemy 2", health: 120 },
    { name: "Enemy 3", health: 65 },
  ];

const highHealth=(questsArr,threshold)=>{
    const arrHealth=[];
    for (let i=0; i<questsArr.length; i++){
        if (questsArr[i].health>threshold)
            arrHealth.push(questsArr[i]);
    }
    return arrHealth;
}
// check
console.log('question 4');
console.log(highHealth(enemies,100));

// 5
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
const sumMatrix= (matrix)=>{
    let sum=0;
    for( let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}  
// check
console.log('question 5');
console.log(sumMatrix(matrix));

// 6
const matrixToFindMax = [
    [10, 5, 8],
    [3, 15, 4],
    [2, 7, 12],
  ];
  
const maxValue= (matrix)=>{
    let max=0;
    for( let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j]>max) max=matrix[i][j];
        }
    }
    return max;
}
// check
console.log('question 6');
console.log(maxValue(matrixToFindMax));

// 7
const evenNum= (matrix)=>{
    let count=0;
    for( let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if(matrix[i][j]%2==0) count++;
        }
    }
    return count;
}  
// check
console.log('question 7');
console.log(evenNum(matrix));

// 8
const questsToFilter = [
    { name: "Quest 1", reward: 50 },
    { name: "Quest 2", reward: 100 },
    { name: "Quest 3", reward: 75 },
  ];
const highRewards=(rewardsArray,threshold)=>{
    const newArr=[];
    for (i=0; i<rewardsArray.length; i++){
        if (rewardsArray[i].reward>threshold)
            newArr.push(rewardsArray[i]);
    }
    return newArr;
}
// check
console.log('question 8');
console.log(highRewards(questsToFilter,80));

// 9
const enemyObjects = [
    { name: "Enemy 1", power: 50 },
    { name: "Enemy 2", power: 80 },
    { name: "Enemy 3", power: 65 },
  ];
const enemyPower=(enemyArr)=>{
    let sum=0;
    for (i=0;i<enemyArr.length; i++){
        sum+=enemyArr[i].power;
    }
    return sum;
}
// check
console.log('question 9');
console.log(enemyPower(enemyObjects));