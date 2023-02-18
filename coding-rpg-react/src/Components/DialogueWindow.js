import '../App.css';
import { useState, useRef, useEffect } from "react";

function DialogueWindow(props) {
    const logRef = useRef(null)
    const [log, setLog] = useState(props.log);
    const [active, setActive] = useState("Default");
    const logList = log.map((message, index) => <li key={index}><h5>{message}</h5></li>)
    useEffect(() => {
        if (logRef && logRef.current) {
            const element = logRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }
    }, [logRef, logList])
    return (<div>
        <div style={{ border: "solid", marginTop: "1%" }}>
            <div ref={logRef} style={{ height: `175px`, overflow: "scroll", textAlign: "center" }}>
                {active === "Default" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{logList}</ul> : <div></div>}
            </div>
        </div>
    </div>)
}
export default DialogueWindow;