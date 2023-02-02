import '../App.css';
import { useState, useRef, useEffect} from "react";
import { HealHP } from '../Scripts/CharacterScripts';
import Menu from './Menu';
import CharacterSheet from './CharacterSheet';
import Inventory from './Inventory';
import Combat from './Combat';
import Equipment from './Equipment';
import Shop from './Shop';
import {rat} from'../Database/Characters'
//import { club, dagger, healingPotion } from '../Database/Items';
import {testShop} from '../Database/Shops'

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
    setLog(newLog);
  }

  const logList = hero.Log.map((message, index) => <h5 key={index}>{message}</h5>)
  if (active === "Menu")
  {
    return (<div>
      <Menu hero={hero} Back={() => setActive("Game")}></Menu>
    </div>)
  }
  else if (active === "CharacterSheet") {
    return (<div>
      <CharacterSheet hero={hero} Back={() => setActive("Game")}></CharacterSheet>
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
  else if (active === "Combat") {
    return (<div>
      <Combat hero={hero} enemies={[{ Id: 1, Enemy: rat()},{ Id: 2, Enemy: rat()}]} Back={() => setActive("Game")}></Combat>
    </div>)
  }
  else if (active === "Shop") {
    return (<div>
      <Shop shopName = {testShop().Name} shopInventory={testShop().Inventory} hero={hero} Back={() => setActive("Game")}></Shop>
    </div>)
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
            <button onClick={() => setActive("Menu")}><h3>Menu</h3></button>
          </div>
        </div>
        <div>
          <h2>Actions</h2>
          <div></div>
        </div>
        <div>
          <h2>Game Log</h2>
          <div style={{ overflowAnchor: "none", marginLeft: "25%", marginRight: "25%", marginBottom: "5%", height: `200px`, overflow: "scroll", border: "solid", textAlign: "center" }}>
            {logList}
            <div ref={messagesEndRef}></div>
          </div>
        </div>
        <div>
          <h2>Tests</h2>
          <button onClick={() => setActive("Combat")}><h3>Test Combat</h3></button>
          <button onClick={() => Heal(props.hero, log)}><h3>Test Heal</h3></button>
          <button onClick={() => setActive("Shop")}><h3>Test Shop</h3></button>
        </div>

      </div>
    );
  }
}

export default Game;