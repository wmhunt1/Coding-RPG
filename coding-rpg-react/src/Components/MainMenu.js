import '../App.css';
import { useState } from "react";
import Game from './Game';

function MainMenu(props) {
  const [active, setActive] = useState("MainMenu");
  const [hero, setHero] = useState(props.hero)
  const exitGame = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
    navigator.app.exitApp();
  };
  const handleChange = (event) => {
    const name = event.target.name;
    hero.Name = name;
    setHero(hero)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setActive("Game");
  }
  return (<div>
    <div className="App">
      {active === "MainMenu" ? <div>
        <h2>Main Menu</h2>
        <button onClick={props.NewGame}><h3>Continue (Hero)</h3></button>
        <button onClick={props.NewGame}><h3>Load Game (Hero)</h3></button>
        <button hero={hero} onClick={() => setActive("NewGame")}><h3>New Game</h3></button>
        <button><h3>Settings</h3></button>
        <button onClick={() => exitGame()}><h3>Exit</h3></button>
      </div> : <div></div>}
      {active === "NewGame" ? <div>
        <div style={{ border: "solid", marginRight: "25%", marginLeft: "25%", marginBottom: "1%", paddingBottom: "1%" }}>
          <h2>Character Creation</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <h4>
              <label>Name Your Character: </label>
              <input style={{ width: "100px" }}
                type="text"
                name="name"
                value={hero.Name || ""}
                onChange={handleChange}
              /></h4>
            </div>
            <input type="submit" />
          </form>
        </div>
        <button onClick={() => setActive("MainMenu")}><h3>Back</h3></button>
      </div> : <div></div>}
    </div>
  </div>)
}

export default MainMenu;