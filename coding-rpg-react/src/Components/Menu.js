import { useState } from "react";
import MainMenu from "./MainMenu";
import './Game.css'
function Menu(props) {
    const hero = props.hero
    const [active, setActive] = useState("Menu")
    const exitGame = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
        navigator.app.exitApp();
    };
    return (<div>
        {active === "MainMenu" ? <div>
            <MainMenu NewGame={() => setActive("Game")} hero={hero}></MainMenu>
        </div> : <div className="menu-box">
            <h2>Menu</h2>
        <div><button className="menu-button" onClick={props.Back}><h3>Back</h3></button></div>
            <div><button className="menu-button"><h3>Save Game</h3></button></div>
            <div><button className="menu-button"><h3>Load Game</h3></button></div>
            {/* <div><button className="menu-button" onClick={() => setActive("MainMenu")}><h3>Main Menu</h3></button></div> */}
            <div><button className="menu-button" onClick={() => exitGame()}><h3>Exit Game</h3></button></div>
        </div>}
    </div>)
}
export default Menu;