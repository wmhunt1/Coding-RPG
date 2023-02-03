import { useState } from 'react';
import '../App.css';
import { UnEquip } from '../Scripts/CharacterScripts';

function Equipment(props) {
    const [hero, setHero] = useState(props.hero);
    const [weapon, setWeapon] = useState(props.hero.Weapon)
    const [torso, setTorso] = useState(props.hero.Torso)
    function handleUnEquipWeapon(char, inventory, weapon)
    {
        UnEquip(char, inventory, weapon)
        setHero(char);
        setWeapon(char.Weapon)
    }
    function handleUnEquipTorso(char, inventory, torso)
    {
        UnEquip(char, inventory, torso)
        setHero(char);
        setTorso(char.Torso)
    }
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <h3>Weapon</h3>
            <h4>Main Weapon - Name: {weapon.Name}, Damage: {weapon.Damage}, Damage Type: {weapon.DamageType} <button onClick={() => handleUnEquipWeapon(hero, hero.Inventory, hero.Weapon)}><h3>UnEquip</h3></button></h4>
            <h3>Armor</h3>
            <h4>Torso - Name: {torso.Name}, Protection: {torso.Protection}, Protection Type: {torso.ProtectionType} <button onClick={() => handleUnEquipTorso(hero, hero.Inventory, hero.Torso)}><h3>UnEquip</h3></button></h4>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>
    );
}

export default Equipment;