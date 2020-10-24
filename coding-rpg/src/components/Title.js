import React from "react";

function Title (props)
{
    return (
        <header id = "title">
        <h1
         onClick={() => props.handlePageChange("Start")}
         >Coding RPG</h1>
        </header>
    );
}
export default Title;