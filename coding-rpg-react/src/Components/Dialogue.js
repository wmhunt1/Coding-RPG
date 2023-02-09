import { useState } from "react"
import Log from "./Log"
import { AdvanceConversation } from "../Scripts/DialogueScripts"

export function Dialogue(props) {
    const [hero, setHero] = useState(props.hero)
    const [char, setChar] = useState(props.talk.Char)
    const [dialogue, setDialogue] = useState(props.talk)
    const [conversationLog, setConversationLog] = useState(["Starting Conversation with " + props.talk.Char, props.talk.Char + props.talk.Conversation[0].Dialogue[0]])
    const [responses, setReponses] = useState(props.talk.Conversation[0].Responses)
    const [progress, setProgress] = useState(0)
    const responseOptions = responses.map((option, index) => <h4 style={{ display: "inline-block", marginLeft: ".5%", marginRight: ".5%" }} key={index}><button onClick={() => handleResponse(hero, char, dialogue, conversationLog, option, progress)}>{option[0]}</button></h4>)
    function handleResponse(char1, char2, dialogue, conversation, option, progress) {
        AdvanceConversation(char1, char2, dialogue, conversation, option, progress)
        setReponses(dialogue.Conversation[progress + 1].Responses)
        setProgress(progress + 1)
        setConversationLog(conversation)
        setHero(char1)
        props.parentCallback(char1);
    }
    return (<div>
        <div><h3>{char}</h3></div>

        <div>
            <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto" }}>
                <Log log={conversationLog} logName="Conversation"></Log>
            </div>
            {dialogue.Conversation[progress].Responses.length > 0 ? <div><h3 style={{ display: "inline-block" }}>{hero.Name}'s Responses:</h3> {responseOptions} </div> : <div><h3>Conversation Finished</h3></div>}

            <button style={{ marginTop: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
        </div>
    </div>)
}
export default Dialogue