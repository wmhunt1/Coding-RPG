import { useState } from "react";
import MainMenu from "./MainMenu";
function Menu(props)
{
    const hero = props.hero
    const [active, setActive] = useState("Menu")
    const exitGame = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
        navigator.app.exitApp();
      };
    if (active === "MainMenu")
    {
        return(
            <div>
                <MainMenu NewGame={() => setActive("Game")} hero = {hero}></MainMenu>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <button onClick={props.Back}><h3>Back</h3></button>
                <button><h3>Save Game</h3></button>
                <button><h3>Load Game</h3></button>
                <button onClick={() => setActive("MainMenu")}><h3>Main Menu</h3></button>
                <button onClick={() => exitGame()}><h3>Exit Game</h3></button>
            </div>
        )
    }
}
export default Menu;