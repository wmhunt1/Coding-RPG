import React, { useState} from 'react';
import "./Game.css";

export const Start  = ({onStartClick}) => {
        //const [mode, setMode] = useState('');
        
        return (
            <div>
                <button id = "start" 
                onClick={onStartClick}
                ><h2>Start Game</h2></button>
            </div>
        );
    

}
export default Start
