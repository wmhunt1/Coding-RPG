import '../App.css';
function CharacterSheet(props) {
  const hero = props.hero;
  return (
    <div >
        <h2>{hero.Name}'s Character Sheet</h2>
        <h3>Base Stats</h3>
        <h4>Level: {hero.Level}, XP: {hero.CurrentXP}/{hero.MaxXP}</h4>
        <h4>HP {hero.CurrentHP}/{hero.MaxHP}, MP {hero.CurrentMP}/{hero.MaxMP}, SP {hero.CurrentSP}/{hero.MaxSP}</h4>
        <h3>Attributes</h3>
        <h4>STR: {hero.Strength}</h4>
        <button onClick={props.Back}><h3>Back</h3></button>
    </div>
  );
}

export default CharacterSheet;