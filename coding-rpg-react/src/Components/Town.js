import { useState } from "react"
import Combat from "./Combat"
import Dialogue from "./Dialogue"
import Dungeon from "./Dungeon"
import SkillNode from "./SkillNode"
import Shop from "./Shop"
export function Town(props) {
    const [hero, setHero] = useState(props.hero)
    const [active, setActive] = useState("Town")
    const [dialogues, setDialogues] = useState(props.town.Dialogues)
    const [activeDialogue, setActiveDialogues] = useState(null)
    const [dungeons, setDungeon] = useState(props.town.Dungeons)
    const [activeDungeon, setActiveDungeon] = useState(null)
    const [encounters, setEncounters] = useState(props.town.Encounters)
    const [activeEncounter, setActiveEncounter] = useState(null)
    const [nodes, setNodes] = useState(props.town.Nodes)
    const [activeNode, setActiveNode] = useState(null)
    const [shops, setShops] = useState(props.town.Shops)
    const [activeShop, setActiveShop] = useState(null)
    function enterDialogue(dialogue) {
        setActiveDialogues(dialogue);
        setActive("Dialogue")
    }
    function enterDungeon(dungeon) {
        setActiveDungeon(dungeon);
        setActive("Dungeon")
    }
    function enterEncounter(encounter) {
        setActiveEncounter(encounter);
        setActive("Encounter")
    }
    function enterNode(node) {
        setActiveNode(node);
        setActive("Node")
    }
    function enterShop(shop) {
        setActiveShop(shop);
        setActive("Shop")
    }
    function leave(hero) {
        setActive("Town")
        props.parentCallback(hero);
    }
    const handleCallback = (childData) => {
        var newChar = childData
        setHero(newChar)
        props.parentCallback(newChar);
    }
    const dialogueList = dialogues.map((d, index) => <button key={index} className='menu-button' onClick={() => enterDialogue(d)}><h3>{d.Name}</h3></button>)
    const dungeonList = dungeons.map((d, index) => <button key={index} className='menu-button' onClick={() => enterDungeon(d)}><h3>{d.Name}</h3></button>)
    const encounterList = encounters.map((e, index) => <button key={index} className='menu-button' onClick={() => enterEncounter(e)}><h3>{e.Name}</h3></button>)
    const nodeList = nodes.map((n, index) => <button key={index} className='menu-button' onClick={() => enterNode(n)}><h3>{n.Name}</h3></button>)
    const shopList = shops.map((s, index) => <button key={index} className='menu-button' onClick={() => enterShop(s)}><h3>{s.Name}</h3></button>)
    return (
        <div>
            <h2>{props.town.Name}</h2>
            {active === "Town" ? <div>
                {dialogueList.length > 0 ? <div><h3>People</h3>{dialogueList}</div> : <div></div>}
                {dungeonList.length > 0 ? <div><h3>Dungeons</h3>{dungeonList}</div> : <div></div>}
                {encounterList.length > 0 ? <div><h3>Encounters</h3>{encounterList}</div> : <div></div>}
                {nodeList.length > 0 ? <div><h3>Skills</h3>{nodeList}</div> : <div></div>}
                {shopList.length > 0 ? <div><h3>Shops</h3>{shopList}</div> : <div></div>}
            </div> : <div></div>}
            {active === "Dialogue" ? <Dialogue parentCallback={handleCallback} hero={hero} talk={activeDialogue} Back={() => leave(hero)}></Dialogue> : <div></div>}
            {active === "Dungeon" ? <Dungeon parentCallback={handleCallback} hero={hero} dungeon={activeDungeon} Back={() => leave(hero)}></Dungeon> : <div></div>}
            {active === "Encounter" ? <Combat parentCallback={handleCallback} hero={hero} node={activeEncounter} Back={() => leave(hero)}></Combat> : <div></div>}
            {active === "Node" ? <SkillNode parentCallback={handleCallback} hero={hero} node={activeNode} Back={() => leave(hero)}></SkillNode> : <div></div>}
            {active === "Shop" ? <Shop parentCallback={handleCallback} hero={hero} node={activeShop} Back={() => leave(hero)}></Shop> : <div></div>}

        </div>
    )
}
export default Town