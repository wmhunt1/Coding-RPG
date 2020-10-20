import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import CharCreate from "./components/CharCreate";

function Start() {
    return (
        <div>
            <Header/>
            {/* <Menu/> */}
            <Intro/>
        </div>
    );
}
function CreateCharacter() {
    return (
        <div>
            <Header/>
            <CharCreate/>
        </div>
    );
}
function MainGame() {
    return (
        <div>
            <Header/>
            <Menu/>
        </div>
    );
}

export default Start;