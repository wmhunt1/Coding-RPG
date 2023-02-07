import { useState } from 'react';
import '../App.css';
import { UnEquip } from '../Scripts/ItemScripts';

function Equipment(props) {
    const [hero, setHero] = useState(props.hero);
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
    function handleUnEquip(char, inventory, item) {
        if (char.Name !== "Dog") {
            UnEquip(char, inventory, item)
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
            props.parentCallback(char);
        }
    }
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <h3>Weapons</h3>
            <h4>Weapon - Name: {weapon.Name}, Damage: {weapon.Damage}, Damage Type: {weapon.DamageType} <button onClick={() => handleUnEquip(hero, hero.Inventory, weapon)}>UnEquip</button></h4>
            <h4><div style={{display: "inline-block"}}>OffHand - Name: {offHand.Name}, </div>{offHand.Type === "Weapon" ? <div style={{display: "inline-block"}}> Damage: {offHand.Damage}, Damage Type: {offHand.DamageType}</div> : <div style={{marginLeft: ".5%", display: "inline-block"}}> Protection: {offHand.Protection}, Protection Type: {offHand.ProtectionType.Name}</div>} <div style={{display: "inline-block"}}><button onClick={() => handleUnEquip(hero, hero.Inventory, offHand)}>UnEquip</button></div></h4>
            <h3>Armor</h3>
            <h4>Head - Name: {head.Name}, Protection: {head.Protection}, Protection Type: {head.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, head)}>UnEquip</button></h4>
            <h4>Torso - Name: {torso.Name}, Protection: {torso.Protection}, Protection Type: {torso.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, torso)}>UnEquip</button></h4>
            <h4>Legs - Name: {legs.Name}, Protection: {legs.Protection}, Protection Type: {legs.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, legs)}>UnEquip</button></h4>
            <h4>Hands - Name: {hands.Name}, Protection: {hands.Protection}, Protection Type: {hands.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, hands)}>UnEquip</button></h4>
            <h4>Feet - Name: {feet.Name}, Protection: {feet.Protection}, Protection Type: {feet.ProtectionType.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, feet)}>UnEquip</button></h4>
            <h3>Accessories</h3>
            <h4>Neck - Name: {neck.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, neck)}>UnEquip</button></h4>
            <h4>Back - Name: {back.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, back)}>UnEquip</button></h4>
            <h4>Ring - Name: {ring.Name} <button onClick={() => handleUnEquip(hero, hero.Inventory, ring)}>UnEquip</button></h4>
            <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
        </div>
    );
}

export default Equipment;