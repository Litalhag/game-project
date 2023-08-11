class VoleyballPlayer {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  sayingMyPosition() {
    console.log("My name is " + this.name + "My position is " + this.position);
  }
}

let player1 = new VoleyballPlayer("AAA", 6);

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }
}

let team1 = new Team("Osafiya");

team1.addPlayer(player1);

class Captain extends VoleyballPlayer {
  constructor(name, position, color) {
    super(name, position);
    this.color = color;
  }
  motivatePlayers() {
    console.log("Yalla");
  }
}

let myCaptain = new Captain("Nadia", 4, "Pink");

myCaptain.motivatePlayers();
