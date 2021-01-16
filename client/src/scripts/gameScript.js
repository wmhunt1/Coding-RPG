//character imports
import PlayerImg from "../assets/characters/player.png";
import GoblinImg from "../assets/characters/goblin.png";
//terrain imports
import ForestImg from "../assets/terrain/forest.png";
// import HillsImg from "../assets/terrain/hills.png";
// import MountainsImg from "../assets/terrain/mountains.png";
// import RiverImg from "../assets/terrain/river.png";
import VillageImg from "../assets/terrain/village.png";
import StopImg from "../assets/terrain/stop.png";
//location array and OutofBounds
export const locationArray = [
    {
        areaName: "Village",
        areaIMG: VillageImg,
        x: 0,
        y: 0,
        areaEvent() { console.log("Test") }
    },
    {
        areaName: "Forest N",
        areaIMG: ForestImg,
        x: 0,
        y: 1,
        areaEvent() { console.log("In Forest North") }

    },
    {
        areaName: "Forest NE",
        areaIMG: ForestImg,
        x: 1,
        y: 1,
        areaEvent() { console.log("In Forest North-East") }
    },
    {
        areaName: "Forest E",
        areaIMG: ForestImg,
        x: 1,
        y: 0,
        areaEvent() { console.log("In Forest East") }
    },
    {
        areaName: "Forest SE",
        areaIMG: ForestImg,
        x: 1,
        y: -1,
        areaEvent() { console.log("In Forest South-East") }
    },
    {
        areaName: "Forest S",
        areaIMG: ForestImg,
        x: 0,
        y: -1,
        areaEvent() { console.log("In Forest South") }
    },
    {
        areaName: "Forest SW",
        areaIMG: ForestImg,
        x: -1,
        y: -1,
        areaEvent() { console.log("In Forest South-West") }
    },
    {
        areaName: "Forest W",
        areaIMG: ForestImg,
        x: -1,
        y: 0,
        areaEvent() { console.log("In Forest West") }
    },
    {
        areaName: "Forest NW",
        areaIMG: ForestImg,
        x: -1,
        y: 1,
        areaEvent() { console.log("In Forest North-West") }
    },
]
export const outOfBounds = [
    {
        areaName: "Out of Bounds",
        areaIMG: StopImg,
        areaEvent() { console.log("Out of Bounds") }
    }
]
//combat functions
export const combat = (char1, char2) => {
    console.log(char1.name + " is in combat with " + char2.name)
    char1.hp -= 5;
    console.log(char1.hp)
    char2.hp -= 5;
    console.log(char2.hp)
}
//characters
class Character {
    constructor(name, img)
    {
        this.name = name;
        this.hp = 10;
        this.img = img;
    }
}
export const hero = new Character("Hero", PlayerImg);
export const goblin = new Character("Goblin", GoblinImg);