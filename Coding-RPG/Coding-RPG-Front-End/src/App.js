import React, {useState}from 'react';
import "./App.css";
import Game from "./Components/Game";
import Start from "./Components/Start";

export const App = () => {

    const title = <h1 id='game-title'>Coding-RPG</h1>
    const [mode, setMode] = useState('start')
    if (mode === 'start') {
        return (<div>{title}
            <Start onStartClick={() => setMode("run")}></Start></div>)
    }
    else {
        return (<div>{title}
            <Game></Game></div>)
    }

}
export default App;
