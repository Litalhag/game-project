const characters = [ { name: 'John', level: 2 }, { name: 'Jane', level: 5 }, { name: 'Doe', level: 2 }];
const characters2 = [
    { name: 'John', level: 2, skills: ['fire', 'ice'] },
    { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] },
    { name: 'Doe', level: 2, skills: ['earth'] },
  ];

// 1 
const groupCharactersByLevel =(characters)=>characters.reduce((accum, character)=>{
    if( accum[character.level]){
    accum[character.level].push(character);
   } else{
    accum[character.level]=[character];
   }
   return accum;
}, {});
console.log("question 1");
console.log(groupCharactersByLevel(characters));
// solution
// function groupCharactersByLevel(characters) {
//   return characters.reduce((acc, character) => {
//     acc[character.level] = acc[character.level] || [];
//     acc[character.level].push(character);
//     return acc;
//   }, {});
// }

// 2
const findHighestLevelCharacter=(characters)=>(characters.reduce((HighestLevelCharacter,character)=>( character.level>HighestLevelCharacter.level? character : HighestLevelCharacter)));
// check
console.log("question 2");
console.log(findHighestLevelCharacter(characters));

// 3
const calculateAverageCharacterLevel=(characters)=> Math.round(characters.reduce((sum,character)=>(sum+=character.level),0)/(characters.length)); 
// check
console.log("question 3");
console.log(calculateAverageCharacterLevel(characters));

// 4
const filterCharactersByLevelRange =(characters, minRange, maxRange)=> characters.filter((character)=>(character.level>=minRange && character.level<=maxRange));
// check
console.log("question 4");
console.log(filterCharactersByLevelRange(characters,0,2));

// 5
const countCharactersPerLevel=(characters)=>characters.reduce(((charPerLevel,character)=>{
  charPerLevel[character.level]=(charPerLevel[character.level]||0)+1;
  return charPerLevel}),{});
// check
console.log("question 5");
console.log(countCharactersPerLevel(characters));

// 6
const findCharacterWithMostSkills=(characters)=>characters.reduce ((mostSkillsCharacter,character)=> 
(character.skills.length > mostSkillsCharacter.skills.length? character : mostSkillsCharacter));
// check
console.log("question 6");
console.log(findCharacterWithMostSkills(characters2));

// 7
const countTotalNumberOfSkills=(characters)=>characters.reduce(((numOfSkills,character)=>numOfSkills+=character.skills.length),0);
// check
console.log("question 7");
console.log(countTotalNumberOfSkills(characters2));

// 8
const findUniqueSkills= (characters)=>{
  const skillsArr= characters.reduce((skillsArr,character)=>skillsArr.concat(character.skills),[]);
  return [...new Set(skillsArr)];
};

// option 2
// function findUniqueSkills(characters) {
//   return [...new Set(characters.flatMap(character => character.skills))];
// }

// const findUniqueSkills= (characters)=>characters.reduce((skillsArr,character)=>skillsArr.concat(character.skills),[]).reduce(((uniqueSkillsArr,skill)=>uniqueSkillsArr.includes(skill)? uniqueSkillsArr : uniqueSkillsArr.push(skill)),[]);

// const findUniqueSkills= (characters)=>characters.reduce(((uniqueSkillsArr, character)=>{
//   character.skills.reduce (((skillsArr,skill)=>{
//     if (skillsArr.includes(skill)) return skillsArr;
//     else  return skillsArr.push(skill);}),[]);
//   return uniqueSkillsArr.concat(skillsArr);}),[]);

// check
console.log("question 8");
console.log(findUniqueSkills(characters2));

// 9
const findCharactersWithSkill=(characters,skill)=> characters.filter(character=> character.skills.includes(skill));
// check
console.log("question 9");
console.log(findCharactersWithSkill(characters2, 'fire'));