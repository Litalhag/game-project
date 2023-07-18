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
