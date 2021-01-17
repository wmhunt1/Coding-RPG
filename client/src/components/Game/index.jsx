import React, { useState, } from 'react';
import "./index.css"
import { combat, textLog, addTextLog, locationArray, outOfBounds, hero, goblin } from "../../scripts/gameScript.js";
export default function Game() {
    // let [player, setPlayer] = useState(hero)
    let [area, setArea] = useState(locationArray[0]);
    let [xCoord, setXCoord] = useState(locationArray[0].x);
    let [yCoord, setYCoord] = useState(locationArray[0].y);
    // const [text, setText] = useState([textLog])
    const handleSetArea = () => {
        var i;
        for (i = 0; i < locationArray.length; i++) {
            console.log(i)
            if (locationArray[i].x === xCoord && locationArray[i].y === yCoord) {
                const newArea = locationArray[i];
                setArea(newArea)
                console.log("Area Found")
                addTextLog("You have Entered: " + locationArray[i].areaName)
                locationArray[i].areaEvent()
                break;
            }
            else {
                console.log("Out of Bounds")
                setArea(outOfBounds[0])
                // addTextLog("You are out of bounds")
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
            <div id="gameArea">
                <h2>Location: {area.areaName}</h2>
                <img src={area.areaIMG} alt=""></img>
                <br></br>
                {/* should move these */}
                <div id="directions">
                    <h3>Controls</h3>
                    <button class="north-south" onClick={goNorth}>North</button>
                    <br></br>
                    <div class="east-west">
                        <button class="east-westBtn" onClick={goWest}>West</button>
                        <button class="east-westBtn" onClick={goEast}>East</button>
                    </div>
                    <br></br>
                    <button class="north-south" onClick={goSouth}>South</button>
                </div>
                <div id="text">
                    <h3>Text Log</h3>
                    <div id="textOutput" >
                        {textLog.map((text, n) => <p key={text, n}>
                            {text}
                        </p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}