import React, { useState, } from 'react';
import "./index.css"
import { combat, locationArray, outOfBounds, hero, goblin } from "../../scripts/gameScript.js";
export default function Game() {
    let [player, setPlayer] = useState(hero)
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
                locationArray[i].areaEvent()
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
            <h2>Name: {player.name}</h2>
            <img src={player.img} height="100px" width="100px" alt=""></img>
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
            {/* <Combat /> */}
            <button onClick={() => { combat(hero, goblin) }}>fight</button>
            {/* <Text /> */}
        </div>
    )
}