import { useState } from 'react';
import '../App.css';
import './Game.css';
import { UnEquip } from '../Scripts/ItemScripts';

function Equipment(props) {
    const [hero, setHero] = useState(props.hero);
    const [log, setLog] = useState(props.log)
    const [weapon, setWeapon] = useState(props.hero.Equipment.Weapon)
    const [offHand, setOffHand] = useState(props.hero.Equipment.OffHand)
    const [head, setHead] = useState(props.hero.Equipment.Head)
    const [torso, setTorso] = useState(props.hero.Equipment.Torso)
    const [legs, setLegs] = useState(props.hero.Equipment.Legs)
    const [hands, setHands] = useState(props.hero.Equipment.Hands)
    const [feet, setFeet] = useState(props.hero.Equipment.Feet)
    const [back, setBack] = useState(props.hero.Equipment.Back)
    const [neck, setNeck] = useState(props.hero.Equipment.Neck)
    const [ring, setRing] = useState(props.hero.Equipment.Ring)
    function handleUnEquip(char, inventory, item, log) {
        //if (char.Name !== "Dog") {
        UnEquip(char, inventory, item, log)
        setHero(char);
        setWeapon(char.Equipment.Weapon)
        setOffHand(char.Equipment.OffHand)
        setHead(char.Equipment.Head)
        setTorso(char.Equipment.Torso)
        setLegs(char.Equipment.Legs)
        setHands(char.Equipment.Hands)
        setFeet(char.Equipment.Feet)
        setBack(char.Equipment.Back)
        setNeck(char.Equipment.Neck)
        setRing(char.Equipment.Ring)
        props.parentCallback(log);
        //}
    }
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <div>
                <div>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, head, log)}>
                        <h5>
                            Head
                            <ul>
                                <li>{head.Name}</li>
                                <li>{head.Protection} - {head.ProtectionType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                </div>
                <div>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, back, log)}>
                        <h5>
                            Back
                            <ul>
                                <li>{back.Name}</li>
                            </ul>
                        </h5>
                    </button>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, neck, log)}>
                        <h5>
                            Neck
                            <ul>
                                <li>{neck.Name}</li>
                            </ul>
                        </h5>
                    </button>
                </div>
                <div>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, weapon, log)}>
                        <h5>
                            Weapon
                            <ul>
                                <li>{weapon.Name}</li>
                                <li>{weapon.Damage} - {weapon.DamageType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, torso, log)}>
                        <h5>
                            Torso
                            <ul>
                                <li>{torso.Name}</li>
                                <li>{torso.Protection} - {torso.ProtectionType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, offHand, log)}>
                        {offHand.SubType !== "Weapon" && offHand.SubType !== "Shield" ? <h5>
                            OffHand
                            <ul>
                                <li>{offHand.Name}</li>
                            </ul>
                        </h5> : <div></div>}
                        {offHand.SubType === "Weapon" ? <h5>
                            OffHand
                            <ul>
                                <li>{offHand.Name}</li>
                                <li>{offHand.Damage} - {offHand.DamageType.Name}</li>
                            </ul>
                        </h5> : <div></div>}
                        {offHand.SubType === "Shield" ? <h5>
                            OffHand
                            <ul>
                                <li>{offHand.Name}</li>
                                <li>{offHand.Protection} - {offHand.ProtectionType.Name}</li>
                            </ul>
                        </h5> : <div></div>}
                    </button>
                </div>
                <div>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, legs, log)}>
                        <h5>
                            Legs
                            <ul>
                                <li>{legs.Name}</li>
                                <li>{legs.Protection} - {legs.ProtectionType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                </div>
                <div>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, hands, log)}>
                        <h5>
                            Hands
                            <ul>
                                <li>{hands.Name}</li>
                                <li>{hands.Protection} - {hands.ProtectionType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, feet, log)}>
                        <h5>
                            Feet
                            <ul>
                                <li>{feet.Name}</li>
                                <li>{feet.Protection} - {feet.ProtectionType.Name}</li>
                            </ul>
                        </h5>
                    </button>
                    <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, ring, log)}>
                        <h5>
                            Ring
                            <ul>
                                <li>{ring.Name}</li>
                            </ul>
                        </h5>
                    </button>
                </div>
            </div>
            {/* <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
        </div>
    );
}

export default Equipment;