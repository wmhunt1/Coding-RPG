import { useState } from "react"
import DialogueWindow from "./DialogueWindow"
import { AdvanceConversation, NextResponses } from "../Scripts/DialogueScripts"

export function Dialogue(props) {
    const [hero, setHero] = useState(props.hero)
    const [dialogue, setDialogue] = useState(props.talk)
    const [conversationLog, setConversationLog] = useState([props.talk.Conversation.npcSide[1].Line])
    const [responses, setResponses] = useState(props.talk.Conversation.heroSide[0].Options)
    const responseOptions = responses.map((option, index) => <h4 style={{ display: "inline-block", marginLeft: ".5%", marginRight: ".5%" }} key={index}><button onClick={() => handleResponse(hero, dialogue, conversationLog, option)}>{option[0]}</button></h4>)
    function handleResponse(char1, dialogue, conversation, option) {
        dialogue.responseEffect(char1, option[1])
        var next = AdvanceConversation(char1, dialogue, conversation, option).Next;
        setResponses(NextResponses(dialogue, next));
        setConversationLog(conversation)
        setHero(char1)
        props.parentCallback(char1);
    }
    return (<div>
        <div><h3>{dialogue.Name}</h3></div>
        <div>
            <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto" }}>
                <DialogueWindow log={conversationLog} logName="Conversation"></DialogueWindow>
            </div>
            {responses[0][0] !== "Leave" ? <div><h3 style={{ display: "inline-block" }}>{hero.Name}'s Responses:</h3> {responseOptions} </div> : <div><h3>Conversation Finished</h3></div>}

            <button style={{ marginTop: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
        </div>
    </div>)
}
export default Dialogue