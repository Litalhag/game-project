//1 
function toTitleCase (name){
    // const arr=name.split("");
    const arr=[...name];
    arr[0]= arr[0].toUpperCase();
    for (i=0; i<arr.length; i++){
        if (arr[i]===" "){
            arr[i+1]=arr[i+1].toUpperCase();
        }
    }  
    return arr.join('');
}
console.log(toTitleCase(' maria  pinchasi'));

// 2
function searchInventory(inventory, query){
    const newArr=inventory.filter (name=>name.includes(query));
    return newArr;
}
console.log(searchInventory(["Iron Sword", "Healing Potion", "Steel Shield"], "Steel"));

// 3
function formatNPCName(name){
    const arr=name.split(', ');
    return arr.reverse().join(' ');
}
console.log(formatNPCName("Goblin, Grunty"));

// 4

function parseDuration (duration){
    const arr=duration.split(" ");
    const timeObj={};
    timeObj['hours']=parseInt(arr[0]);
    timeObj['minutes']=parseInt(arr[1]);
    return timeObj;  
}
console.log (parseDuration("3h 45min"));

// 5
function getGameAcronym(title){
    return title.split(' ').map(word => word[0]).join('').toUpperCase();
}
console.log(getGameAcronym("Epic Fantasy Battle"));

// 6
function getCharacterDetails(character){
    let str='';
    for (let prop in character){
        str+=`${prop}: ${character[prop]} `;
    }
    return str;
}
console.log(getCharacterDetails({ name: "Iron Warrior", class: "Warrior", level: 10 }));
// 7
function createSlug(location){
    return location.toLowerCase().split(' ').join('-');
}
console.log(createSlug("Dark Forest"));
// 8
function trimDescription(description, maxLength){
    const arr=[...description];
    const newLength=arr.length-maxLength;
    let str='';
    for (let i=0; i<=newLength; i++){
        str+=arr[i];
    }
    return str;
}
console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful."
, 50));
// 9
function splitMonsters(monsters){
    const arr= monsters.split(', ');
    return arr;
}
console.log (splitMonsters("Goblin, Orc, Dragon"));

// 10
function decodeSecret(secret){
    const arr=[...secret];
    const mapping = { '1': 'i', '2': 'b', '3': 'e', '4': 'a', '5': 'e' };
    const newArr=arr.map((char)=>{
        if (mapping[char]){
            return mapping [char];
        }
        return char;
    });
    return newArr.join("");
}
console.log(decodeSecret("Th3 s3cr3t l1r3 1s und3r th3 br1dg3"));