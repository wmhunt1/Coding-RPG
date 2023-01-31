import '../App.css';

function MainMenu(props) {
  return (
    <div>
        <h2>Main Menu</h2>
        <button><h3>Load Game</h3></button>
        <button onClick = {props.NewGame}><h3>New Game</h3></button>
        <button><h3>Settings</h3></button>
    </div>
  );
}

export default MainMenu;