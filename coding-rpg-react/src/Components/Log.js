import '../App.css';
import { useState, useRef, useEffect } from "react";

function Log(props) {
    const logRef = useRef(null)
    const [log, setLog] = useState(props.log);
    const logList = log.map((message, index) => <li key={index}><h5>{message}</h5></li>)
    useEffect(() => {
        if(logRef && logRef.current) {
          const element = logRef.current;
          element.scroll({
            top: element.scrollHeight,
            left: 0,
            behavior: "smooth"
          })
        }
      }, [logRef, logList])
    return (<div>
        <div style={{border: "solid", marginTop: "1%"}}>
            <div ref = {logRef }style={{height: `185px`, overflow: "scroll", textAlign: "center" }}>
                <ul style={{listStyle: "none", paddingLeft: "0"}}>{logList}</ul>
            </div>
        </div>
    </div>)
}
export default Log;