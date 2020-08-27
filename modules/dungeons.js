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
    //encounter 1
    function () {
        alert("You arrive at the Dwarven Mine");
        enterMine()
        document.getElementById("mee").style.display = "block"

    },
    //encounter 2
    function () {
        alert("You encounter goblins guarding the entrance.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        turnArray = [hero, ferra, goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("em").style.display = "block";
        }
        else { }
    },
    //encounter 3
    function () {
        alert("Before you enter the mine you notice some kobolds who ask you to free the other kobolds.")
        document.getElementById("mi1").style.display = "block";
    },
    //encounter 4
    function () {
        alert("Inside the dungeon you are attacked by more goblins.")
        alert("You encounter goblins guarding the entrance.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        turnArray = [hero, ferra, goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("fk").style.display = "block";
            document.getElementById("mi2").style.display = "block";
        }
        else { }
    },//encounter 5
    function () {
        if (hero.journal.koboldsRescued === false) {
            alert("You free the kobolds who thank you and suggest meeting their master Sheepscale for a reward.")
            document.getElementById("sheepPasture").style.display = "block";
            hero.journal.koboldsRescued = true;
            hero.gainRel(ferra, 1)
        }
        else {
            alert("You already freed the kobolds.")
        }
    },
    //encounter 6
    function () {
        alert("You encounter goblins guarding a makeshift prison cell.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        turnArray = [hero, ferra, goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("fm").style.display = "block";
            document.getElementById("mi3").style.display = "block";
        }
        else { }
    },
    //encounter 7
    function () {
        if (hero.journal.minersRescued === false) {
            alert("You free the miners.")
            document.getElementById("sheepPasture").style.display = "block";
            hero.journal.minersRescued = true;
            hero.gainRel(ferra, 5)
        }
        else {
            alert("You already freed the miners.")
        }
    },
    //encounter 8
    function () {
        alert("You encounter goblins guarding a makeshift prison cell.")
        const goblin1 = new Goblin("Goblin 1")
        const goblin2 = new Goblin("Goblin 2")
        const goblin3 = new Goblin("Goblin 3")
        enemyArray = [goblin1, goblin2, goblin3]
        turnArray = [hero, ferra, goblin1, goblin2, goblin3]
        combat()
        if (hero.stats.currentHp > 0) {
            document.getElementById("gBoss").style.display = "block";
        }
        else { }
    },
    //encounter 9
    function () {
        if (hero.journal.goblinBossDefeated === false) {
            alert("You discover the boss of the goblins.")
            const goblin1 = new Goblin("Goblin 1")
            const goblin2 = new Goblin("Goblin 2")
            const goblin3 = new Goblin("Goblin 3")
            enemyArray = [goblin1, goblin2, goblin3]
            turnArray = [hero, ferra, goblin1, goblin2, goblin3]
            combat()
            if (hero.stats.currentHp > 0) {
                hero.journal.goblinBossDefeated = true
                alert("You defeated the Goblin Boss and have secured the mine.")
            }
            else {
                alert("You were defeated by the goblin boss.")
            }
        }
        else {
            alert("You secured the mine so the miners and get back to work.")
        }
    }
)