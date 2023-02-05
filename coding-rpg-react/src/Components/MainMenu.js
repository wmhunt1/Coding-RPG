import '../App.css';
import { useState } from "react";
import Game from './Game';

function MainMenu(props) {
  const [active, setActive] = useState("MainMenu");
  const [name, setName] = useState('');
  const [hero, setHero] = useState(props.hero)
  const exitGame = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
    navigator.app.exitApp();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    hero.Name = name;
    setHero(hero)
    setActive("Game");
  }
  if (active === "NewGame") {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h3><label>Name Your Character: <input type="text" value={name}
            onChange={(e) => setName(e.target.value)} /></label></h3>
        </form>
        <div>
          <button onClick={() => setActive("MainMenu")}><h3>Back</h3></button>
        </div>
      </div>
    );
  }
  else if (active === "Game") {
    return (
      <div className="App">
        <Game hero={hero}></Game>
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>Main Menu</h2>
        {/* <button onClick={props.NewGame}><h3>Continue (Hero)</h3></button> */}
        <button onClick={props.NewGame}><h3>Load Game (Hero)</h3></button>
        <button hero={hero} onClick={() => setActive("NewGame")}><h3>New Game</h3></button>
        <button><h3>Settings</h3></button>
        <button onClick={() => exitGame()}><h3>Exit</h3></button>
      </div>
    );
  }
}

export default MainMenu;