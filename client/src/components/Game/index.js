import React, { useState, } from 'react';
import "./index.css"
import Combat from '../Combat/'
//import Text from '../Text/'
//imports locations
import locationArray from "./locationArray"
//if outside of locationArray
import Stop from "../../assets/terrain/stop.png";
const outOfBounds = [
    {
        areaName: "Out of Bounds",
        areaIMG: Stop
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
        <div id="Game">
            <h2>Location: {area.areaName}</h2>
            <h3>Coordinates ({xCoord}, {yCoord})</h3>
            <img src={area.areaIMG} alt=""></img>
            <br></br>

            <div class="directions">
                <button class="north-south" onClick={goNorth}>North</button>
                <br></br>
                <div class="east-west">
                    <button class="east-westBtn" onClick={goWest}>West</button>
                    <button class="east-westBtn" onClick={goEast}>East</button>
                </div>
                <br></br>
                <button class="north-south" onClick={goSouth}>South</button>
            </div>
            <Combat />
            {/* <Text /> */}
        </div>
    )
}