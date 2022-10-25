import React, { useState } from 'react';
import "./Game.css";

export const Menu = ({onHomeClick, onCharacterClick} ) => {
    return (
        <div id='Menu'><h2 id="Menu-Title">Menu</h2>
            <button onClick={onHomeClick}><h3>[ Home ]</h3></button><button onClick={onCharacterClick}><h3>[ Character ] </h3></button><button><h3>[ Equipment ]</h3></button><button><h3>[ Inventory ]</h3></button><button><h3>[ Journal ]</h3></button><button><h3>[ Map ]</h3></button><button><h3>[ Settings ]</h3></button>
        </div>)

}
export default Menu;