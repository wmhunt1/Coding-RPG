import React, { useState } from 'react';
import "./Game.css";

export const Character = () => {

    const [mode, setMode] = useState('')
    return (
        <div id ="char-sheet"><h3 id ="char-sheet-title">Character Sheet</h3>
        <h4>Character Name: </h4>
        <h4>Level: </h4>
        </div>)


}
export default Character;