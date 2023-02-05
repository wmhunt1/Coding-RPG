import { useState } from "react";

export function AttributeIncrease(props) {
    const [attribute, setAttribute] = useState("Strength");
  
    const handleChange = (event) => {
      setAttribute(event.target.value)
      console.log(event.target.value)
      props.parentCallback(event.target.value);
    }
    return (
      <form>
        <select value={attribute} onChange={handleChange}>
          <option value="Strength">Strength</option>
          <option value="Constitution">Constitution</option>
          <option value="Dexterity">Dexterity</option>
          <option value="Intelligence">Intelligence</option>
          <option value="Wisdom">Wisdom</option>
          <option value="Charisma">Charisma</option>
          <option value="Perception">Perception</option>
          <option value="Luck">Luck</option>
          <option value="Beauty">Beauty</option>
          <option value="Speed">Speed</option>
        </select>
      </form>
    )
  }