import '../App.css';
function CharacterSheet(props) {
  const hero = props.hero;
  return (
    <div >
      <h2>{hero.Name}'s Character Sheet</h2>
      <h3>Base Stats</h3>
      <h4>Level: {hero.Level}, XP: {hero.CurrentXP}/{hero.MaxXP}</h4>
      <h4>HP {hero.CurrentHP}/{hero.MaxHP}, MP {hero.CurrentMP}/{hero.MaxMP}, SP {hero.CurrentSP}/{hero.MaxSP}</h4>
      <div style={{paddingBottom: "1%"}}>
        <h3>Attributes</h3>
        <div style={{ display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
          <h4>Phsyical Attributes</h4>
          <h4>STR: {hero.Strength} CON: {hero.Constitution} DEX: {hero.Dexterity} SPD: {hero.Speed}</h4>
        </div>
        <div style={{ display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
          <h4>Mental Attributes</h4>
          <h4>INT: {hero.Intelligence} WIS: {hero.Wisdom} CHA: {hero.Charisma} WLP: {hero.WillPower} PRC: {hero.Perception}</h4>
        </div>
        <div style={{ display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
          <h4>Other Attributes</h4>
          <h4>LCK: {hero.Luck} BTY: {hero.Beauty}</h4>
        </div>
      </div>
      <button onClick={props.Back}><h3>Back</h3></button>
    </div>
  );
}

export default CharacterSheet;