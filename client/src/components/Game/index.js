import React, { useState, } from 'react';
//import Combat from '../Combat/'
//import Text from '../Text/'
import Forest from "../../assets/terrain/forest.png";

const location = [{
    areaName: "Test",
    areaIMG: Forest
}]
export default function Game() {
    const [area, setArea] = useState(location[0]);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const handleSetArea = () => {
        // if (xCoord == 0 && yCoord == 0) { setArea("Area 1") }
        // else { setArea("Area2") }
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