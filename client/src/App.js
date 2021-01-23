import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {combat} from "./scripts/gameScript.js";
import Menu from './components/Menu'
import GameView from "./views/GameView.js";
import CharacterView from "./views/CharacterView.js";
import CombatView from './views/CombatView';
import InventoryView from "./views/InventoryView.js";
import JournalView from "./views/JournalView.js";
function App() {
  return (
    <div>
      <header>
        <h1>Coding RPG</h1>
      </header>
      <Menu />
      {/* <GameView/>
      <CombatView/>
      <CharacterView/>
      <InventoryView/>
      <JournalView/> */}
      <Router>
      <div>
          <Switch>
            <Route exact path="/" component={GameView} />
            <Route exact path="/home" component={GameView} />
            <Route exact path="/character" component={CharacterView} />
            <Route exact path="/inventory" component={InventoryView} />
            <Route exact path="/journal" component={JournalView} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}
export default App;
