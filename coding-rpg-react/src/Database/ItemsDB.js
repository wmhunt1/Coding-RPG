import { bludeoningDamage, forceDamage, piercingDamage, slashingDamage } from "./DamageTypesDB";
import { drunkDeBuff } from "./DeBuffsDB";
import { fireEnchantment, fireImmuneEnchantment, iceResistEnchantment, poisonApplyEnchantment, strengthEnchantment, unEnchanted } from "./EnchantmentsDB";
import { clothProtection, leatherProtection, metalProtection, naturalProtection, woodProtection } from "./ProtectionTypesDB";
import { axeSkill, barterSkill, blockSkill, bluntSKill, destructionSkill, heavyArmorSkill, lightArmorSkill, longBladeSkill, rangedSkill, shortBladeSkill, smithingSkill, unArmedSkill, unArmoredSkill } from "./SkillsDB";
import { basicHeal, fireBall, magicMissile } from "./SpellsDB";
import { LearnSpell } from "../Scripts/AbilityAndSpellScripts";
import { RemoveCondition } from "../Scripts/BuffConditionAndDeBuffScripts";
import { AddToCharacterLog, EarnXP, HealHP, RecoverMP, RecoverSP } from "../Scripts/CharacterScripts";
import { AddToCombatLog, ProjectileMagicAttack } from "../Scripts/CombatScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "../Scripts/SkillScripts";
//consumables
//battle items
export function bomb() {
    var bomb = { Name: "Bomb", Type: "Consumable", SubType: "Battle", Cost: 10, Quantity: 1, ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { ProjectileMagicAttack(hero, enemies[e], combatLog, fireBall()) } } }
    return bomb
}
//drinks
export function ale() {
    var ale = { Name: "Ale", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks an " + this.Name); RecoverSP(hero, 1); RecoverMP(hero, 1); drunkDeBuff(3).ApplyDeBuff(hero) } }
    return ale
}
export function milk() {
    var milk = { Name: "Milk", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks a " + this.Name); RecoverSP(hero, 1); RecoverMP(hero, 1) } }
    return milk
}
//food
export function beefStew() {
    var stew = { Name: "Beef Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 5); HealHP(hero, 5) } }
    return stew;
}
export function bread() {
    var bread = { Name: "Bread", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return bread
}
export function cheese() {
    var cheese = { Name: "Cheese", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return cheese
}
export function cookedBeef() {
    var cook = { Name: "Cooked Beef", Type: "Consumable", SubType: "Food", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return cook;
}
export function cookedFish() {
    var cook = { Name: "Cooked Fish", Type: "Consumable", SubType: "Food", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return cook;
}
export function cookedRabbitMeat() {
    var cookedRabbitMeat = { Name: "Cooked Rabbit Meat", Type: "Consumable", SubType: "Food", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return cookedRabbitMeat;
}
export function cookedRatMeat() {
    var cookedRatMeat = { Name: "Cooked Rat Meat", Type: "Consumable", SubType: "Food", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
    return cookedRatMeat;
}
export function fishStew() {
    var stew = { Name: "Fish Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 5); HealHP(hero, 5) } }
    return stew;
}
export function rabbitStew() {
    var stew = { Name: "Rabbit Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 5); HealHP(hero, 5) } }
    return stew;
}
export function ratStew() {
    var stew = { Name: "Rat Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 5); HealHP(hero, 5) } }
    return stew;
}
export function stew() {
    var stew = { Name: "Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 5); HealHP(hero, 5) } }
    return stew;
}
//potions
export function allPotions() {
    var all = [antidote(), healingPotion(), manaPotion(), staminaPotion()]
    return all;
}
export function antidote() {
    var antidote = {
        Name: "Antidote", Type: "Consumable", SubType: "Potion", Cost: 10, Quantity: 1,
        ConsumeEffect(hero, log) { if (hero.Conditon.Name === "Poison") { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RemoveCondition(hero, hero.Log) } }
    }
    return antidote;
}
export function healingPotion() {
    var healingPotion = { Name: "Healing Potion", Type: "Consumable", SubType: "Potion", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); HealHP(hero, 10) } }
    return healingPotion;
}
export function manaPotion() {
    var manaPotion = { Name: "Mana Potion", Type: "Consumable", SubType: "Potion", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RecoverMP(hero, 10) } }
    return manaPotion;
}
export function staminaPotion() {
    var staminaPotion = { Name: "Stamina Potion", Type: "Consumable", SubType: "Potion", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RecoverSP(hero, 10) } }
    return staminaPotion;
}
//scrolls
//abilityscroll
//spellscroll
export function allSpellScrolls() {
    var all = [magicMissileScroll()]
    return all;
}
export function basicHealScroll() {
    var scroll = { Name: "Scroll of Basic Heal", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, basicHeal()) } }
    return scroll;
}
export function magicMissileScroll() {
    var magicMissileScroll = { Name: "Scroll of Magic Missile", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, magicMissile()) } }
    return magicMissileScroll;
}
//xp lamps
export function lessonsFromFaldan() {
    var lessonsFromFaldan = { Name: "Lessons from Faldan", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); EarnSkillXP(hero, FindSkillInSkillBook(hero, smithingSkill()), 500) } }
    return lessonsFromFaldan
}
export function skillLamp(skill, xp) {
    var lamp = { Name: skill.Name + " XP Lamp", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " rubs " + this.Name + " gaining " + skill.Name + " " + xp + " XP"); EarnSkillXP(hero, FindSkillInSkillBook(hero, skill), xp) } }
    return lamp;
}
export function levelLamp(xp) {
    var lamp = { Name: "Character XP Lamp", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " rubs " + this.Name + " gaining " + xp + " XP"); EarnXP(hero, xp, hero) } }
    return lamp;
}
export function tipsTraderJoe() {
    var tips = { Name: "Trading Tips from Joe the Trader", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); EarnSkillXP(hero, FindSkillInSkillBook(hero, barterSkill()), 500) } }
    return tips
}
//equipables
export function allBronze() {
    var all = [bronzeAxe(), bronzeAxe2H(), bronzeBoots(), bronzeDagger(), bronzeDaggerOffHand(), bronzeGauntlets(), bronzeHatchet(), bronzeHelmet(), bronzeLegs(), bronzeMace(), bronzePickAxe(), bronzeShield(), bronzeSword(), bronzeSword2H(), bronzeTorso(), bronzeWarHammer(), bronzeWarHammer2H()]
    return all;
}
export function allIron() {
    var all = [ironAxe(), ironAxe2H(), ironBoots(), ironDagger(), ironDaggerOffHand(), ironGauntlets(), ironHatchet(), ironHelmet(), ironLegs(), ironMace(), ironPickAxe(), ironShield(), ironSword(), ironSword2H(), ironTorso(), ironWarHammer(), ironWarHammer2H()]
    return all;
}
export function allLeather() {
    var all = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso()]
    return all;
}
export function allSteel() {
    var all = [steelAxe(), steelAxe2H(), steelBoots(), steelDagger(), steelDaggerOffHand(), steelGauntlets(), steelHatchet(), steelHelmet(), steelLegs(), steelMace(), steelPickAxe(), steelShield(), steelSword(), steelSword2H(), steelTorso(), steelWarHammer(), steelWarHammer2H()]
    return all;
}
export function allWool() {
    var all = [woolBoots(), woolGloves(), woolHat(), woolRobeBottom(), woolRobeTop(), woolTrousers(), woolTunic(), woolWizardHat()]
    return all;
}
//accessories
//back
export function bareBack() {
    var bare = { Name: "None", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function capeOfFireImmunity() {
    var cape = { Name: "Cape of Fire Immunity", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: fireImmuneEnchantment() }
    return cape;
}
export function cloak() {
    var cloak = { Name: "Cloak", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: iceResistEnchantment() }
    return cloak;
}
//neck
export function bareNeck() {
    var bare = { Name: "None", Level: 1, Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function dogCollar() {
    var dog = { Name: "Dog Collar", Level: 1, Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return dog;
}
//ring
export function bareFinger() {
    var bare = { Name: "None", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function ringOfStr() {
    var ring = { Name: "Ring of Strength", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 10, Quantity: 1, Enchantment: strengthEnchantment() }
    return ring;
}
export function silverRingLR() {
    var ring = { Name: "Silver Ring engraved with the Initials CR ", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 10, Quantity: 1, Enchantment: strengthEnchantment() }
    return ring;
}
//armor
//feet
export function bareFeet() {
    var bare = { Name: "None", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeBoots() {
    var boots = { Name: "Bronze Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return boots;
}
export function ironBoots() {
    var boots = { Name: "Iron Boots", Level: 5, Slot: "Feet", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 2, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return boots;
}
export function leatherBoots() {
    var boots = { Name: "Leather Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: lightArmorSkill(), Protection: 1, ProtectionType: leatherProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return boots;
}
export function shoes() {
    var shoes = { Name: "Shoes", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shoes;
}
export function steelBoots() {
    var boots = { Name: "Steel Boots", Level: 10, Slot: "Feet", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 3, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return boots;
}
export function woolBoots() {
    var shoes = { Name: "Wool Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shoes;
}
//hands
export function bareHands() {
    var bare = { Name: "None", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeGauntlets() {

    var gauntlets = { Name: "Bronze Gauntlets", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gauntlets;
}
export function gloves() {
    var gloves = { Name: "Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gloves;
}
export function ironGauntlets() {

    var gauntlets = { Name: "Iron Gauntlets", Level: 5, Slot: "Hands", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 2, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gauntlets;
}
export function leatherGloves() {
    var gloves = { Name: "Leather Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: lightArmorSkill(), Protection: 1, ProtectionType: leatherProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gloves;
}
export function steelGauntlets() {

    var gauntlets = { Name: "Steel Gauntlets", Level: 10, Slot: "Hands", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 3, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gauntlets;
}
export function woolGloves() {
    var gloves = { Name: "Wool Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gloves;
}
//head
export function bareHead() {
    var bare = { Name: "None", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeHelmet() {
    var helmet = { Name: "Bronze Helmet", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return helmet;
}
export function hat() {
    var hat = { Name: "Hat", Slot: "Head", Level: 1, Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
export function ironHelmet() {
    var helmet = { Name: "Iron Helmet", Level: 5, Slot: "Head", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 2, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return helmet;
}
export function leatherCowl() {
    var hat = { Name: "Leather Cowl", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: lightArmorSkill(), Protection: 1, ProtectionType: leatherProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
export function steelHelmet() {
    var helmet = { Name: "Steel Helmet", Level: 10, Slot: "Head", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 3, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return helmet;
}
export function woolHat() {
    var hat = { Name: "Wool Hat", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
export function woolWizardHat() {
    var hat = { Name: "Wool Wizard Hat", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
//legs
export function bareLegs() {
    var bare = { Name: "None", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeLegs() {
    var legs = { Name: "Bronze Legs", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return legs;
}
export function ironLegs() {
    var legs = { Name: "Iron Legs", Level: 5, Slot: "Legs", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 2, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return legs;
}
export function leatherLegs() {
    var legs = { Name: "Leather Legs", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: lightArmorSkill(), Protection: 1, ProtectionType: leatherProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return legs;
}
export function loinCloth() {
    var loinCloth = { Name: "Loincloth", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return loinCloth
}
export function steelLegs() {
    var legs = { Name: "Steel Legs", Level: 10, Slot: "Legs", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 3, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return legs;
}
export function trousers() {
    var trousers = { Name: "Trousers", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return trousers;
}
export function woolTrousers() {
    var trousers = { Name: "Wool Trousers", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return trousers;
}
export function woolRobeBottom() {
    var legs = { Name: "Wool Robe Bottom", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return legs;
}
//torso
export function bareTorso() {
    var bare = { Name: "None", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeTorso() {
    var torso = { Name: "Bronze Armor", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function ironTorso() {
    var torso = { Name: "Iron Armor", Level: 5, Slot: "Torso", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 2, ProtectionType: metalProtection(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function leatherTorso() {
    var torso = { Name: "Leather Armor", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: lightArmorSkill(), Protection: 1, ProtectionType: leatherProtection(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function steelTorso() {
    var torso = { Name: "Steel Armor", Level: 10, Slot: "Torso", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 3, ProtectionType: metalProtection(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function tunic() {
    var tunic = { Name: "Tunic", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return tunic;
}
export function woolRobeTop() {
    var torso = { Name: "Wool Robe Torso", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function woolTunic() {
    var tunic = { Name: "Wool Tunic", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return tunic;
}
//offhands
//offhand weapoms
export function emptyOffHand() {
    var empty = { Name: "None", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "None", Class: unArmedSkill(), Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return empty;
}
//daggers
export function bronzeDaggerOffHand() {
    var dagger = { Name: "Bronze Dagger (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function daggerOffHand() {
    var dagger = { Name: "Dagger (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function ironDaggerOffHand() {
    var dagger = { Name: "Iron Dagger (OffHand)", Level: 5, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 2, DamageType: piercingDamage(), Cost: 4, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function steelDaggerOffHand() {
    var dagger = { Name: "Steel Dagger (OffHand)", Level: 10, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 3, DamageType: piercingDamage(), Cost: 6, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
//shields
export function bronzeShield() {
    var shield = { Name: "Bronze Shield", Level: 1, Slot: "OffHand", Type: "Equipable", Class: blockSkill(), SubType: "Shield", Protection: 1, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shield;
}
export function ironShield() {
    var shield = { Name: "Iron Shield", Level: 5, Slot: "OffHand", Type: "Equipable", Class: blockSkill(), SubType: "Shield", Protection: 2, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shield;
}
export function steelShield() {
    var shield = { Name: "Steel Shield", Level: 10, Slot: "OffHand", Type: "Equipable", Class: blockSkill(), SubType: "Shield", Protection: 3, ProtectionType: metalProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shield;
}
export function woodenShield() {
    var shield = { Name: "Wooden Shield", Level: 1, Slot: "OffHand", Type: "Equipable", Class: blockSkill(), SubType: "Shield", Protection: 1, ProtectionType: woodProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shield;
}
//weapons
//magic weapons
//1h magic weapons
export function oakWand() {
    var wand = { Name: "Oak Wand", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: destructionSkill(), Damage: 3, DamageType: forceDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return wand;
}
export function willowWand() {
    var wand = { Name: "Willow Wand", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: destructionSkill(), Damage: 4, DamageType: forceDamage(), Cost: 20, Quantity: 1, Enchantment: unEnchanted() }
    return wand;
}
export function woodWand() {
    var wand = { Name: "Wooden Wand", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: destructionSkill(), Damage: 2, DamageType: forceDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return wand;
}
//2h magic weapons
export function oakStaff() {
    var staff = { Name: "Oak Staff", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: destructionSkill(), Damage: 4, DamageType: forceDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return staff;
}
export function willowStaff() {
    var staff = { Name: "Willow Staff", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: destructionSkill(), Damage: 5, DamageType: forceDamage(), Cost: 20, Quantity: 1, Enchantment: unEnchanted() }
    return staff;
}
export function woodStaff() {
    var staff = { Name: "Wooden Staff", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: destructionSkill(), Damage: 3, DamageType: forceDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return staff;
}
//melee weapons
//axes
//1h axes
export function bronzeAxe() {
    var axe = { Name: "Bronze Axe", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: axeSkill(), Damage: 2, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
export function ironAxe() {
    var axe = { Name: "Iron Axe", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: axeSkill(), Damage: 3, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
export function steelAxe() {
    var axe = { Name: "Steel Axe", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: axeSkill(), Damage: 4, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
//2h axes
export function bronzeAxe2H() {
    var axe = { Name: "Bronze Axe 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: axeSkill(), Damage: 3, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
export function ironAxe2H() {
    var axe = { Name: "Iron Axe 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: axeSkill(), Damage: 4, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
export function steelAxe2H() {
    var axe = { Name: "Iron Axe 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: axeSkill(), Damage: 5, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return axe;
}
//clubs
export function club() {
    var club = { Name: "Club", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 1, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return club;
}
export function woodenclub() {
    var club = { Name: "Wooden Club", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 1, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return club;
}
//daggers
export function bronzeDagger() {
    var dagger = { Name: "Bronze Dagger", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function dagger() {
    var dagger = { Name: "Dagger", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function ironDagger() {
    var dagger = { Name: "Iron Dagger", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 2, DamageType: piercingDamage(), Cost: 4, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function steelDagger() {
    var dagger = { Name: "Steel Dagger", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 3, DamageType: piercingDamage(), Cost: 6, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
//maces
export function bronzeMace() {
    var mace = { Name: "Bronze Mace", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 2, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return mace;
}
export function ironMace() {
    var mace = { Name: "Iron Mace", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 3, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return mace;
}
export function steelMace() {
    var mace = { Name: "Steel Mace", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 4, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return mace;
}
//natural weapons
export function bareFist() {
    var bare = { Name: "Fist", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bite() {
    var bite = { Name: "Bite", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bite;
}
export function clawSlash() {
    var slash = { Name: "Slam", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 2, DamageType: slashingDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return slash;
}
export function poisonedBite() {
    var bite = { Name: "Poisoned Bite", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 0, Quantity: 1, Enchantment: poisonApplyEnchantment() }
    return bite;
}
export function slam() {
    var slam = { Name: "Slam", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 1, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return slam;
}
//swords
//1hswords
export function bronzeSword() {
    var sword = { Name: "Bronze Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 2, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function flamingsword() {
    var sword = { Name: "Flaming Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 5, DamageType: slashingDamage(), Cost: 50, Quantity: 1, Enchantment: fireEnchantment() }
    return sword;
}
export function ironSword() {
    var sword = { Name: "Iron Sword", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 3, DamageType: slashingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function steelSword() {
    var sword = { Name: "Steel Sword", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 4, DamageType: slashingDamage(), Cost: 15, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function sword() {
    var sword = { Name: "Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 2, DamageType: slashingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
//2hswords
export function bronzeSword2H() {
    var sword = { Name: "Bronze Sword 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: longBladeSkill(), Damage: 3, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function ironSword2H() {
    var sword = { Name: "Iron Sword 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: longBladeSkill(), Damage: 4, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function steelSword2H() {
    var sword = { Name: "Steel Sword 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: longBladeSkill(), Damage: 5, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
//warhammers
//1h warhammer
export function bronzeWarHammer() {
    var hammer = { Name: "Bronze WarHammer", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 2, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
export function ironWarHammer() {
    var hammer = { Name: "Iron WarHammer", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 3, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
export function steelWarHammer() {
    var hammer = { Name: "Steel WarHammer", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 4, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
//2h warhammer
export function bronzeWarHammer2H() {
    var hammer = { Name: "Bronze WarHammer 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: bluntSKill(), Damage: 3, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
export function ironWarHammer2H() {
    var hammer = { Name: "Iron WarHammer 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: bluntSKill(), Damage: 4, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
export function steelWarHammer2H() {
    var hammer = { Name: "Steel WarHammer 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: bluntSKill(), Damage: 5, DamageType: bludeoningDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return hammer;
}
//ranged weapon
export function oakBow() {
    var bow = { Name: "Oak Bow", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: rangedSkill(), Damage: 2, DamageType: piercingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return bow;
}
export function willowBow() {
    var bow = { Name: "Willow Bow", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: rangedSkill(), Damage: 3, DamageType: piercingDamage(), Cost: 20, Quantity: 1, Enchantment: unEnchanted() }
    return bow;
}
export function woodBow() {
    var bow = { Name: "Wood Bow", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: rangedSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return bow;
}
//junk
//burnt food
export function banditSpoils() {
    var bandit = { Name: "Bandit Spoils", Type: "Junk", SubType: "Vendor Trash", Cost: 50, Quantity: 1, ConsumeEffect(hero) { } }
    return bandit;
}
export function burntBread() {
    var bread = { Name: "Burnt Bread", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return bread
}
export function burntBeef() {
    var cook = { Name: "Burned Beef", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cook;
}
export function burntFish() {
    var cook = { Name: "Burned Fish", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cook;
}
export function burntRabbitMeat() {
    var cookedRabbitMeat = { Name: "Burned Rabbit Meat", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cookedRabbitMeat;
}
export function burntRatMeat() {
    var cookedRatMeat = { Name: "Burned Rat Meat", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cookedRatMeat;
}
export function burntStew() {
    var stew = { Name: "Burned Stew", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return stew;
}
export function ratTail() {
    var ratTail = { Name: "Rat Tail", Type: "Junk", SubType: "", Cost: 1, Quantity: 1 }
    return ratTail;
}
//resources
export function ashes() {
    var ashes = { Name: "Ashes", Type: "Resource", SubType: "Ashes", Cost: 1, Quantity: 1 }
    return ashes
}
export function blackFeather() {
    var feathers = { Name: "Black Feather", Type: "Resource", SubType: "Feather", Cost: 1, Quantity: 1 }
    return feathers
}
export function bones() {
    var bones = { Name: "Bones", Type: "Resource", SubType: "Bones", Cost: 1, Quantity: 1 }
    return bones;
}
export function dough() {
    var dough = { Name: "Dough", Type: "Resource", SubType: "", Cost: 2, Quantity: 1 }
    return dough;
}
export function flour() {
    var flour = { Name: "Flour", Type: "Resource", SubType: "", Cost: 2, Quantity: 1 }
    return flour;
}
export function skull() {
    var bones = { Name: "Skull", Type: "Resource", SubType: "Bones", Cost: 1, Quantity: 1 }
    return bones;
}
export function water() {
    var water = { Name: "Water", Type: "Resource", SubType: "", Cost: 1, Quantity: 1 }
    return water;
}
export function wheat() {
    var wheat = { Name: "Wheat", Type: "Resource", SubType: "", Cost: 1, Quantity: 1 }
    return wheat;
}
//cloth
export function spiderSilkCloth() {
    var cloth = { Name: "Spider Silk", Type: "Resource", SubType: "Cloth", Cost: 5, Quantity: 1 }
    return cloth;
}
export function woolCloth() {
    var cloth = { Name: "Wool", Type: "Resource", SubType: "Cloth", Cost: 1, Quantity: 1 }
    return cloth;
}
//fur
export function bearFur() {
    var fur = { Name: "Bear Fur", Type: "Resource", SubType: "Fur", Cost: 10, Quantity: 1 }
    return fur;
}
export function wolfFur() {
    var fur = { Name: "Wolf Fur", Type: "Resource", SubType: "Fur", Cost: 5, Quantity: 1 }
    return fur;
}
//leather
export function cowLeather() {
    var leather = { Name: "Cow Leather", Type: "Resource", SubType: "Leather", Cost: 1, Quantity: 1 }
    return leather;
}
//metal bars
export function bronzeBar() {
    var bar = { Name: "Bronze Bar", Type: "Resource", SubType: "Bar", Cost: 2, Quantity: 1 }
    return bar
}
export function ironBar() {
    var bar = { Name: "Iron Bar", Type: "Resource", SubType: "Bar", Cost: 4, Quantity: 1 }
    return bar
}
export function steelBar() {
    var bar = { Name: "Steel Bar", Type: "Resource", SubType: "Bar", Cost: 8, Quantity: 1 }
    return bar
}
//ore
export function coalOre() {
    var ore = { Name: "Coal", Type: "Resource", SubType: "Ore", Cost: 4, Quantity: 1 }
    return ore
}
export function copperOre() {
    var ore = { Name: "Copper Ore", Type: "Resource", SubType: "Ore", Cost: 1, Quantity: 1 }
    return ore
}
export function ironOre() {
    var ore = { Name: "Iron Ore", Type: "Resource", SubType: "Ore", Cost: 2, Quantity: 1 }
    return ore
}
export function tinOre() {
    var ore = { Name: "Tin Ore", Type: "Resource", SubType: "Ore", Cost: 1, Quantity: 1 }
    return ore
}
//raw food
//fish
export function rawFish() {
    var raw = { Name: "Raw Fish", Type: "Resource", SubType: "Raw Fish", Cost: 2, Quantity: 1 }
    return raw;
}
//meat
export function rawBeef() {
    var raw = { Name: "Raw Beef", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return raw;
}
export function rawRabbitMeat() {
    var rawRabbitMeat = { Name: "Raw Rabbit Meat", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return rawRabbitMeat;
}
export function rawRatMeat() {
    var rawRatMeat = { Name: "Raw Rat Meat", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return rawRatMeat;
}
//wood
export function oakLogs() {
    var wood = { Name: "Oak Logs", Type: "Resource", SubType: "Logs", Cost: 4, Quantity: 1 }
    return wood;
}
export function willowLogs() {
    var wood = { Name: "Willow Logs", Type: "Resource", SubType: "Logs", Cost: 8, Quantity: 1 }
    return wood;
}
export function woodLogs() {
    var wood = { Name: "Wood Logs", Type: "Resource", SubType: "Logs", Cost: 2, Quantity: 1 }
    return wood;
}
//tools
export function bucket() {
    var bucket = { Name: "Bucket", Type: "Tool", SubType: "Bucket", Tier: 1, Cost: 1, Quantity: 1 }
    return bucket
}
export function thread() {
    var thread = { Name: "Thread", Type: "Tool", SubType: "Thread", Tier: 1, Cost: 1, Quantity: 1 }
    return thread;
}
//alchemy
export function mortarAndPestle() {
    var mortar = { Name: "Mortar and Pestle", Type: "Tool", SubType: "Mortar and Pestle", Tier: 1, Cost: 10, Quantity: 1 }
    return mortar;
}
//crafting
export function needle() {
    var needle = { Name: "Needle", Type: "Tool", SubType: "Needle", Tier: 1, Cost: 1, Quantity: 1 }
    return needle
}
//enchanting
export function enchantmentTome() {
    var tome = { Name: "Enchantment Tome", Type: "Tool", SubType: "Tome", Tier: 1, Cost: 10, Quantity: 1 }
    return tome;
}
//farming
export function shears() {
    var shears = { Name: "Shears", Type: "Tool", SubType: "Shears", Tier: 1, Cost: 1, Quantity: 1 }
    return shears;
}
export function sickle() {
    var tool = { Name: "Sickle", Type: "Tool", SubType: "Sickle", Tier: 1, Cost: 1, Quantity: 1 }
    return tool;
}
//fishing
export function fishingRod() {
    var fishingRod = { Name: "Fishing Rod", Type: "Tool", SubType: "Fishing Rod", Tier: 1, Cost: 1, Quantity: 1 }
    return fishingRod
}
//hatchets
export function bronzeHatchet() {
    var hatchet = { Name: "Bronze Hatchet", Type: "Tool", SubType: "Hatchet", Tier: 1, Cost: 1, Quantity: 1 }
    return hatchet
}
export function hatchet() {
    var hatchet = { Name: "Hatchet", Type: "Tool", SubType: "Hatchet", Tier: 1, Cost: 1, Quantity: 1 }
    return hatchet
}
export function ironHatchet() {
    var hatchet = { Name: "Iron Hatchet", Type: "Tool", SubType: "Hatchet", Tier: 2, Cost: 5, Quantity: 1 }
    return hatchet
}
export function steelHatchet() {
    var hatchet = { Name: "Steel Hatchet", Type: "Tool", SubType: "Hatchet", Tier: 3, Cost: 10, Quantity: 1 }
    return hatchet
}
//knife
export function knife() {
    var knife = { Name: "Knife", Type: "Tool", SubType: "Knife", Tier: 1, Cost: 1, Quantity: 1 }
    return knife
}
//pickaxes
export function bronzePickAxe() {
    var pickAxe = { Name: "Bronze Pickaxe", Type: "Tool", SubType: "Pickaxe", Tier: 1, Cost: 1, Quantity: 1 }
    return pickAxe
}
export function ironPickAxe() {
    var pickAxe = { Name: "Iron Pickaxe", Type: "Tool", SubType: "Pickaxe", Tier: 2, Cost: 5, Quantity: 1 }
    return pickAxe
}
export function pickAxe() {
    var pickAxe = { Name: "Pickaxe", Type: "Tool", SubType: "Pickaxe", Tier: 1, Cost: 1, Quantity: 1 }
    return pickAxe
}
export function steelPickAxe() {
    var pickAxe = { Name: "Pickaxe", Type: "Tool", SubType: "Pickaxe", Tier: 3, Cost: 10, Quantity: 1 }
    return pickAxe
}
//tinderboxes
export function tinderBox() {
    var tinderBox = { Name: "Tinderbox", Type: "Tool", SubType: "Tinder Box", Tier: 1, Cost: 1, Quantity: 1 }
    return tinderBox
}