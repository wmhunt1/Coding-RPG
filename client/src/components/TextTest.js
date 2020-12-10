import react, { useState, } from 'react';

function TextTest() {
    const story = ["Once upon a time", "There was a thing"]
    const [text, setText] = useState(0)
    return (
        <div>
            <p>{story[text]}</p>
            <button onClick={() => setText(text-1)}>Prev</button>
            <button onClick={() => setText(text+1)}>Next</button>
            
        </div>
    )
}
export default TextTest;