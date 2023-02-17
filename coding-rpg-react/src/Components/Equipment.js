import { useState } from 'react';
import '../App.css';
import './Game.css';
import { UnEquip } from '../Scripts/ItemScripts';

function Equipment(props) {
    const [hero, setHero] = useState(props.hero);
    const [log, setLog] = useState(props.log)
    const [weapon, setWeapon] = useState(props.hero.Weapon)
    const [offHand, setOffHand] = useState(props.hero.OffHand)
    const [head, setHead] = useState(props.hero.Head)
    const [torso, setTorso] = useState(props.hero.Torso)
    const [legs, setLegs] = useState(props.hero.Legs)
    const [hands, setHands] = useState(props.hero.Hands)
    const [feet, setFeet] = useState(props.hero.Feet)
    const [back, setBack] = useState(props.hero.Back)
    const [neck, setNeck] = useState(props.hero.Neck)
    const [ring, setRing] = useState(props.hero.Ring)
    function handleUnEquip(char, inventory, item, log) {
        //if (char.Name !== "Dog") {
        UnEquip(char, inventory, item, log)
        setHero(char);
        setWeapon(char.Weapon)
        setOffHand(char.OffHand)
        setHead(char.Head)
        setTorso(char.Torso)
        setLegs(char.Legs)
        setHands(char.Hands)
        setFeet(char.Feet)
        setBack(char.Back)
        setNeck(char.Neck)
        setRing(char.Ring)
        props.parentCallback(log);
        //}
    }
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <h4>ATK: {hero.Weapon.Damage + hero.AttackBonus - hero.AttackPenalty} PROT: {hero.Head.Protection + hero.Torso.Protection + hero.Legs.Protection + hero.Hands.Protection + hero.Feet.Protection + hero.ProtectionBonus - hero.ProtectionPenalty} SHD: {hero.ShieldBonus - hero.ShieldPenalty}</h4>
            <div className='equipment-box'>
                <h3>Weapons</h3>
                <h5>Weapon - Name: {weapon.Name}, Damage: {weapon.Damage}, Damage Type: {weapon.DamageType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, weapon, log)}>UnEquip</button></h5>
                <h5><div style={{ display: "inline-block" }}>OffHand - Name: {offHand.Name}</div>{offHand.SubType === "Weapon" ? <div style={{ display: "inline-block" }}>, Damage: {offHand.Damage}, Damage Type: {offHand.DamageType.Name}</div> : <div></div>} {offHand.SubType === "Shield" ? <div><div style={{ marginLeft: ".5%", display: "inline-block" }}>, Protection: {offHand.Protection}, Protection Type: {offHand.ProtectionType.Name}</div> <div style={{ display: "inline-block" }}><button onClick={() => handleUnEquip(hero, log.Inventory, offHand)}>UnEquip</button></div></div> : <div></div>}</h5>
                <h3>Accessories</h3>
                <h5>Neck - Name: {neck.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, neck, log)}>UnEquip</button></h5>
                <h5>Back - Name: {back.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, back, log)}>UnEquip</button></h5>
                <h5>Ring - Name: {ring.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, ring, log)}>UnEquip</button></h5>
            </div>
            <div className='equipment-box'>
                <h3>Armor</h3>
                <h5>Head - Name: {head.Name}, Protection: {head.Protection}, Protection Type: {head.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, head, log)}>UnEquip</button></h5>
                <h5>Torso - Name: {torso.Name}, Protection: {torso.Protection}, Protection Type: {torso.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, torso, log)}>UnEquip</button></h5>
                <h5>Legs - Name: {legs.Name}, Protection: {legs.Protection}, Protection Type: {legs.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, legs, log)}>UnEquip</button></h5>
                <h5>Hands - Name: {hands.Name}, Protection: {hands.Protection}, Protection Type: {hands.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, hands, log)}>UnEquip</button></h5>
                <h5>Feet - Name: {feet.Name}, Protection: {feet.Protection}, Protection Type: {feet.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, log.Inventory, feet, log)}>UnEquip</button></h5>
            </div>
            {/* <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
        </div>
    );
}

export default Equipment;