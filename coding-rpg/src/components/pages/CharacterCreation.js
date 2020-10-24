import React from "react";

function CharacterCreation (props)
{
    return (
        <section id="CharCreation">
        <h1>Character Creation</h1>
        <article>
            <p>text</p>
        </article>
        <button
            onClick={() => props.handlePageChange("Main")}
         >Create Character</button>
    </section>
    );
}
export default CharacterCreation;