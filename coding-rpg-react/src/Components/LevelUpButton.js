export function LevelUpButton(props) {
    return (<div style={{ display: "inline-block", paddingLeft: "1%", paddingRight: "1%" }}>
        <button onClick={props.click}><h4>Level Up</h4></button>
    </div>)
}
export default LevelUpButton