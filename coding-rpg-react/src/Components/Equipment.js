import { useState } from 'react';
import '../App.css';
import './Game.css';
import { UnEquip } from '../Scripts/ItemScripts';
import { destructionSkill, shortBladeSkill } from '../Database/SkillsDB';
import { unEnchanted } from '../Database/EnchantmentsDB';

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
    const [bonuses, setBonuses] = useState([weapon, offHand, head, torso, legs, hands, feet, back, neck, ring])
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
        setBonuses(bonuses)
        props.parentCallback(log);
        //}
    }
    const bonusList = bonuses.filter(item => item.Enchantment.Name !== "UnEnchanted").map((item, index) => <li key={index}><h6>{item.Enchantment.Name}</h6></li>)
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <div style={{ display: 'inline-block', verticalAlign: "top", border: "solid", paddingRight: "1%", paddingLeft: "1%", marginRight: "1%", marginLeft: "1%", paddingBottom: "1%", width: "300px", height:"563px" }}>
                <h3>Stats And Bonuses</h3>
                <div></div>
                <h4>Total Damage</h4>
                {hero.Equipment.Weapon.Class === destructionSkill() ? <h4>{hero.Equipment.Weapon.Damage + hero.Attributes.Intelligence.Value + hero.Attributes.Intelligence.Bonus - hero.Attributes.Intelligence.Penalty + hero.BaseStats.Attack.Bonus - hero.BaseStats.Attack.Penalty}</h4> : <h4></h4>}
                {hero.Equipment.Weapon.Class !== destructionSkill() && hero.Equipment.Weapon.Class !== shortBladeSkill() ? <h4>{hero.Equipment.Weapon.Damage + hero.Attributes.Strength.Value + hero.Attributes.Strength.Bonus - hero.Attributes.Strength.Penalty + hero.BaseStats.Attack.Bonus - hero.BaseStats.Attack.Penalty}</h4> : <h4></h4>}
                {hero.Equipment.Weapon.Class === shortBladeSkill() ? <h4>{hero.Equipment.Weapon.Damage + hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty + hero.BaseStats.Attack.Bonus - hero.BaseStats.Attack.Penalty}</h4> : <h4></h4>}
                <h4>Total Protection</h4>
                {offHand.SubType !== "Shield" ? <h4>{head.Protection + torso.Protection + legs.Protection + hands.Protection + feet.Protection + hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty + hero.BaseStats.Defense.Bonus - hero.BaseStats.Defense.Penalty}</h4> : <div></div>}
                {offHand.SubType === "Shield" ? <h4>{head.Protection + torso.Protection + legs.Protection + hands.Protection + feet.Protection + hero.Attributes.Dexterity.Value + hero.Attributes.Dexterity.Bonus - hero.Attributes.Dexterity.Penalty + hero.BaseStats.Defense.Bonus - hero.BaseStats.Defense.Penalty + offHand.Protection}</h4> : <div></div>}
                <h4>Bonuses</h4>

                {bonusList.length > 0 ? <ul> {bonusList}</ul> : <h5>No Equipment Bonuses</h5>}

            </div>
            <div style={{ display: 'inline-block', border: "solid", paddingRight: "1%", paddingLeft: "1%", marginRight: "1%", marginLeft: "1%", paddingBottom: "1%" }}>
                <div>
                    <h3>Load Out</h3>
                    <div>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, head, log)}>
                            <h4>
                                Head
                                <ul>
                                    <li>{head.Name}</li>
                                    <li>{head.Protection} - {head.ProtectionType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                    </div>
                    <div>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, back, log)}>
                            <h4>
                                Back
                                <ul>
                                    <li>{back.Name}</li>
                                </ul>
                            </h4>
                        </button>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, neck, log)}>
                            <h4>
                                Neck
                                <ul>
                                    <li>{neck.Name}</li>
                                </ul>
                            </h4>
                        </button>
                    </div>
                    <div>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, weapon, log)}>
                            <h4>
                                Weapon
                                <ul>
                                    <li>{weapon.Name}</li>
                                    <li>{weapon.Damage} - {weapon.DamageType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, torso, log)}>
                            <h4>
                                Torso
                                <ul>
                                    <li>{torso.Name}</li>
                                    <li>{torso.Protection} - {torso.ProtectionType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, offHand, log)}>
                            {offHand.SubType !== "Weapon" && offHand.SubType !== "Shield" ? <h4>
                                OffHand
                                <ul>
                                    <li>{offHand.Name}</li>
                                </ul>
                            </h4> : <div></div>}
                            {offHand.SubType === "Weapon" ? <h4>
                                OffHand
                                <ul>
                                    <li>{offHand.Name}</li>
                                    <li>{offHand.Damage} - {offHand.DamageType.Name}</li>
                                </ul>
                            </h4> : <div></div>}
                            {offHand.SubType === "Shield" ? <h4>
                                OffHand
                                <ul>
                                    <li>{offHand.Name}</li>
                                    <li>{offHand.Protection} - {offHand.ProtectionType.Name}</li>
                                </ul>
                            </h4> : <div></div>}
                        </button>
                    </div>
                    <div>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, legs, log)}>
                            <h4>
                                Legs
                                <ul>
                                    <li>{legs.Name}</li>
                                    <li>{legs.Protection} - {legs.ProtectionType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                    </div>
                    <div>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, hands, log)}>
                            <h4>
                                Hands
                                <ul>
                                    <li>{hands.Name}</li>
                                    <li>{hands.Protection} - {hands.ProtectionType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, feet, log)}>
                            <h4>
                                Feet
                                <ul>
                                    <li>{feet.Name}</li>
                                    <li>{feet.Protection} - {feet.ProtectionType.Name}</li>
                                </ul>
                            </h4>
                        </button>
                        <button className='equipment-slot' onClick={() => handleUnEquip(hero, log.Inventory, ring, log)}>
                            <h4>
                                Ring
                                <ul>
                                    <li>{ring.Name}</li>
                                </ul>
                            </h4>
                        </button>
                    </div>
                </div>
            </div>
            {/* <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
        </div>
    );
}

export default Equipment;