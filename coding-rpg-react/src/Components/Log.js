import '../App.css';
import { useState, useRef, useEffect } from "react";

function Log(props) {
    const messagesEndRef = useRef(null)
    const [log, setLog] = useState([props.log]);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [log]);
    const logList = log.map((message, index) => <li key={index}><h5>{message}</h5></li>)
    return (<div>
        <div style={{border: "solid"}}>
            <h3>{props.logName} Log</h3>
            <div style={{ overflowAnchor: "none", height: `185px`, overflow: "scroll", textAlign: "center" }}>
                <ul style={{listStyle: "none", paddingLeft: "0"}}>
                    {logList}
                </ul>
                <div ref={messagesEndRef}></div>
            </div>
        </div>
    </div>)
}
export default Log;