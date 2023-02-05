import { useState } from 'react';
import '../App.css';
import './Game.css'
import { CheckForLevelUp } from '../Scripts/CharacterScripts';
import LevelUpButton from './LevelUpButton';
import LevelUpScreen from './LevelUpScreen';
function CharacterSheet(props) {
  const [hero, setHero] = useState(props.hero);
  const [active, setActive] = useState("charSheet")
  const [currentXP, setCurrentXP] = useState(props.hero.CurrentXP)
  const [maxXP, setMaxXP] = useState(props.hero.MaxXP)
  function handleCheckForLevelUp(hero) {
    var check = CheckForLevelUp(hero)
    if (check === true) {
      setActive("levelUp")
    }
    setHero(hero)
  }
  return (
    <div>
      {active === "charSheet" ? <div>
        <h2>{hero.Name}'s Character Sheet</h2>
        <h3>Base Stats</h3>
        <div style={{ display: "inline-block" }}>
          <h4>Level: {hero.Level}, XP: {hero.CurrentXP}/{hero.MaxXP}</h4>
        </div>
        {currentXP >= maxXP ? <LevelUpButton click={() => handleCheckForLevelUp(hero)} ></LevelUpButton> : <div></div>}
        <h4>HP {hero.CurrentHP}/{hero.MaxHP}, MP {hero.CurrentMP}/{hero.MaxMP}, SP {hero.CurrentSP}/{hero.MaxSP}</h4>
        <div style={{ paddingBottom: "1%" }}>
          <h3>Attributes</h3>
          <div className='attribute'>
            <h4>Phsyical Attributes</h4>
            <h4>STR: {hero.Strength}({hero.StrBonus})({hero.StrPenalty}) CON: {hero.Constitution}({hero.ConBonus})({hero.ConPenalty}) DEX: {hero.Dexterity}({hero.DexBonus})({hero.DexPenalty}) SPD: {hero.Speed} BTY: {hero.Beauty}</h4>
          </div>
          <div className='attribute'>
            <h4>Mental Attributes</h4>
            <h4>INT: {hero.Intelligence} WIS: {hero.Wisdom} CHA: {hero.Charisma} WLP: {hero.WillPower} PRC: {hero.Perception} LCK: {hero.Luck}</h4>
          </div>
        </div>
      </div> : <div></div>}
      {active === "levelUp" ? <div>
        <LevelUpScreen hero={hero}></LevelUpScreen>
      </div> : <div></div>}
    </div>
  )
}

export default CharacterSheet;