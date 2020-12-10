import React, { useState, } from 'react';

function Intro() {
    const story = ["Once upon a time", "There was a thing"];
    const [text, setText] = useState(0);
    return (
        <div>
            <h1>Intro</h1>
            <p>{story[text]}</p>
            <button onClick={() => setText(text-1)}>Prev</button>
            <button onClick={() => setText(text+1)}>Next</button>
            
        </div>
    )
}
export default Intro;