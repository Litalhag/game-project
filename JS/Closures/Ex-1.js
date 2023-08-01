function createPlayerCharacter(name, level) {
  let myName = name;
  return {
    level: level,
    xp: 100,

    getName: function () {
      console.log(myName);
    },

    levelUp: function () {
      this.level += 1;
      console.log("The level has been increased");
    },
    addXp: function (xp) {
      this.xp += xp;
      console.log("The new xp is ", +this.xp);
    },
  };
}

const nadia = createPlayerCharacter("Nadia", 10);

console.log(nadia.level);
console.log(nadia.myName);

nadia.getName();
