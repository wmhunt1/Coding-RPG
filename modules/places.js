//for places other than dungeons or that aren't parts of quests.
class Place {
    constructor(name, enter, exit) {
        this.name = name;
        this.enter = enter;
        this.exit = exit;
    }
}
class Settlement extends Place {
    constructor(name, enter, exit) {
        super();
        this.name = name;
        this.enter = enter;
        this.exit = exit;
    }
}
Place.prototype.enterPlace = function () {
    alert("You enter " + this.name);
    this.enter()
    console.log("this function")
}
Place.prototype.exitPlace = function () {
    alert("You leave " + this.name);
    this.exit()
}
//Valley of Dales and places in it.
const valleyDale = new Place("The Valley of Dale", function () {
    document.getElementById("Intro").style.display = "none"
    document.getElementById("Menu").style.display = "block";
    document.getElementById("mineDungeon").style.display = "none";
    document.getElementById("valleyDale").style.display = "block";
    document.getElementById("villageDale").style.display = "none";
},
    function () {
        alert("You cannot leave The Valley of Dale")
    }
)
//places
const dwarvenMine = new Place("The Dwarven Mine",
    function () {
        document.getElementById("Menu").style.display = "block";
        document.getElementById("mineDungeon").style.display = "block";
        document.getElementById("valleyDale").style.display = "none";
        mineDungeon.encounter1()
    },
    function () { valleyDale.enterPlace() }
)
const loggingCamp = new Place("Logging Camp")
const tollBridge = new Place("The Toll bridge", function () { welcomeDale.event1() })
//settlements
const spiderCave = new Place("Spider Cave")
const villageDale = new Settlement("The Village of Dale.",
    function () {
        document.getElementById("valleyDale").style.display = "none";
        document.getElementById("villageDale").style.display = "block";
        if (hero.journal.metWithContact === false) {
            welcomeDale.event2()
        }
        else { }


    },
    function () { valleyDale.enter() }
);