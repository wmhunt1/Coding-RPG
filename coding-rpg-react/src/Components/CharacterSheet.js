import '../App.css';
function CharacterSheet(props) {
  return (
    <div>
        <h2>Character Sheet</h2>
        <h4>Name: {props.Hero.Name} - Level: {props.Hero.Level} XP: {props.Hero.CurrentXP}/{props.Hero.MaxXP}</h4>
        <h4>HP {props.Hero.CurrentHP}/{props.Hero.MaxHP}</h4>
        <button onClick={props.Back}><h3>Back</h3></button>
    </div>
  );
}

export default CharacterSheet;