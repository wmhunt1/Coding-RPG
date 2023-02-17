import '../App.css';
import { useState, useRef, useEffect } from "react";

function Log(props) {
  const logRef = useRef(null)
  const [log, setLog] = useState(props.log);
  const [active, setActive] = useState("Default");
  const logList = log.map((message, index) => <li key={index}><h5>{message}</h5></li>)
  const combatList = log.filter(message => message.startsWith("C")).map((message, index) => <li key={index}><h5>{message}</h5></li>)
  const gameList = log.filter(message => message.startsWith("G")).map((message, index) => <li key={index}><h5>{message}</h5></li>)
  const questList = log.filter(message => message.startsWith("Q")).map((message, index) => <li key={index}><h5>{message}</h5></li>)
  const skillList = log.filter(message => message.startsWith("S")).map((message, index) => <li key={index}><h5>{message}</h5></li>)
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
    <button onClick={() => setActive("Default")}>All Messages</button><button onClick={() => setActive("Combat")}>Combat Messages</button><button onClick={() => setActive("Game")}>Game Messages</button><button onClick={() => setActive("Skill")}>Skill Messages</button><button onClick={() => setActive("Quest")}>Quest Messages</button>
    <div style={{ border: "solid", marginTop: "1%" }}>
      <div ref={logRef} style={{ height: `175px`, overflow: "scroll", textAlign: "center" }}>
        {active === "Default" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{logList}</ul> : <div></div>}
        {active === "Combat" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{combatList}</ul> : <div></div>}
        {active === "Game" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{gameList}</ul> : <div></div>}
        {active === "Quest" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{questList}</ul> : <div></div>}
        {active === "Skill" ? <ul style={{ listStyle: "none", paddingLeft: "0" }}>{skillList}</ul> : <div></div>}
      </div>
    </div>
  </div>)
}
export default Log;