import React from "react";

function Intro(props) {
    return (
     <section id="Intro">
        <h1>Intro</h1>
        <article>
            <p>text</p>
        </article>
        <button
        onClick={() => props.handlePageChange("Create")}
        >Go to character creation
        </button>
    </section>
    );
  }
  
  export default Intro;