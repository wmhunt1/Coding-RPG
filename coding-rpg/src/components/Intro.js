import React from "react";

function Intro(props) {
    return (
     <section id="Intro">
        <h1>Intro</h1>
        <article>
            <p>text</p>
        </article>
        {/* <button onclick="charCreation()">Go to character creation</button> */}
        <button
        onClick={() => props.handlePageChange("CharCreate")}
        >Go to character creation
        </button>
    </section>
    );
  }
  
  export default Intro;