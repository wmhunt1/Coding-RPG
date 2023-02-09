import { useState } from "react";
import '../App.css';
import './Game.css';

function Journal(props) {
    const [quests, setQuests] = useState(props.hero.Journal)
    const [list, setList] = useState("Default")
    const questList = quests.sort((a, b) => a.Name.localeCompare(b.Name)).map((quest, index) => <h4 key={index}>{quest.Name}({quest.Status}): {quest.Description} {quest.ObjectiveProgress}/{quest.Objective}</h4>)
    const inProgressQuestList = quests.sort((a, b) => a.Name.localeCompare(b.Name)).filter(quest => quest.Status === "In Progress").map((quest, index) => <h4 key={index}>{quest.Name}({quest.Status}): {quest.Description} {quest.ObjectiveProgress}/{quest.Objective}</h4>)
    const completedQuestList = quests.sort((a, b) => a.Name.localeCompare(b.Name)).filter(quest => quest.Status === "Completed").map((quest, index) => <h4 key={index}>{quest.Name}({quest.Status}): {quest.Description} {quest.ObjectiveProgress}/{quest.Objective}</h4>)
    return (<div style = {{overflow: "scroll"}}>
        <h2>{props.hero.Name}'s Journal</h2>
        <h5>Quest Filters: <button onClick={() => setList("In Progress")}>In Progress</button> <button onClick={() => setList("Completed")}>Completed</button> <button onClick={() => setList("Default")}>Clear</button></h5>
        {list === "Default" ? <div>{questList.length > 0 ? <div>{questList}</div> : <div><h4>No Quests</h4></div>}</div> : <div></div>}
        {list === "In Progress" ? <div>{inProgressQuestList.length > 0 ? <div>{inProgressQuestList}</div> : <div><h4>No In Progress Quests</h4></div>}</div> : <div></div>}
        {list === "Completed" ? <div>{completedQuestList.length > 0 ? <div>{completedQuestList}</div> : <div><h4>No Equipable Items</h4></div>}</div> : <div></div>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default Journal;