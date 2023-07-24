// console.log("maria");
// let word='maria';
// const word2= word[0].toUpperCase();
// const word3= word.charAt(0);

// console.log(word);
// console.log(word2);
// console.log(word3);

// function trimDescription(description, maxLength){
//     return description.split(' ').reduce((str, word)=>{
//         if ((str.length+word.length+1)<maxLength) 
//             return str+=word;
//         }," ");
// }
// console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.",50));

function trimDescription(description, maxLength){
    const newStrLastIndex = description.split('').slice(0,maxLength).join('').lastIndexOf(" ");
    return description.slice(0,newStrLastIndex)+'...';
}
console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.",50));

let a=2;
let b=4;
[a,b]=[b,a];
console.log(a);
console.log(b);