import { useState } from 'react';
import '../App.css';
import { UnEquipWeapon } from '../Scripts/CharacterScripts';

function Equipment(props) {
    const [hero, setHero] = useState(props.hero);
    const [weapon, setWeapon] = useState(props.hero.Weapon)
    function handleUnEquipWeapon(char, inventory, weapon)
    {
        UnEquipWeapon(char, inventory, weapon)
        setHero(char);
        setWeapon(char.Weapon)
    }
    return (
        <div>
            <h2>{hero.Name}'s Equipment</h2>
            <h3>Weapons</h3>
            <h4>Main Weapon - Name: {weapon.Name}, Damage: {weapon.Damage}, Damage Type: {weapon.DamageType} <button onClick={() => handleUnEquipWeapon(hero, hero.Inventory, hero.Weapon)}>UnEquip</button></h4>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>
    );
}

export default Equipment;