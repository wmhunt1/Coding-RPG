import { HealHP, TakeDamage } from "../Scripts/CharacterScripts";

//damage spells
export function fireBall()
{
    var fireBall = {Name: "Fire Ball", Description: "Deals 10 Fire Damage to All Enemies", Type: "Multi-Target Damage Spell", ManaCost: 10, Amount: 10, DamageType: "Fire Damage", Target: "Enemies", SpellEffect(target){TakeDamage(target, this.Amount)}}
    return fireBall;
}
export function magicMissile()
{
    var magicMissile = {Name: "Magic Missile", Description: "Deals 5 Force Damage to One Enemy", Type: "Single Target Damage Spell", ManaCost: 5, Amount: 5, DamageType: "Force Damage", Target: "Single Enemy", SpellEffect(target){TakeDamage(target, this.Amount)}}
    return magicMissile;
}
//healing spells
export function basicHeal()
{
    var basicHeal = {Name: "Basic Heal", Description: "Heals one Ally for 5 HP", Type: "Single Target Healing Spell", ManaCost: 5, Amount: 5, DamageType: "Healing", Target: "Single Ally", SpellEffect(target){HealHP(target, this.Amount)}}
    return basicHeal;
}