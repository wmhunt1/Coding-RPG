class Dungeon {
    constructor(name, encounter1, encounter2, encounter3, encounter4, encounter5, encounter6, encounter7, encounter8, encounter9) {
        this.name = name;
        this.encounter1 = encounter1;
        this.encounter2 = encounter2;
        this.encounter3 = encounter3;
        this.encounter4 = encounter4;
        this.encounter5 = encounter5;
        this.encounter6 = encounter6;
        this.encounter7 = encounter7;
        this.encounter8 = encounter8;
        this.encounter9 = encounter9;
    }
}
const mineDungeon = new Dungeon("Dwarven Mines",
    function () {
        alert("You arrive at the Dwarven Mine");
        enterMine()
        document.getElementById("mee").style.display = "block"

    },
    function () {
        alert("You encounter goblins guarding the entrance.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        turnArray = [hero, goblin1, goblin2, goblin3]
        combat()
        document.getElementById("em").style.display = "block";
    },
    function(){
        alert ("Before you enter the mine you notice some kobolds who ask you to free the other kobolds.")
        document.getElementById("mi1").style.display = "block";
    })