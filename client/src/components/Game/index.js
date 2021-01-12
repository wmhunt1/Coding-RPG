import React, { useState, } from 'react';
//import Combat from '../Combat/'
//import Text from '../Text/'
import Forest from "../../assets/terrain/forest.png";
import Mountains from "../../assets/terrain/mountains.png";
import Stop from "../../assets/terrain/stop.png";

const outOfBounds = [
    {
        areaName: "Out of Bounds",
        areaIMG: Stop
    }
]
const locationArray = [
    {
        areaName: "Test1",
        areaIMG: Forest,
        x: 0,
        y: 0
    },
    {
        areaName: "Test2",
        areaIMG: Mountains,
        x: 1,
        y: 0
    },
    {
        areaName: "Test3",
        areaIMG: Forest,
        x: -1,
        y: 0
    },
    {
        areaName: "Test4",
        areaIMG: Mountains,
        x: 0,
        y: 1
    },
    {
        areaName: "Test5",
        areaIMG: Forest,
        x: 0,
        y: -1
    },
    {
        areaName: "Test6",
        areaIMG: Forest,
        x: 2,
        y: 0
    }
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
    const moveForward = () => {
        setYCoord(++yCoord);
        handleSetArea();
    };
    const moveRight = () => {
        setXCoord(++xCoord);
        handleSetArea();
    };
    const moveLeft = () => {
        setXCoord(--xCoord);
        handleSetArea();
    };
    const moveBack = () => {
        setYCoord(--yCoord);
        handleSetArea();
    };
    return (
        <div>
            <h2>{area.areaName}</h2>
            <h3>Coordinates ({xCoord}, {yCoord})</h3>
            <img src={area.areaIMG} alt=""></img>
            {/* <Combat /> */}
            <button onClick={moveForward}>Forward</button>
            <button onClick={moveLeft}>Left</button>
            <button onClick={moveRight}>Right</button>
            <button onClick={moveBack}>Back</button>
            {/* <Text /> */}
        </div>
    )
}