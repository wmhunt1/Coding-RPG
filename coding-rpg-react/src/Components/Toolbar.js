export function Toolbar(props) {
    return (<div style={{ marginBottom: "1%" }}>
        <button onClick={props.home}><h3>Home</h3></button>
        <button onClick={props.abil}><h3>Abilities</h3></button>
        <button onClick={props.cSheet}><h3>Character Sheet</h3></button>
        <button onClick={props.equip}><h3>Equipment</h3></button>
        <button onClick={props.fact}><h3>Factions</h3></button>
        <button onClick={props.inv}><h3>Inventory</h3></button>
        <button onClick={props.journal}><h3>Journal</h3></button>
        <button onClick={props.party}><h3>Party</h3></button>
        <button onClick={props.spells}><h3>Spells</h3></button>
        <button onClick={props.skill}><h3>Skills</h3></button>
        <button onClick={props.menu}><h3>Menu</h3></button>
        <button onClick={props.test}><h3>Tests</h3></button>
    </div>)
}
export default Toolbar