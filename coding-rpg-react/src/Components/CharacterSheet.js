import { useState } from 'react';
import '../App.css';
import './Game.css'
import { CheckForLevelUp } from '../Scripts/CharacterScripts';
import LevelUpButton from './LevelUpButton';
import LevelUpScreen from './LevelUpScreen';
function CharacterSheet(props) {
  const [hero, setHero] = useState(props.hero);
  const [log, setLog] = useState(props.log);
  const [active, setActive] = useState("charSheet")
  const [currentXP, setCurrentXP] = useState(props.hero.CurrentXP)
  const [maxXP, setMaxXP] = useState(props.hero.MaxXP)
  const [title, setTitle] = useState(hero.Title)
  const [showTitles, setShowTitles] = useState(false)
  function handleCheckForLevelUp(char, log) {
    var check = CheckForLevelUp(char, log)
    if (check === true) {
      setActive("levelUp")
    }
    var newChar = char;
    setHero(newChar)
    setCurrentXP(newChar)
    setMaxXP(newChar)
    props.parentCallback(newChar);
  }
  function handleChangeTitle(hero, title) {
    hero.Title.titleRemoveEffect(hero)
    title.titleApplyEffect(hero)
    hero.Title = title;
    setTitle(title)
    setHero(hero)
  }
  function handleShowTitles(show) {
    setShowTitles(show)
  }
  const handleCallback = (childData) => {
    var newChar = childData
    setHero(newChar)
    setCurrentXP(newChar.CurrentXP)
    setMaxXP(newChar.MaxXP)
    props.parentCallback(newChar);
  }
  const titleList = hero.TitleList.sort((a, b) => a.Name.localeCompare(b.Name)).map((title, index) => <div key={index}>{title.Name} <button onClick={() => handleChangeTitle(hero, title)}>Select Title</button></div>)
  return (
    <div>
      {active === "charSheet" ? <div>
        {title.Name === "No Title" ? <h2>{hero.Name}'s Character Sheet</h2> : <h2>{title} {hero.Name}'s Character Sheet</h2>}
        {hero.TitleList.length > 1 ?
          <div>
            {showTitles === false ? <div><button onClick={() => handleShowTitles(true)}>Show Titles</button></div> : <div><button onClick={() => handleShowTitles(false)}>Hide Titles</button><div>{titleList}</div></div>}
          </div> : <div></div>}
        <div className='attribute'>
          <h4>Level: {hero.Level}, XP: {hero.CurrentXP}/{hero.MaxXP} {currentXP >= maxXP ? <LevelUpButton click={() => handleCheckForLevelUp(hero, log)} ></LevelUpButton> : <div></div>}</h4>
          <h3>Base Stats</h3>
          <div className='attribute-line' style={{ borderColor: "red" }}>
            <div className='attribute-h4'>{hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty > hero.BaseStats.HP.Current ? <h4 style={{ color: "green" }}>HP {hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}/{hero.BaseStats.HP.Max + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty < hero.BaseStats.HP.Current ? <h4 style={{ color: "red" }}>HP {hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}/{hero.BaseStats.HP.Max + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty === hero.BaseStats.HP.Current ? <h4 style={{ color: "black" }}>HP {hero.BaseStats.HP.Current + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}/{hero.BaseStats.HP.Max + hero.BaseStats.HP.Bonus - hero.BaseStats.HP.Penalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty > hero.BaseStats.HP.Regen ? <h4 style={{ color: "green" }}> Regen {hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty < hero.BaseStats.HP.Regen ? <h4 style={{ color: "red" }}> Regen {hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty === hero.BaseStats.HP.Regen ? <h4 style={{ color: "black" }}> Regen {hero.BaseStats.HP.Regen + hero.BaseStats.HP.RegenBonus - hero.BaseStats.HP.RegenPenalty}</h4> : <div></div>}</div>
          </div>
          <div className='attribute-line' style={{ borderColor: "blue" }}>
            <div className='attribute-h4'>{hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty > hero.BaseStats.MP.Current ? <h4 style={{ color: "green" }}>MP {hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}/{hero.BaseStats.MP.Max + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty < hero.BaseStats.MP.Current ? <h4 style={{ color: "red" }}>MP {hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}/{hero.BaseStats.MP.Max + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty === hero.BaseStats.MP.Current ? <h4 style={{ color: "black" }}>MP {hero.BaseStats.MP.Current + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}/{hero.BaseStats.MP.Max + hero.BaseStats.MP.Bonus - hero.BaseStats.MP.Penalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty > hero.BaseStats.MP.Regen ? <h4 style={{ color: "green" }}> Regen {hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty < hero.BaseStats.MP.Regen ? <h4 style={{ color: "red" }}> Regen {hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty === hero.BaseStats.MP.Regen ? <h4 style={{ color: "black" }}> Regen {hero.BaseStats.MP.Regen + hero.BaseStats.MP.RegenBonus - hero.BaseStats.MP.RegenPenalty}</h4> : <div></div>}</div>
          </div>
          <div className='attribute-line' style={{ borderColor: "darkgreen" }}>
            <div className='attribute-h4'>{hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty > hero.BaseStats.SP.Current ? <h4 style={{ color: "green" }}>SP {hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}/{hero.BaseStats.SP.Max + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty < hero.BaseStats.SP.Current ? <h4 style={{ color: "red" }}>SP {hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}/{hero.BaseStats.SP.Max + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}</h4> : <div></div>}
              {hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty === hero.BaseStats.SP.Current ? <h4 style={{ color: "black" }}>SP {hero.BaseStats.SP.Current + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}/{hero.BaseStats.SP.Max + hero.BaseStats.SP.Bonus - hero.BaseStats.SP.Penalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty > hero.BaseStats.SP.Regen ? <h4 style={{ color: "green" }}> Regen {hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty < hero.BaseStats.SP.Regen ? <h4 style={{ color: "red" }}> Regen {hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty}</h4> : <div></div>}
              {hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty === hero.BaseStats.SP.Regen ? <h4 style={{ color: "black" }}> Regen {hero.BaseStats.SP.Regen + hero.BaseStats.SP.RegenBonus - hero.BaseStats.SP.RegenPenalty}</h4> : <div></div>}</div>
          </div>
        </div>
        <div>
          <div className='attribute'>
            <h3>Phsyical Attributes</h3>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty > hero.Attributes.Strength.Value ? <h4 style={{ color: "green" }}>STR {hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty}</h4> : <div></div>}
                {hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty < hero.Attributes.Strength.Value ? <h4 style={{ color: "red" }}>STR {hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty}</h4> : <div></div>}
                {hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty === hero.Attributes.Strength.Value ? <h4 style={{ color: "black" }}>STR {hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty > hero.Attributes.Constitution.Value ? <h4 style={{ color: "green" }}>CON {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty}</h4> : <div></div>}
                {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty < hero.Attributes.Constitution.Value ? <h4 style={{ color: "red" }}>CON {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty}</h4> : <div></div>}
                {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty === hero.Attributes.Constitution.Value ? <h4 style={{ color: "black" }}>CON {hero.Attributes.Constitution.Value + hero.Attributes.Constitution.Bonus - hero.Attributes.Constitution.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty > hero.Attributes.Dexterity.Value ? <h4 style={{ color: "green" }}>DEX {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty}</h4> : <div></div>}
                {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty < hero.Attributes.Dexterity.Value ? <h4 style={{ color: "red" }}>DEX {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty}</h4> : <div></div>}
                {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty === hero.Attributes.Dexterity.Value ? <h4 style={{ color: "black" }}>DEX {hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty > hero.Attributes.Speed.Value ? <h4 style={{ color: "green" }}>SPD {hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty}</h4> : <div></div>}
                {hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty < hero.Attributes.Speed.Value ? <h4 style={{ color: "red" }}>SPD {hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty}</h4> : <div></div>}
                {hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty === hero.Attributes.Speed.Value ? <h4 style={{ color: "black" }}>SPD {hero.Attributes.Speed.Value + hero.Attributes.Speed.Bonus - hero.Attributes.Speed.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty > hero.Attributes.Beauty.Value ? <h4 style={{ color: "green" }}>BTY {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty}</h4> : <div></div>}
                {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty < hero.Attributes.Beauty.Value ? <h4 style={{ color: "red" }}>BTY {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty}</h4> : <div></div>}
                {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty === hero.Attributes.Beauty.Value ? <h4 style={{ color: "black" }}>BTY {hero.Attributes.Beauty.Value + hero.Attributes.Beauty.Bonus - hero.Attributes.Beauty.Penalty}</h4> : <div></div>}</div>
            </div>
          </div>
          <div className='attribute'>
            <h3>Mental Attributes</h3>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty > hero.Attributes.Intelligence.Value ? <h4 style={{ color: "green" }}>INT {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty}</h4> : <div></div>}
                {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty < hero.Attributes.Intelligence.Value ? <h4 style={{ color: "red" }}>INT {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty}</h4> : <div></div>}
                {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty === hero.Attributes.Intelligence.Value ? <h4 style={{ color: "black" }}>INT {hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty}</h4> : <div></div>}</div>
            </div> <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty > hero.Attributes.Wisdom.Value ? <h4 style={{ color: "green" }}>WIS {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty}</h4> : <div></div>}
                {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty < hero.Attributes.Wisdom.Value ? <h4 style={{ color: "red" }}>WIS {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty}</h4> : <div></div>}
                {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty === hero.Attributes.Wisdom.Value ? <h4 style={{ color: "black" }}>WIS {hero.Attributes.Wisdom.Value + hero.Attributes.Wisdom.Bonus - hero.Attributes.Wisdom.Penalty}</h4> : <div></div>}</div>
            </div> <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty > hero.Attributes.Charisma.Value ? <h4 style={{ color: "green" }}>CHA {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty}</h4> : <div></div>}
                {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty < hero.Attributes.Charisma.Value ? <h4 style={{ color: "red" }}>CHA {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty}</h4> : <div></div>}
                {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty === hero.Attributes.Charisma.Value ? <h4 style={{ color: "black" }}>CHA {hero.Attributes.Charisma.Value + hero.Attributes.Charisma.Bonus - hero.Attributes.Charisma.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty > hero.Attributes.WillPower.Value ? <h4 style={{ color: "green" }}>WLP {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty}</h4> : <div></div>}
                {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty < hero.Attributes.WillPower.Value ? <h4 style={{ color: "red" }}>WLP {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty}</h4> : <div></div>}
                {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty === hero.Attributes.WillPower.Value ? <h4 style={{ color: "black" }}>WLP {hero.Attributes.WillPower.Value + hero.Attributes.WillPower.Bonus - hero.Attributes.WillPower.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty > hero.Attributes.Perception.Value ? <h4 style={{ color: "green" }}>PRC {hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty}</h4> : <div></div>}
                {hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty < hero.Attributes.Perception.Value ? <h4 style={{ color: "red" }}>PRC {hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty}</h4> : <div></div>}
                {hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty === hero.Attributes.Perception.Value ? <h4 style={{ color: "black" }}>PRC {hero.Attributes.Perception.Value + hero.Attributes.Perception.Bonus - hero.Attributes.Perception.Penalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty > hero.Attributes.Luck.Value ? <h4 style={{ color: "green" }}>LCK {hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty}</h4> : <div></div>}
                {hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty < hero.Attributes.Luck.Value ? <h4 style={{ color: "red" }}>LCK {hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty}</h4> : <div></div>}
                {hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty === hero.Attributes.Luck.Value ? <h4 style={{ color: "black" }}>LCK{hero.Attributes.Luck.Value + hero.Attributes.Luck.Bonus - hero.Attributes.Luck.Penalty}</h4> : <div></div>}</div>
            </div>
          </div>
        </div>
        {/* <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
      </div> : <div></div>}
      {active === "levelUp" ? <div>
        <LevelUpScreen parentCallback={handleCallback} hero={hero} log={log} Back={() => setActive("charSheet")}></LevelUpScreen>
      </div> : <div></div>}
    </div>
  )
}

export default CharacterSheet;