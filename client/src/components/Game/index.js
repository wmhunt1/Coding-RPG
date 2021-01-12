import React, { useState, } from 'react';
import "./index.css"
//import Combat from '../Combat/'
//import Text from '../Text/'

//terrain imports
import Forest from "../../assets/terrain/forest.png";
import Hills from "../../assets/terrain/hills.png";
import Mountains from "../../assets/terrain/mountains.png";
import River from "../../assets/terrain/river.png";
import Stop from "../../assets/terrain/stop.png";
import Village from "../../assets/terrain/village.png";

const outOfBounds = [
    {
        areaName: "Out of Bounds",
        areaIMG: Stop
    }
]
const locationArray = [
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
export default function Game() {
    let [area, setArea] = useState(locationArray[0]);
    let [xCoord, setXCoord] = useState(locationArray[0].x);
    let [yCoord, setYCoord] = useState(locationArray[0].y);
    const handleSetArea = () => {
        var i;
        for (i = 0; i < locationArray.length; i++) {
            console.log(i)
            if (locationArray[i].x === xCoord && locationArray[i].y === yCoord) {
                const newArea = locationArray[i];
                setArea(newArea)
                console.log("Area Found")
                break;
            }
            else {
                console.log("Out of Bounds")
                setArea(outOfBounds[0])
                //setXCoord(0);
                //setYCoord(0)
            }
        }
    }
    //seems to be delayed one move.
    const goNorth = () => {
        setYCoord(++yCoord);
        handleSetArea();
    };
    const goEast = () => {
        setXCoord(++xCoord);
        handleSetArea();
    };
    const goWest = () => {
        setXCoord(--xCoord);
        handleSetArea();
    };
    const goSouth = () => {
        setYCoord(--yCoord);
        handleSetArea();
    };
    return (
        <div id ="Game">
            <h2>Location: {area.areaName}</h2>
            <h3>Coordinates ({xCoord}, {yCoord})</h3>
            <img src={area.areaIMG} alt=""></img>
            <br></br>
            {/* <Combat /> */}
            <div class = "directions">
            <button class ="north-south" onClick={goNorth}>North</button>
            <br></br>
            <div class = "east-west">
            <button class ="east-westBtn" onClick={goWest}>West</button>
            <button class ="east-westBtn" onClick={goEast}>East</button>
            </div>
            <br></br>
            <button  class ="north-south" onClick={goSouth}>South</button>
            </div>
            {/* <Text /> */}
        </div>
    )
}