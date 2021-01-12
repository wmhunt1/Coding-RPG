//terrain imports
import Forest from "../../assets/terrain/forest.png";
import Hills from "../../assets/terrain/hills.png";
import Mountains from "../../assets/terrain/mountains.png";
import River from "../../assets/terrain/river.png";
import Village from "../../assets/terrain/village.png";
export const locationArray = [
    {
        areaName: "Village",
        areaIMG: Village,
        x: 0,
        y: 0
    },
    {
        areaName: "Forest N",
        areaIMG: Forest,
        x: 0,
        y: 1
    },
    {
        areaName: "Forest NE",
        areaIMG: Forest,
        x: 1,
        y: 1
    },
    {
        areaName: "Forest E",
        areaIMG: Forest,
        x: 1,
        y: 0
    },
    {
        areaName: "Forest SE",
        areaIMG: Forest,
        x: 1,
        y: -1
    },
    {
        areaName: "Forest S",
        areaIMG: Forest,
        x: 0,
        y: -1
    },
    {
        areaName: "Forest SW",
        areaIMG: Forest,
        x: -1,
        y: -1
    },
    {
        areaName: "Forest W",
        areaIMG: Forest,
        x: -1,
        y: 0
    },
    {
        areaName: "Forest NW",
        areaIMG: Forest,
        x: -1,
        y: 1
    },
]
export default locationArray;