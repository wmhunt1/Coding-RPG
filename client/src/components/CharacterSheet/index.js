import React from 'react';

let player = {
    name: "Hero"
}
function CharacterSheet (){
    return (
        <div>
        <h1>Character Sheet</h1>
        <h2>Name: {player.name}</h2>
        </div>
    )
}

export default CharacterSheet;