import { HealHP, TakeDamage } from "../Scripts/CharacterScripts";

//damage spells
export function fireBall()
{
    var fireBall = {Name: "Fire Ball", Type: "Multi-Target Damage Spell", ManaCost: 5, Amount: 5, DamageType: "Fire Damage", Target: "Enemies", SpellEffect(target){TakeDamage(target, this.Amount)}}
    return fireBall;
}
export function magicMissile()
{
    var magicMissile = {Name: "Magic Missile", Type: "Single Target Damage Spell", ManaCost: 5, Amount: 5, DamageType: "Force Damage", Target: "Single Enemy", SpellEffect(target){TakeDamage(target, this.Amount)}}
    return magicMissile;
}
//healing spells
export function basicHeal()
{
    var basicHeal = {Name: "Basic Heal", Type: "Single Target Healing Spell", ManaCost: 5, Amount: 5, DamageType: "Healing", Target: "Single Ally", SpellEffect(target){HealHP(target, this.Amount)}}
    return basicHeal;
}