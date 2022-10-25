import React, { useState } from 'react';
import "./Game.css";
import Menu from "./Menu"
import Home from "./Home"
import Character from './Character';
import Equipment from './Equipment';
import Inventory from './Inventory';
import Journal from './Journal';
import Map from "./Map";
import Settings from './Settings';

export const Game = () => {

    //const [mode, setMode] = useState('')
    const [activeTab, setActiveTab] = useState(<Home></Home>)
    return (
        <div><Menu onHomeClick={() => setActiveTab(<Home></Home>)}
            onCharacterClick={() =>  setActiveTab(<Character></Character>)}
            onEquipmentClick={() => setActiveTab(<Equipment></Equipment>)}
            onInventoryClick={() => setActiveTab(<Inventory></Inventory>)}
            onJournalClick={() => setActiveTab(<Journal></Journal>)}
            onMapClick={() => setActiveTab(<Map></Map>)}
            onSettingsClick={() => setActiveTab(<Settings></Settings>)}
        ></Menu>
            {activeTab}
        </div>)


}
export default Game;