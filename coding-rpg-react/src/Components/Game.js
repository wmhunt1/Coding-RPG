import '../App.css';
import { useState, useRef, useEffect } from "react";
import { HealHP } from '../Scripts/CharacterScripts';
import Menu from './Menu';
import CharacterSheet from './CharacterSheet';
import Combat from './Combat';
import Party from './Party';
import Inventory from './Inventory';
import Equipment from './Equipment';
import Shop from './Shop';
import { rat } from '../Database/Characters'
//import { club, dagger, healingPotion } from '../Database/Items';
import { testShop } from '../Database/Shops'

function Game(props) {
  const messagesEndRef = useRef(null)
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.hero)
  const [log, setLog] = useState([props.hero.Log]);
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }
  useEffect(() => {
    //scrollToBottom()
  }, [log]);

  function Heal(char) {
    HealHP(char, char.MaxHP)
    setHero(char);
    var newLog = [...char.Log];
    HealHP(char.Companions[0], char.Companions[0].MaxHP)
    setLog(newLog);
  }

  const logList = hero.Log.map((message, index) => <h5 key={index}>{message}</h5>)
  if (active === "Menu") {
    return (<div>
      <Menu hero={hero} Back={() => setActive("Game")}></Menu>
    </div>)
  }
  else if (active === "CharacterSheet") {
    return (<div>
      <CharacterSheet hero={hero} Back={() => setActive("Game")}></CharacterSheet>
    </div>)
  }
  else if (active === "Combat") {
    return (<div>
      <Combat hero={hero} enemies={[rat(), rat(), rat(), rat()]} Back={() => setActive("Test")}></Combat>
    </div>)
  }
  else if (active === "Equipment") {
    return (<div>
      <Equipment hero={hero} Back={() => setActive("Game")}></Equipment>
    </div>)
  }
  else if (active === "Inventory") {
    return (<div>
      <Inventory hero={hero} Back={() => setActive("Game")}></Inventory>
    </div>)
  }
  else if (active === "Party") {
    return (<div>
      <Party hero={hero} Back={() => setActive("Game")}></Party>
    </div>)
  }
  else if (active === "Shop") {
    return (<div>
      <Shop shopName={testShop().Name} shopInventory={testShop().Inventory} hero={hero} Back={() => setActive("Game")}></Shop>
    </div>)
  }
  else if (active === "Test") {
    return (
      <div>  <div>
        <h2>Tests</h2>
        <button onClick={() => setActive("Combat")}><h3>Test Combat</h3></button>
        <button onClick={() => Heal(props.hero, log)}><h3>Test Heal</h3></button>
        <button onClick={() => setActive("Shop")}><h3>Test Shop</h3></button>
        <button onClick={() => setActive("Game")}><h3>Back</h3></button>
      </div></div>
    );
  }
  else {
    return (
      <div>
        <div>
          <h2>Game Menu</h2>
          <div>
            <button onClick={() => setActive("CharacterSheet")}><h3>Character Sheet</h3></button>
            <button onClick={() => setActive("Equipment")}><h3>Equipment</h3></button>
            <button onClick={() => setActive("Inventory")}><h3>Inventory</h3></button>
            <button onClick={() => setActive("Party")}><h3>Party</h3></button>
            <button onClick={() => setActive("Menu")}><h3>Menu</h3></button>
            <button onClick={() => setActive("Test")}><h3>Tests</h3></button>
          </div>
        </div>
        <div>
          <h2>Game Map</h2>
          <div>
          </div>
        </div>
        <div>
          <h2>Game Log</h2>
          <div style={{ overflowAnchor: "none", marginLeft: "25%", marginRight: "25%", marginBottom: "1%", height: `200px`, overflow: "scroll", border: "solid", textAlign: "center" }}>
            {logList}
            <div ref={messagesEndRef}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;