import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu'
import GameView from "./views/GameView.js";
import CharacterView from "./views/CharacterView.js";
import InventoryView from "./views/InventoryView.js";
import JournalView from "./views/JournalView.js";
import "./App.css";
function App() {
  return (
    <div>
      <header>
        <h1>Coding RPG</h1>
      </header>
      <Menu />
      <GameView/>
      <CharacterView/>
      {/* <Router>
      <div>
          <Switch>
            <Route exact path="/" component={GameView} />
            <Route exact path="/home" component={GameView} />
            <Route exact path="/character" component={CharacterView} />
            <Route exact path="/inventory" component={InventoryView} />
            <Route exact path="/journal" component={JournalView} />
          </Switch>
      </div>
    </Router> */}
    </div>
  );
}
export default App;
