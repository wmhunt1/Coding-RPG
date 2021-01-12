import React, { useState, } from 'react';
//import Combat from '../Combat/'
//import Text from '../Text/'
import Forest from "../../assets/terrain/forest.png";
import Mountains from "../../assets/terrain/mountains.png";
import No from "../../assets/terrain/no.png";

const OutofBounds = [
    {
        areaName: "Out of Bounds",
        areaIMG: No
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
    }
]
export default function Game() {
    let [area, setArea] = useState(locationArray[0]);
    let [xCoord, setXCoord] = useState(locationArray[0].x);
    let [yCoord, setYCoord] = useState(locationArray[0].y);
    const handleSetArea = () => {
        var i;
        for (i = 0; i < locationArray.length; i++) {
            if (locationArray[i].x === xCoord && locationArray[i].y === yCoord) {
                const newArea = locationArray[i];
                setArea(newArea)
                console.log("Area Found")
                break;
            }
            else {
                console.log("Out of Bounds")
                setArea(OutofBounds[0])
                //setXCoord(0);
                //setYCoord(0)
            }
        }
    }
    const moveForward = () => {
        const newY = yCoord + 1;
        setYCoord(newY);
        console.log(xCoord, yCoord)
        handleSetArea();
    };
    const moveRight = () => {
        const newX = xCoord + 1;
        setXCoord(newX);
        console.log(xCoord, yCoord)
        handleSetArea();
    };
    const moveLeft = () => {
        const newX = xCoord - 1;
        setXCoord(newX);
        console.log(xCoord, yCoord)
        handleSetArea();
    };
    const moveBack = () => {
        const newY = yCoord - 1;
        setYCoord(newY);
        console.log(xCoord, yCoord)
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