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
            <div className='attribute-h4'>{hero.CurrentHP + hero.HPBonus - hero.HPPenalty > hero.CurrentHP ? <h4 style={{ color: "green" }}>HP {hero.CurrentHP + hero.HPBonus - hero.HPPenalty}/{hero.MaxHP + hero.HPBonus - hero.HPPenalty}</h4> : <div></div>}
              {hero.CurrentHP + hero.HPBonus - hero.HPPenalty < hero.CurrentHP ? <h4 style={{ color: "red" }}>HP {hero.CurrentHP + hero.HPBonus - hero.HPPenalty}/{hero.MaxHP + hero.HPBonus - hero.HPPenalty}</h4> : <div></div>}
              {hero.CurrentHP + hero.HPBonus - hero.HPPenalty === hero.CurrentHP ? <h4 style={{ color: "black" }}>HP {hero.CurrentHP + hero.HPBonus - hero.HPPenalty}/{hero.MaxHP + hero.HPBonus - hero.HPPenalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty > hero.HPRegen ? <h4 style={{ color: "green" }}> Regen {hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty}</h4> : <div></div>}
              {hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty < hero.HPRegen ? <h4 style={{ color: "red" }}> Regen {hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty}</h4> : <div></div>}
              {hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty === hero.HPRegen ? <h4 style={{ color: "black" }}> Regen {hero.HPRegen + hero.HPRegenBonus - hero.HPRegenPenalty}</h4> : <div></div>}</div>
          </div>
          <div className='attribute-line' style={{ borderColor: "blue" }}>
            <div className='attribute-h4'>{hero.CurrentMP + hero.MPBonus - hero.MPPenalty > hero.CurrentMP ? <h4 style={{ color: "green" }}>MP {hero.CurrentMP + hero.MPBonus - hero.MPPenalty}/{hero.MaxMP + hero.MPBonus - hero.MPPenalty}</h4> : <div></div>}
              {hero.CurrentMP + hero.MPBonus - hero.MPPenalty < hero.CurrentMP ? <h4 style={{ color: "red" }}>MP {hero.CurrentMP + hero.MPBonus - hero.MPPenalty}/{hero.MaxMP + hero.MPBonus - hero.MPPenalty}</h4> : <div></div>}
              {hero.CurrentMP + hero.MPBonus - hero.MPPenalty === hero.CurrentMP ? <h4 style={{ color: "black" }}>MP {hero.CurrentMP + hero.MPBonus - hero.MPPenalty}/{hero.MaxMP + hero.MPBonus - hero.MPPenalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty > hero.MPRegen ? <h4 style={{ color: "green" }}> Regen {hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty}</h4> : <div></div>}
              {hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty < hero.MPRegen ? <h4 style={{ color: "red" }}> Regen {hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty}</h4> : <div></div>}
              {hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty === hero.MPRegen ? <h4 style={{ color: "black" }}> Regen {hero.MPRegen + hero.MPRegenBonus - hero.MPRegenPenalty}</h4> : <div></div>}</div>
          </div>
          <div className='attribute-line' style={{ borderColor: "darkgreen" }}>
            <div className='attribute-h4'>{hero.CurrentSP + hero.SPBonus - hero.SPPenalty > hero.CurrentSP ? <h4 style={{ color: "green" }}>SP {hero.CurrentSP + hero.SPBonus - hero.SPPenalty}/{hero.MaxSP + hero.SPBonus - hero.SPPenalty}</h4> : <div></div>}
              {hero.CurrentSP + hero.SPBonus - hero.SPPenalty < hero.CurrentSP ? <h4 style={{ color: "red" }}>SP {hero.CurrentSP + hero.SPBonus - hero.SPPenalty}/{hero.MaxSP + hero.SPBonus - hero.SPPenalty}</h4> : <div></div>}
              {hero.CurrentSP + hero.SPBonus - hero.SPPenalty === hero.CurrentSP ? <h4 style={{ color: "black" }}>SP {hero.CurrentSP + hero.SPBonus - hero.SPPenalty}/{hero.MaxSP + hero.SPBonus - hero.SPPenalty}</h4> : <div></div>}</div>
            <div className='attribute-h4'>{hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty > hero.SPRegen ? <h4 style={{ color: "green" }}> Regen {hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty}</h4> : <div></div>}
              {hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty < hero.SPRegen ? <h4 style={{ color: "red" }}> Regen {hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty}</h4> : <div></div>}
              {hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty === hero.SPRegen ? <h4 style={{ color: "black" }}> Regen {hero.SPRegen + hero.SPRegenBonus - hero.SPRegenPenalty}</h4> : <div></div>}</div>
          </div>
        </div>
        <div>
          <div className='attribute'>
            <h3>Phsyical Attributes</h3>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Strength + hero.StrBonus - hero.StrPenalty > hero.Strength ? <h4 style={{ color: "green" }}>STR {hero.Strength + hero.StrBonus - hero.StrPenalty}</h4> : <div></div>}
                {hero.Strength + hero.StrBonus - hero.StrPenalty < hero.Strength ? <h4 style={{ color: "red" }}>STR {hero.Strength + hero.StrBonus - hero.StrPenalty}</h4> : <div></div>}
                {hero.Strength + hero.StrBonus - hero.StrPenalty === hero.Strength ? <h4 style={{ color: "black" }}>STR {hero.Strength + hero.StrBonus - hero.StrPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Constitution + hero.ConBonus - hero.ConPenalty > hero.Constitution ? <h4 style={{ color: "green" }}>CON {hero.Constitution + hero.ConBonus - hero.ConPenalty}</h4> : <div></div>}
                {hero.Constitution + hero.ConBonus - hero.ConPenalty < hero.Constitution ? <h4 style={{ color: "red" }}>CON {hero.Constitution + hero.ConBonus - hero.ConPenalty}</h4> : <div></div>}
                {hero.Constitution + hero.ConBonus - hero.ConPenalty === hero.Constitution ? <h4 style={{ color: "black" }}>CON {hero.Constitution + hero.ConBonus - hero.ConPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Dexterity + hero.DexBonus - hero.DexPenalty > hero.Dexterity ? <h4 style={{ color: "green" }}>DEX {hero.Dexterity + hero.DexBonus - hero.DexPenalty}</h4> : <div></div>}
                {hero.Dexterity + hero.DexBonus - hero.DexPenalty < hero.Dexterity ? <h4 style={{ color: "red" }}>DEX {hero.Dexterity + hero.DexBonus - hero.DexPenalty}</h4> : <div></div>}
                {hero.Dexterity + hero.DexBonus - hero.DexPenalty === hero.Dexterity ? <h4 style={{ color: "black" }}>DEX {hero.Dexterity + hero.DexBonus - hero.DexPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Speed + hero.SpdBonus - hero.SpdPenalty > hero.Speed ? <h4 style={{ color: "green" }}>BTY {hero.Speed + hero.SpdBonus - hero.SpdPenalty}</h4> : <div></div>}
                {hero.Speed + hero.SpdBonus - hero.SpdPenalty < hero.Speed ? <h4 style={{ color: "red" }}>BTY {hero.Speed + hero.SpdBonus - hero.SpdPenalty}</h4> : <div></div>}
                {hero.Speed + hero.SpdBonus - hero.SpdPenalty === hero.Speed ? <h4 style={{ color: "black" }}>BTY {hero.Speed + hero.SpdBonus - hero.SpdPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Beauty + hero.BtyBonus - hero.BtyPenalty > hero.Beauty ? <h4 style={{ color: "green" }}>SPD {hero.Beauty + hero.BtyBonus - hero.BtyPenalty}</h4> : <div></div>}
                {hero.Beauty + hero.BtyBonus - hero.BtyPenalty < hero.Beauty ? <h4 style={{ color: "red" }}>SPD {hero.Beauty + hero.BtyBonus - hero.BtyPenalty}</h4> : <div></div>}
                {hero.Beauty + hero.BtyBonus - hero.BtyPenalty === hero.Beauty ? <h4 style={{ color: "black" }}>SPD {hero.Beauty + hero.BtyBonus - hero.BtyPenalty}</h4> : <div></div>}</div>
            </div>
          </div>
          <div className='attribute'>
            <h3>Mental Attributes</h3>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Intelligence + hero.IntBonus - hero.IntPenalty > hero.Intelligence ? <h4 style={{ color: "green" }}>INT {hero.Intelligence + hero.IntBonus - hero.IntPenalty}</h4> : <div></div>}
                {hero.Intelligence + hero.IntBonus - hero.IntPenalty < hero.Intelligence ? <h4 style={{ color: "red" }}>INT {hero.Intelligence + hero.IntBonus - hero.IntPenalty}</h4> : <div></div>}
                {hero.Intelligence + hero.IntBonus - hero.IntPenalty === hero.Intelligence ? <h4 style={{ color: "black" }}>INT {hero.Intelligence + hero.IntBonus - hero.IntPenalty}</h4> : <div></div>}</div>
            </div> <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Wisdom + hero.WisBonus - hero.WisPenalty > hero.Wisdom ? <h4 style={{ color: "green" }}>WIS {hero.Wisdom + hero.WisBonus - hero.WisPenalty}</h4> : <div></div>}
                {hero.Wisdom + hero.WisBonus - hero.WisPenalty < hero.Wisdom ? <h4 style={{ color: "red" }}>WIS {hero.Wisdom + hero.WisBonus - hero.WisPenalty}</h4> : <div></div>}
                {hero.Wisdom + hero.WisBonus - hero.WisPenalty === hero.Wisdom ? <h4 style={{ color: "black" }}>WIS {hero.Wisdom + hero.WisBonus - hero.WisPenalty}</h4> : <div></div>}</div>
            </div> <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Charisma + hero.ChaBonus - hero.ChaPenalty > hero.Charisma ? <h4 style={{ color: "green" }}>CHA {hero.Charisma + hero.ChaBonus - hero.ChaPenalty}</h4> : <div></div>}
                {hero.Charisma + hero.ChaBonus - hero.ChaPenalty < hero.Charisma ? <h4 style={{ color: "red" }}>CHA {hero.Charisma + hero.ChaBonus - hero.ChaPenalty}</h4> : <div></div>}
                {hero.Charisma + hero.ChaBonus - hero.ChaPenalty === hero.Charisma ? <h4 style={{ color: "black" }}>CHA {hero.Charisma + hero.ChaBonus - hero.ChaPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.WillPower + hero.WlpBonus - hero.WlpPenalty > hero.WillPower ? <h4 style={{ color: "green" }}>WLP {hero.WillPower + hero.WlpBonus - hero.WlpPenalty}</h4> : <div></div>}
                {hero.WillPower + hero.WlpBonus - hero.WlpPenalty < hero.WillPower ? <h4 style={{ color: "red" }}>WLP {hero.WillPower + hero.WlpBonus - hero.WlpPenalty}</h4> : <div></div>}
                {hero.WillPower + hero.WlpBonus - hero.WlpPenalty === hero.WillPower ? <h4 style={{ color: "black" }}>WLP {hero.WillPower + hero.WlpBonus - hero.WlpPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Perception + hero.PrcBonus - hero.PrcPenalty > hero.Perception ? <h4 style={{ color: "green" }}>PRC {hero.Perception + hero.PrcBonus - hero.PrcPenalty}</h4> : <div></div>}
                {hero.Perception + hero.PrcBonus - hero.PrcPenalty < hero.Perception ? <h4 style={{ color: "red" }}>PRC {hero.Perception + hero.PrcBonus - hero.PrcPenalty}</h4> : <div></div>}
                {hero.Perception + hero.PrcBonus - hero.PrcPenalty === hero.Perception ? <h4 style={{ color: "black" }}>PRC {hero.Perception + hero.PrcBonus - hero.PrcPenalty}</h4> : <div></div>}</div>
            </div>
            <div className='attribute-line'>
              <div className='attribute-h4'>{hero.Luck + hero.LckBonus - hero.LckPenalty > hero.Luck ? <h4 style={{ color: "green" }}>LCK {hero.Luck + hero.LckBonus - hero.LckPenalty}</h4> : <div></div>}
                {hero.Luck + hero.LckBonus - hero.LckPenalty < hero.Luck ? <h4 style={{ color: "red" }}>LCK {hero.Luck + hero.LckBonus - hero.LckPenalty}</h4> : <div></div>}
                {hero.Luck + hero.LckBonus - hero.LckPenalty === hero.Luck ? <h4 style={{ color: "black" }}>LCK{hero.Luck + hero.LckBonus - hero.LckPenalty}</h4> : <div></div>}</div>
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