import { HealHP, LearnSpell, RecoverMP, RecoverSP, RemoveCondition } from "../Scripts/CharacterScripts";
import { bludeoningDamage, piercingDamage, slashingDamage } from "./DamageTypesDB";
import { fireEnchantment, fireImmuneEnchantment, iceResistEnchantment, strengthEnchantment, unEnchanted } from "./EnchantmentsDB";
import { clothProtection, metalProtection, naturalProtection, woodProtection } from "./ProtectionTypesDB";
import { blockSkill, bluntSKill, heavyArmorSkill, longBladeSkill, rangedSkill, shortBladeSkill, unArmedSkill, unArmoredSkill } from "./SkillsDB";
import { magicMissile } from "./SpellsDB";
//consumables
//drinks
export function ale() {
    var ale = { Name: "Ale", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks an " + this.Name); RecoverSP(hero, 5) } }
    return ale
}
export function milk() {
    var milk = { Name: "Milk", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks a " + this.Name); RecoverSP(hero, 5) } }
    return milk
}
//food
export function bread() {
    var bread = { Name: "Bread", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return bread
}
export function cheese() {
    var cheese = { Name: "Cheese", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cheese
}
export function cookedFish() {
    var cook = { Name: "Cooked Fish", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cook;
}
export function cookedRabbitMeat() {
    var cookedRabbitMeat = { Name: "Cooked Rabbit Meat", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cookedRabbitMeat;
}
export function cookedRatMeat() {
    var cookedRatMeat = { Name: "Cooked Rat Meat", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return cookedRatMeat;
}
export function stew() {
    var stew = { Name: "Stew", Type: "Consumable", SubType: "Food", Cost: 4, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " eats " + this.Name); RecoverSP(hero, 5) } }
    return stew;
}
//potions
export function antidote() {
    var antidote = { Name: "Antidote", Type: "Consumable", SubType: "Potion", Cost: 5, Quantity: 1, ConsumeEffect(hero) { if (hero.Conditon.Name === "Poison") { hero.Log.push(hero.Name + " drinks " + this.Name); RemoveCondition(hero, hero.Log) } } }
    return antidote;
}
export function healingPotion() {
    var healingPotion = { Name: "Healing Potion", Type: "Consumable", SubType: "Potion", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); HealHP(hero, 5) } }
    return healingPotion;
}
export function manaPotion() {
    var manaPotion = { Name: "Mana Potion", Type: "Consumable", SubType: "Potion", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); RecoverMP(hero, 5) } }
    return manaPotion;
}
export function staminaPotion() {
    var staminaPotion = { Name: "Stamina Potion", Type: "Consumable", SubType: "Potion", Cost: 5, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " drinks " + this.Name); RecoverSP(hero, 5) } }
    return staminaPotion;
}
//scrolls
//abilityscroll
//spellscroll
export function magicMissileScroll() {
    var magicMissileScroll = { Name: "Scroll of Magic Missile", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero) { hero.Log.push(hero.Name + " studies " + this.Name); LearnSpell(hero, magicMissile()) } }
    return magicMissileScroll;
}
//equipables
//accessories
//back
export function bareBack() {
    var bare = { Name: "Bare", Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function capeOfFireImmunity()
{
    var cape = { Name: "Cape of Fire Immunity", Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: fireImmuneEnchantment() }
    return cape;
}
export function cloak()
{
    var cloak = { Name: "Cloak", Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: iceResistEnchantment() }
    return cloak;
}
//neck
export function bareNeck() {
    var bare = { Name: "Bare", Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function dogCollar() {
    var dog = { Name: "Dog Collar", Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return dog;
}
//ring
export function bareFinger() {
    var bare = { Name: "Bare", Slot: "Ring", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function ringOfStr() {
    var ring = { Name: "Ring of Strength", Slot: "Ring", Type: "Equipable", SubType: "", Cost: 10, Quantity: 1, Enchantment: strengthEnchantment() }
    return ring;
}
//armor
//feet
export function bareFeet() {
    var bare = { Name: "Bare", Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furFeet() {
    var fur = { Name: "Fur", Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function shoes() {
    var shoes = { Name: "Shoes", Slot: "Feet", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return shoes;
}
//hands
export function furHands() {
    var fur = { Name: "Fur", Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function gloves() {
    var gloves = { Name: "Trousers", Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return gloves;
}
export function bareHands() {
    var bare = { Name: "Bare", Slot: "Hands", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
//head
export function bareHead() {
    var bare = { Name: "Bare", Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furHead() {
    var fur = { Name: "Fur", Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function hat() {
    var hat = { Name: "Hat", Slot: "Head", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return hat;
}
//legs
export function bareLegs() {
    var bare = { Name: "Bare", Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function furLegs() {
    var fur = { Name: "Fur", Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function loinCloth() {
    var loinCloth = { Name: "Loincloth", Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return loinCloth
}
export function trousers() {
    var trousers = { Name: "Trousers", Slot: "Legs", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return trousers;
}
//torso
export function bareTorso() {
    var bare = { Name: "Bare", Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bronzeTorso() {
    var torso = { Name: "Bronze Armor", Slot: "Torso", Type: "Equipable", SubType: "", Class: heavyArmorSkill(), Protection: 1, ProtectionType: metalProtection(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return torso;
}
export function furTorso() {
    var fur = { Name: "Fur", Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: naturalProtection(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return fur;
}
export function tunic() {
    var tunic = { Name: "Tunic", Slot: "Torso", Type: "Equipable", SubType: "", Class: unArmoredSkill(), Protection: 0, ProtectionType: clothProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return tunic;
}
//offhands
//offhand weapoms
export function emptyOffHand() {
    var empty = { Name: "None", Slot: "OffHand", Type: "Equipable", SubType: "None", Class: unArmedSkill(), Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return empty;
}
//daggers
export function bronzeDaggerOffHand() {
    var dagger = { Name: "Bronze Dagger (OffHand)", Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function daggerOffHand() {
    var dagger = { Name: "Dagger (OffHand)", Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function ironDaggerOffHand() {
    var dagger = { Name: "Iron Dagger (OffHand)", Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 2, DamageType: piercingDamage(), Cost: 4, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function steelDaggerOffHand() {
    var dagger = { Name: "Steel Dagger (OffHand)", Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: shortBladeSkill(), Damage: 3, DamageType: piercingDamage(), Cost: 6, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
//shields
export function woodenShield() {
    var woodenShield = { Name: "Wooden Shield", Slot: "OffHand", Type: "Equipable", Class: blockSkill(), SubType: "Shield", Protection: 1, ProtectionType: woodProtection(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return woodenShield;
}
//weapons
//magic weapons
//melee weapons
//natural weapons
//clubs
export function club() {
    var club = { Name: "Club", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 1, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return club;
}
export function woodenclub() {
    var club = { Name: "Wooden Club", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: bluntSKill(), Damage: 1, DamageType: bludeoningDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return club;
}
//daggers
export function bronzeDagger() {
    var dagger = { Name: "Bronze Dagger", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function dagger() {
    var dagger = { Name: "Dagger", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 2, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function ironDagger() {
    var dagger = { Name: "Iron Dagger", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 2, DamageType: piercingDamage(), Cost: 4, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
export function steelDagger() {
    var dagger = { Name: "Steel Dagger", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: shortBladeSkill(), Damage: 3, DamageType: piercingDamage(), Cost: 6, Quantity: 1, Enchantment: unEnchanted() }
    return dagger;
}
//natural weapons
export function bareFist() {
    var bare = { Name: "Fist", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 0, DamageType: bludeoningDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bare;
}
export function bite() {
    var bite = { Name: "Bite", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: unArmedSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 0, Quantity: 1, Enchantment: unEnchanted() }
    return bite;
}
//swords
export function bronzeSword() {
    var sword = { Name: "Bronze Sword", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 2, DamageType: slashingDamage(), Cost: 5, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function flamingsword() {
    var sword = { Name: "Flaming Sword", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 5, DamageType: slashingDamage(), Cost: 50, Quantity: 1, Enchantment: fireEnchantment() }
    return sword;
}
export function ironSword() {
    var sword = { Name: "Iron Sword", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 3, DamageType: slashingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function steelSword() {
    var sword = { Name: "Steel Sword", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 4, DamageType: slashingDamage(), Cost: 15, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
export function sword() {
    var sword = { Name: "Sword", Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: longBladeSkill(), Damage: 5, DamageType: slashingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return sword;
}
//ranged weapon
export function woodBow() {
    var bow = { Name: "Wood Bow", Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: rangedSkill(), Damage: 1, DamageType: piercingDamage(), Cost: 10, Quantity: 1, Enchantment: unEnchanted() }
    return bow;
}
//junk
export function ratTail() {
    var ratTail = { Name: "Rat Tail", Type: "Junk", SubType: "", Cost: 1, Quantity: 1 }
    return ratTail;
}
//resources
export function ashes() {
    var ashes = { Name: "Ashes", Type: "Resource", SubType: "Ashes", Cost: 1, Quantity: 1 }
    return ashes
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
export function rawRabbitMeat() {
    var rawRabbitMeat = { Name: "Raw Rabbit Meat", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return rawRabbitMeat;
}
export function rawRatMeat() {
    var rawRatMeat = { Name: "Raw Rat Meat", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return rawRatMeat;
}
//wood
export function woodLogs() {
    var wood = { Name: "Wood Logs", Type: "Resource", SubType: "Logs", Cost: 2, Quantity: 1 }
    return wood;
}
//tools
//fishing
export function fishingRod()
{
    var fishingRod = { Name: "Fishing Rod", Type: "Tool", SubType: "Fishing Rod", Cost: 1, Quantity: 1 }
    return fishingRod
}
//hatchets
export function hatchet()
{
    var hatchet = { Name: "Pickaxe", Type: "Tool", SubType: "Hatchet", Cost: 1, Quantity: 1 }
    return hatchet
}
//knife
export function knife()
{
    var knife = { Name: "Knife", Type: "Tool", SubType: "Knife", Cost: 1, Quantity: 1 }
    return knife
}
//pickaxes
export function pickAxe()
{
    var pickAxe = { Name: "Pickaxe", Type: "Tool", SubType: "Pickaxe", Cost: 1, Quantity: 1 }
    return pickAxe
}
//tinderboxes
export function tinderBox()
{
    var tinderBox = { Name: "Tinderbox", Type: "Tool", SubType: "Tinder Box", Cost: 1, Quantity: 1 }
    return tinderBox
}