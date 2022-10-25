import React, { useState } from 'react';
import "./Game.css";
import Menu from "./Menu"
import Home from "./Home"
import Character from './Character';

export const Game = () => {

    //const [mode, setMode] = useState('')
    const [activeTab, setActiveTab] = useState(<Home></Home>)
    return (
        <div><Menu onHomeClick={() => setActiveTab(<Home></Home>)}
            onCharacterClick={() =>  setActiveTab(<Character></Character>)}
        ></Menu>
            {activeTab}
        </div>)


}
export default Game;