import { BludgeoningDamage, FireDamage, ForceDamage, NecroticDamage, PiercingDamage, SlashingDamage } from "./DamageTypesDB";
import { DrunkDeBuff } from "./DeBuffsDB";
import { FireEnchantment, FireImmuneEnchantment, IceResistEnchantment, PoisonApplyEnchantment, StrengthEnchantment, UnEnchanted } from "./EnchantmentsDB";
import { ClothProtection, LeatherProtection, MetalProtection, NaturalProtection, WoodProtection } from "./ProtectionTypesDB";
import { BarterSkill, BlockSkill, HeavyWeaponSkill, DestructionSkill, HeavyArmorSkill, LightArmorSkill, RangedSkill, LightWeaponSkill, SmithingSkill, UnArmedSkill, UnArmoredSkill } from "./SkillsDB";
import { bane, basicHeal, basicMassHeal, bless, curePoison, fireBall, heroism, inspireCourage, magicMissile, poisonSpray, sleepSpell, summonRat, summonSkeleton, summonSpider, webSpell } from "./SpellsDB";
import { LearnAbility, LearnSpell } from "../Scripts/AbilityAndSpellScripts";
import { RemoveCondition } from "../Scripts/BuffConditionAndDeBuffScripts";
import { AddToCharacterLog, EarnXP, HealHP, RecoverMP, RecoverSP } from "../Scripts/CharacterScripts";
import { AddToCombatLog, BasicAttack, } from "../Scripts/CombatScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "../Scripts/SkillScripts";
import { Cleave, PierceArmor, Rage, RaiseShield, StudyFoes } from "./AbilitiesDB";
//items
export function bronzeShrapnel() {
    var shrapnel = { Name: "Bronze Shrapnel", Level: 1, Slot: "", Type: "", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new FireDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return shrapnel;
}
export function ironShrapnel() {
    var shrapnel = { Name: "Iron Shrapnel", Level: 5, Slot: "", Type: "", SubType: "", Class: new RangedSkill(), Damage: 5, DamageType: new FireDamage(this), Cost: 10, Quantity: 5, Enchantment: new UnEnchanted() }
    return shrapnel;
}
export function steelShrapnel() {
    var shrapnel = { Name: "Steel Shrapnel", Level: 10, Slot: "", Type: "", SubType: "", Class: new RangedSkill(), Damage: 7, DamageType: new FireDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return shrapnel;
}
//consumables
//battle items
export function bomb() {
    var bomb = { Name: "Bomb", Type: "Consumable", SubType: "Battle", Cost: 10, Quantity: 1, ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { BasicAttack(hero, enemies[e], combatLog, bronzeShrapnel()) } } }
    return bomb
}
export function bronzeBomb() {
    var bomb = { Name: "Bronze Bomb", Type: "Consumable", SubType: "Battle", Cost: 20, Quantity: 1, ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { BasicAttack(hero, enemies[e], combatLog, bronzeShrapnel()) } } }
    return bomb
}
export function ironBomb() {
    var bomb = { Name: "Iron Bomb", Type: "Consumable", SubType: "Battle", Cost: 40, Quantity: 1, ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { BasicAttack(hero, enemies[e], combatLog, ironShrapnel()) } } }
    return bomb
}
export function steelBomb() {
    var bomb = { Name: "Steel Bomb", Type: "Consumable", SubType: "Battle", Cost: 60, Quantity: 1, ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { BasicAttack(hero, enemies[e], combatLog, steelShrapnel()) } } }
    return bomb
}
//drinks
export function ale() {
    var ale = { Name: "Ale", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks an " + this.Name); RecoverSP(hero, 1); RecoverMP(hero, 1); new DrunkDeBuff(3).ApplyDeBuff(hero) } }
    return ale
}
export function milk() {
    var milk = { Name: "Milk", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks a " + this.Name + " you have strong bones."); } }
    return milk
}
export function water() {
    var water = { Name: "Water", Type: "Consumable", SubType: "Drink", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks a " + this.Name + " and feels more hydrated."); } }
    return water
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
export function cookedChicken() {
    var cook = { Name: "Cooked Chicken", Type: "Consumable", SubType: "Food", Cost: 2, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, 1); HealHP(hero, 1) } }
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
export function cleaveScroll() {
    var scroll = { Name: "Scroll of Cleave", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, new Cleave()) } }
    return scroll;
}
export function pierceArmorScroll() {
    var scroll = { Name: "Scroll of Pierce Armor", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, new PierceArmor()) } }
    return scroll;
}
export function rageScroll() {
    var scroll = { Name: "Scroll of Rage", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, new Rage()) } }
    return scroll;
}
export function raiseShieldScroll() {
    var scroll = { Name: "Scroll of Raise Shield", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, new RaiseShield()) } }
    return scroll;
}
export function studyFoesScroll() {
    var scroll = { Name: "Scroll of Study Foes", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, new StudyFoes()) } }
    return scroll;
}
//spellscroll
export function allHealingScrolls() {
    var all = [baneScroll(), basicHealScroll(), basicMassHealScroll(), blessScroll(), curePoisonScroll(), heroismScroll()]
    return all
}
export function allSpellScrolls() {
    var all = [fireBallScroll(), inspireCourageScroll(), magicMissileScroll(), poisonSprayScroll(), sleepSpell(), summonRatScroll(), summonSkeletonScroll(), summonSpiderScroll()]
    return all;
}
export function baneScroll() {
    var scroll = { Name: "Scroll of Bane", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, bane()) } }
    return scroll;
}
export function basicHealScroll() {
    var scroll = { Name: "Scroll of Basic Heal", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, basicHeal()) } }
    return scroll;
}
export function basicMassHealScroll() {
    var scroll = { Name: "Scroll of Basic Mass Heal", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, basicMassHeal()) } }
    return scroll;
}
export function blessScroll() {
    var scroll = { Name: "Scroll of Bless", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, bless()) } }
    return scroll;
}
export function curePoisonScroll() {
    var scroll = { Name: "Scroll of Cure Poison", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, curePoison()) } }
    return scroll;
}
export function fireBallScroll() {
    var scroll = { Name: "Scroll of Fireball", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, fireBall()) } }
    return scroll;
}
export function heroismScroll() {
    var scroll = { Name: "Scroll of Heroism", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, heroism()) } }
    return scroll;
}
export function inspireCourageScroll() {
    var scroll = { Name: "Scroll of Inspire Courage", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, inspireCourage()) } }
    return scroll;
}
export function magicMissileScroll() {
    var magicMissileScroll = { Name: "Scroll of Magic Missile", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, magicMissile()) } }
    return magicMissileScroll;
}
export function poisonSprayScroll() {
    var scroll = { Name: "Scroll of Poison Spray", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, poisonSpray()) } }
    return scroll;
}
export function sleepScroll() {
    var scroll = { Name: "Scroll of Sleep", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, sleepSpell()) } }
    return scroll;
}
export function summonRatScroll() {
    var scroll = { Name: "Scroll of Summon Rat", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, summonRat()) } }
    return scroll;
}
export function summonSkeletonScroll() {
    var scroll = { Name: "Scroll of Summon Skeleton", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, summonSkeleton()) } }
    return scroll;
}
export function summonSpiderScroll() {
    var scroll = { Name: "Scroll of Summon Spider", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, summonSpider()) } }
    return scroll;
}
export function webScroll() {
    var scroll = { Name: "Scroll of Web", Type: "Consumable", SubType: "Scroll", Cost: 10, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, webSpell()) } }
    return scroll;
}
//xp lamps
export function lessonsFromFaldan() {
    var lessonsFromFaldan = { Name: "Lessons from Faldan", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); EarnSkillXP(hero, FindSkillInSkillBook(hero, new SmithingSkill()), 500) } }
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
    var tips = { Name: "Trading Tips from Joe the Trader", Type: "Consumable", SubType: "Lamp", Cost: 0, Quantity: 1, ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); EarnSkillXP(hero, FindSkillInSkillBook(hero, new BarterSkill()), 500) } }
    return tips
}
//equipables
export function allBronze() {
    var all = [bronzeAxe(), bronzeAxe2H(), bronzeBoots(), bronzeCrossBow1H(), bronzeCrossBow2H(), bronzeCrossBowOffHand(), bronzeDagger(), bronzeDaggerOffHand(), bronzeGauntlets(), bronzeHatchet(), bronzeHelmet(), bronzeLegs(), bronzeMace(), bronzePickAxe(), bronzePistol(), bronzePistolOffHand(), bronzeRifle(), bronzeShield(), bronzeSword(), bronzeSword2H(), bronzeTools, bronzeTorso(), bronzeWarHammer(), bronzeWarHammer2H()]
    return all;
}
export function allIron() {
    var all = [ironAxe(), ironAxe2H(), ironBoots(), ironDagger(), ironCrossBow1H(), ironCrossBow2H(), ironCrossBowOffHand(), ironDaggerOffHand(), ironGauntlets(), ironHatchet(), ironHelmet(), ironLegs(), ironMace(), ironPickAxe(), ironPistol(), ironPistolOffHand(), ironRifle(), ironShield(), ironSword(), ironSword2H(), ironTools(), ironTorso(), ironWarHammer(), ironWarHammer2H()]
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
    var bare = { Name: "None", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function capeOfFireImmunity() {
    var cape = { Name: "Cape of Fire Immunity", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new FireImmuneEnchantment() }
    return cape;
}
export function cloak() {
    var cloak = { Name: "Cloak", Level: 1, Slot: "Back", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new IceResistEnchantment() }
    return cloak;
}
//neck
export function bareNeck() {
    var bare = { Name: "None", Level: 1, Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function dogCollar() {
    var dog = { Name: "Dog Collar", Level: 1, Slot: "Neck", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return dog;
}
//ring
export function bareFinger() {
    var bare = { Name: "None", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function ringOfStr() {
    var ring = { Name: "Ring of Strength", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 10, Quantity: 1, Enchantment: new StrengthEnchantment() }
    return ring;
}
export function silverRingLR() {
    var ring = { Name: "Silver Ring engraved with the Initials CR ", Level: 1, Slot: "Ring", Type: "Equipable", SubType: "", Cost: 10, Quantity: 1, Enchantment: new StrengthEnchantment() }
    return ring;
}
//armor
//feet
export function bareFeet() {
    var bare = { Name: "None", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new NaturalProtection(), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bronzeBoots() {
    var boots = { Name: "Bronze Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 1, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return boots;
}
export function hardLeatherBoots() {
    var boots = { Name: "Hard Leather Boots", Level: 5, Slot: "Feet", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 2, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return boots;
}
export function ironBoots() {
    var boots = { Name: "Iron Boots", Level: 5, Slot: "Feet", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 2, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return boots;
}
export function leatherBoots() {
    var boots = { Name: "Leather Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 1, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return boots;
}
export function shoes() {
    var shoes = { Name: "Shoes", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shoes;
}
export function spiderSilkBoots() {
    var shoes = { Name: "Spider Silk Boots", Level: 5, Slot: "Feet", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 2, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shoes;
}
export function steelBoots() {
    var boots = { Name: "Steel Boots", Level: 10, Slot: "Feet", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 3, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return boots;
}
export function woolBoots() {
    var shoes = { Name: "Wool Boots", Level: 1, Slot: "Feet", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shoes;
}
//hands
export function bareHands() {
    var bare = { Name: "None", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new NaturalProtection(), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bronzeGauntlets() {

    var gauntlets = { Name: "Bronze Gauntlets", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 1, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gauntlets;
}
export function gloves() {
    var gloves = { Name: "Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gloves;
}
export function hardLeatherGloves() {
    var gloves = { Name: "Hard Leather Gloves", Level: 5, Slot: "Hands", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 2, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gloves;
}
export function ironGauntlets() {

    var gauntlets = { Name: "Iron Gauntlets", Level: 5, Slot: "Hands", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 2, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gauntlets;
}
export function leatherGloves() {
    var gloves = { Name: "Leather Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 1, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gloves;
}
export function spiderSilkGloves() {
    var gloves = { Name: "Spider Silk Gloves", Level: 5, Slot: "Hands", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 2, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gloves;
}
export function steelGauntlets() {

    var gauntlets = { Name: "Steel Gauntlets", Level: 10, Slot: "Hands", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 3, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gauntlets;
}
export function woolGloves() {
    var gloves = { Name: "Wool Gloves", Level: 1, Slot: "Hands", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gloves;
}
//head
export function bareHead() {
    var bare = { Name: "None", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new NaturalProtection(), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bronzeHelmet() {
    var helmet = { Name: "Bronze Helmet", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 1, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return helmet;
}
export function hat() {
    var hat = { Name: "Hat", Slot: "Head", Level: 1, Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
export function hardLeatherCowl() {
    var hat = { Name: "Hard Leather Cowl", Level: 5, Slot: "Head", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 2, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
export function ironHelmet() {
    var helmet = { Name: "Iron Helmet", Level: 5, Slot: "Head", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 2, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return helmet;
}
export function leatherCowl() {
    var hat = { Name: "Leather Cowl", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 1, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
export function spiderSilkWizardHat() {
    var hat = { Name: "Spider Silk Wizard Hat", Level: 5, Slot: "Head", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 2, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
export function steelHelmet() {
    var helmet = { Name: "Steel Helmet", Level: 10, Slot: "Head", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 3, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return helmet;
}
export function woolHat() {
    var hat = { Name: "Wool Hat", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
export function woolWizardHat() {
    var hat = { Name: "Wool Wizard Hat", Level: 1, Slot: "Head", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return hat;
}
//legs
export function bareLegs() {
    var bare = { Name: "None", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new NaturalProtection(), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bronzeLegs() {
    var legs = { Name: "Bronze Legs", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 1, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function hardLeatherLegs() {
    var legs = { Name: "Hard Leather Legs", Level: 5, Slot: "Legs", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 2, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function ironLegs() {
    var legs = { Name: "Iron Legs", Level: 5, Slot: "Legs", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 2, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function leatherLegs() {
    var legs = { Name: "Leather Legs", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 1, ProtectionType: new LeatherProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function loinCloth() {
    var loinCloth = { Name: "Loincloth", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return loinCloth
}
export function spiderSilkRobeBottom() {
    var legs = { Name: "Spider Silk Robe Bottom", Level: 5, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function steelLegs() {
    var legs = { Name: "Steel Legs", Level: 10, Slot: "Legs", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 3, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
export function trousers() {
    var trousers = { Name: "Trousers", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return trousers;
}
export function woolTrousers() {
    var trousers = { Name: "Wool Trousers", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return trousers;
}
export function woolRobeBottom() {
    var legs = { Name: "Wool Robe Bottom", Level: 1, Slot: "Legs", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return legs;
}
//torso
export function bareTorso() {
    var bare = { Name: "None", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new NaturalProtection(), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bronzeTorso() {
    var torso = { Name: "Bronze Armor", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 1, ProtectionType: new MetalProtection(), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function hardLeatherTorso() {
    var torso = { Name: "Hard Leather Armor", Level: 5, Slot: "Torso", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 2, ProtectionType: new LeatherProtection(), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function ironTorso() {
    var torso = { Name: "Iron Armor", Level: 5, Slot: "Torso", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 2, ProtectionType: new MetalProtection(), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function leatherTorso() {
    var torso = { Name: "Leather Armor", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new LightArmorSkill(), Protection: 1, ProtectionType: new LeatherProtection(), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function spiderSilkRobeTop() {
    var torso = { Name: "Spider Silk Robe Torso", Level: 5, Slot: "Torso", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 2, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function steelTorso() {
    var torso = { Name: "Steel Armor", Level: 10, Slot: "Torso", Type: "Equipable", SubType: "", Class: new HeavyArmorSkill(), Protection: 3, ProtectionType: new MetalProtection(), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function tunic() {
    var tunic = { Name: "Tunic", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return tunic;
}
export function woolRobeTop() {
    var torso = { Name: "Wool Robe Torso", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 1, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return torso;
}
export function woolTunic() {
    var tunic = { Name: "Wool Tunic", Level: 1, Slot: "Torso", Type: "Equipable", SubType: "", Class: new UnArmoredSkill(), Protection: 0, ProtectionType: new ClothProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return tunic;
}
//offhands
//offhand weapoms
export function emptyOffHand() {
    var empty = { Name: "None", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "None", Class: new UnArmedSkill(), Damage: 0, DamageType: new BludgeoningDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return empty;
}

//crossbows
export function bronzeCrossBowOffHand() {
    var bow = { Name: "Bronze Crossbow (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function ironCrossBowOffHand() {
    var bow = { Name: "Iron Crossbow (OffHand)", Level: 5, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 2, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 5, Enchantment: new UnEnchanted() }
    return bow;
}
export function steelCrossBowOffHand() {
    var bow = { Name: "Steel Crossbow (OffHand)", Level: 10, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
//daggers
export function bronzeDaggerOffHand() {
    var dagger = { Name: "Bronze Dagger (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new LightWeaponSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function daggerOffHand() {
    var dagger = { Name: "Dagger (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: new LightWeaponSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function ironDaggerOffHand() {
    var dagger = { Name: "Iron Dagger (OffHand)", Level: 5, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: new LightWeaponSkill(), Damage: 2, DamageType: new PiercingDamage(this), Cost: 4, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function steelDaggerOffHand() {
    var dagger = { Name: "Steel Dagger (OffHand)", Level: 10, Slot: "OffHand", Type: "Equipable", SubType: "Weapon", Class: new LightWeaponSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 6, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
//pistol
export function bronzePistolOffHand() {
    var gun = { Name: "Bronze Pistol (OffHand)", Level: 1, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function ironPistolOffHand() {
    var gun = { Name: "Iron Pistol (OffHand)", Level: 5, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 2, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 5, Enchantment: new UnEnchanted() }
    return gun;
}
export function steelPistolOffHand() {
    var gun = { Name: "Steel Pistol (OffHand)", Level: 10, Slot: "OffHand", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
//shields
export function bronzeShield() {
    var shield = { Name: "Bronze Shield", Level: 1, Slot: "OffHand", Type: "Equipable", Class: new BlockSkill(), SubType: "Shield", Protection: 1, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shield;
}
export function ironShield() {
    var shield = { Name: "Iron Shield", Level: 5, Slot: "OffHand", Type: "Equipable", Class: new BlockSkill(), SubType: "Shield", Protection: 2, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shield;
}
export function steelShield() {
    var shield = { Name: "Steel Shield", Level: 10, Slot: "OffHand", Type: "Equipable", Class: new BlockSkill(), SubType: "Shield", Protection: 3, ProtectionType: new MetalProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shield;
}
export function woodenShield() {
    var shield = { Name: "Wooden Shield", Level: 1, Slot: "OffHand", Type: "Equipable", Class: new BlockSkill(), SubType: "Shield", Protection: 1, ProtectionType: new WoodProtection(), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return shield;
}
//weapons
//magic weapons
//1h magic weapons
export function oakWand() {
    var wand = { Name: "Oak Wand", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new DestructionSkill(), Damage: 3, DamageType: new ForceDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return wand;
}
export function willowWand() {
    var wand = { Name: "Willow Wand", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new DestructionSkill(), Damage: 4, DamageType: new ForceDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return wand;
}
export function woodWand() {
    var wand = { Name: "Wooden Wand", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new DestructionSkill(), Damage: 2, DamageType: new ForceDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return wand;
}
//2h magic weapons
export function oakStaff() {
    var staff = { Name: "Oak Staff", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new DestructionSkill(), Damage: 4, DamageType: new ForceDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return staff;
}
export function willowStaff() {
    var staff = { Name: "Willow Staff", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new DestructionSkill(), Damage: 5, DamageType: new ForceDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return staff;
}
export function woodStaff() {
    var staff = { Name: "Wooden Staff", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new DestructionSkill(), Damage: 3, DamageType: new ForceDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return staff;
}
//melee weapons
//axes
//1h axes
export function bronzeAxe() {
    var axe = { Name: "Bronze Axe", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 2, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
export function ironAxe() {
    var axe = { Name: "Iron Axe", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
export function steelAxe() {
    var axe = { Name: "Steel Axe", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
//2h axes
export function bronzeAxe2H() {
    var axe = { Name: "Bronze Axe 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
export function ironAxe2H() {
    var axe = { Name: "Iron Axe 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
export function steelAxe2H() {
    var axe = { Name: "Iron Axe 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 5, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return axe;
}
//clubs
export function club() {
    var club = { Name: "Club", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 1, DamageType: new BludgeoningDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return club;
}
export function woodenclub() {
    var club = { Name: "Wooden Club", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 1, DamageType: new BludgeoningDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return club;
}
//daggers
export function bronzeDagger() {
    var dagger = { Name: "Bronze Dagger", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new LightWeaponSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function dagger() {
    var dagger = { Name: "Dagger", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new LightWeaponSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function ironDagger() {
    var dagger = { Name: "Iron Dagger", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new LightWeaponSkill(), Damage: 2, DamageType: new PiercingDamage(this), Cost: 4, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
export function steelDagger() {
    var dagger = { Name: "Steel Dagger", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new LightWeaponSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 6, Quantity: 1, Enchantment: new UnEnchanted() }
    return dagger;
}
//maces
export function bronzeMace() {
    var mace = { Name: "Bronze Mace", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 2, DamageType: new BludgeoningDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return mace;
}
export function ironMace() {
    var mace = { Name: "Iron Mace", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new BludgeoningDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return mace;
}
export function steelMace() {
    var mace = { Name: "Steel Mace", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new BludgeoningDamage(this), Cost: 2, Quantity: 1, Enchantment: new UnEnchanted() }
    return mace;
}
//natural weapons
export function bareFist() {
    var bare = { Name: "Fist", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 0, DamageType: new BludgeoningDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bare;
}
export function bite() {
    var bite = { Name: "Bite", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bite;
}
export function clawSlash() {
    var slash = { Name: "Slam", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 2, DamageType: new SlashingDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return slash;
}
export function ghostTouch() {
    var touch = { Name: "Ghost Touch", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new DestructionSkill(), Damage: 1, DamageType: new NecroticDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return touch;
}
export function peck() {
    var bite = { Name: "Peck", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return bite;
}
export function poisonedBite() {
    var bite = { Name: "Poisoned Bite", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 0, Quantity: 1, Enchantment: new PoisonApplyEnchantment() }
    return bite;
}
export function slam() {
    var slam = { Name: "Slam", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new UnArmedSkill(), Damage: 1, DamageType: new BludgeoningDamage(this), Cost: 0, Quantity: 1, Enchantment: new UnEnchanted() }
    return slam;
}
//swords
//1hswords
export function bronzeSword() {
    var sword = { Name: "Bronze Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 2, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
export function flamingsword() {
    var sword = { Name: "Flaming Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 5, DamageType: new SlashingDamage(this), Cost: 50, Quantity: 1, Enchantment: new FireEnchantment() }
    return sword;
}
export function ironSword() {
    var sword = { Name: "Iron Sword", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new SlashingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
export function steelSword() {
    var sword = { Name: "Steel Sword", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new SlashingDamage(this), Cost: 15, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
export function sword() {
    var sword = { Name: "Sword", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 2, DamageType: new SlashingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
//2hswords
export function bronzeSword2H() {
    var sword = { Name: "Bronze Sword 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
export function ironSword2H() {
    var sword = { Name: "Iron Sword 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
export function steelSword2H() {
    var sword = { Name: "Steel Sword 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 5, DamageType: new SlashingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return sword;
}
//warhammers
//1h warhammer
export function bronzeWarHammer() {
    var hammer = { Name: "Bronze WarHammer", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 2, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
export function ironWarHammer() {
    var hammer = { Name: "Iron WarHammer", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
export function steelWarHammer() {
    var hammer = { Name: "Steel WarHammer", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
//2h warhammer
export function bronzeWarHammer2H() {
    var hammer = { Name: "Bronze WarHammer 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 3, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
export function ironWarHammer2H() {
    var hammer = { Name: "Iron WarHammer 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 4, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
export function steelWarHammer2H() {
    var hammer = { Name: "Steel WarHammer 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new HeavyWeaponSkill(), Damage: 5, DamageType: new BludgeoningDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return hammer;
}
//ranged weapon
//bows
export function oakLongBow() {
    var bow = { Name: "Oak Long Bow", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 4, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function oakShortBow() {
    var bow = { Name: "Oak Short Bow", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 4, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function willowLongBow() {
    var bow = { Name: "Willow Long Bow", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 5, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function willowShortBow() {
    var bow = { Name: "Willow Short Bow", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 5, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function woodLongBow() {
    var bow = { Name: "Wood Long Bow", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function woodShortBow() {
    var bow = { Name: "Wood Short Bow", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
//crossbows
export function bronzeCrossBow1H() {
    var bow = { Name: "Bronze Crossbow 1H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function bronzeCrossBow2H() {
    var bow = { Name: "Bronze Crossbow 2H", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function ironCrossBow1H() {
    var bow = { Name: "Iron Crossbow 1H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 2, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function ironCrossBow2H() {
    var bow = { Name: "Iron Crossbow 2H", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 4, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function steelCrossBow1H() {
    var bow = { Name: "Steel Crossbow 1H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
export function steelCrossBow2H() {
    var bow = { Name: "Steel Crossbow 2H", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 5, DamageType: new PiercingDamage(this), Cost: 20, Quantity: 1, Enchantment: new UnEnchanted() }
    return bow;
}
//guns
export function bronzePistol() {
    var gun = { Name: "Bronze Pistol", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 1, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function bronzeRifle() {
    var gun = { Name: "Bronze Rifle", Level: 1, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 5, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function ironPistol() {
    var gun = { Name: "Iron Pistol", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function ironRifle() {
    var gun = { Name: "Iron Rifle", Level: 5, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 4, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function steelPistol() {
    var gun = { Name: "Steel Pistol", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "OneHand", Class: new RangedSkill(), Damage: 3, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
export function steelRifle() {
    var gun = { Name: "Steel Rifle", Level: 10, Slot: "Weapon", Type: "Equipable", SubType: "TwoHands", Class: new RangedSkill(), Damage: 5, DamageType: new PiercingDamage(this), Cost: 10, Quantity: 1, Enchantment: new UnEnchanted() }
    return gun;
}
//junk
export function banditSpoils() {
    var bandit = { Name: "Bandit Spoils", Type: "Junk", SubType: "Vendor Trash", Cost: 50, Quantity: 1, ConsumeEffect(hero) { } }
    return bandit;
}
export function ratTail() {
    var ratTail = { Name: "Rat Tail", Type: "Junk", SubType: "", Cost: 1, Quantity: 1 }
    return ratTail;
}
//burnt food
export function burntBread() {
    var bread = { Name: "Burnt Bread", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return bread
}
export function burntBeef() {
    var cook = { Name: "Burnt Beef", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cook;
}
export function burntChicken() {
    var cook = { Name: "Burnt Chicken", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cook;
}
export function burntFish() {
    var cook = { Name: "Burnt Fish", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cook;
}
export function burntRabbitMeat() {
    var cookedRabbitMeat = { Name: "Burnt Rabbit Meat", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cookedRabbitMeat;
}
export function burntRatMeat() {
    var cookedRatMeat = { Name: "Burnt Rat Meat", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return cookedRatMeat;
}
export function burntStew() {
    var stew = { Name: "Burnt Stew", Type: "Junk", SubType: "Burnt Food", Cost: 0, Quantity: 1, ConsumeEffect(hero) { } }
    return stew;
}
//processed resources
//alchemy
export function gunPowder() {
    var gun = { Name: "Dough", Type: "Processed", SubType: "Processed", Cost: 5, Quantity: 1 }
    return gun;
}
//cooking
export function dough() {
    var dough = { Name: "Dough", Type: "Processed", SubType: "Baking", Cost: 2, Quantity: 1 }
    return dough;
}
export function flour() {
    var flour = { Name: "Flour", Type: "Processed", SubType: "Baking", Cost: 2, Quantity: 1 }
    return flour;
}
//firemaking
export function ashes() {
    var ashes = { Name: "Ashes", Type: "Processed", SubType: "Ashes", Cost: 1, Quantity: 1 }
    return ashes
}
export function charcoal() {
    var charcoal = { Name: "Charcoal", Type: "Processed", SubType: "Charcoal", Cost: 1, Quantity: 1 }
    return charcoal;
}
//fletching
export function oakStock() {
    var stock = { Name: "Oak Stock", Type: "Processed", SubType: "Stock", Cost: 5, Quantity: 1 }
    return stock;
}
export function willowStock() {
    var stock = { Name: "Willow Stock", Type: "Processed", SubType: "Stock", Cost: 10, Quantity: 1 }
    return stock;
}
export function woodStock() {
    var stock = { Name: "Wood Stock", Type: "Processed", SubType: "Stock", Cost: 1, Quantity: 1 }
    return stock;
}
//smithing
export function bronzeBarrel() {
    var barrel = { Name: "Bronze Barrel", Type: "Processed", SubType: "Barrel", Cost: 1, Quantity: 1 }
    return barrel;
}
export function bronzeLimbs() {
    var limbs = { Name: "Bronze Limbs", Type: "Processed", SubType: "Limbs", Cost: 1, Quantity: 1 }
    return limbs;
}
export function ironBarrel() {
    var barrel = { Name: "Iron Barrel", Type: "Processed", SubType: "Barrel", Cost: 5, Quantity: 1 }
    return barrel;
}
export function ironLimbs() {
    var limbs = { Name: "Iron Limbs", Type: "Processed", SubType: "Limbs", Cost: 1, Quantity: 1 }
    return limbs;
}
export function steelBarrel() {
    var barrel = { Name: "Steel Barrel", Type: "Processed", SubType: "Barrel", Cost: 10, Quantity: 1 }
    return barrel;
}
export function steelLimbs() {
    var limbs = { Name: "Steel Limbs", Type: "Processed", SubType: "Limbs", Cost: 1, Quantity: 1 }
    return limbs;
}
//resources
//animal drop
export function batGuano() {
    var bat = { Name: "Bat Guano", Type: "Resource", SubType: "Animal Drop", Cost: 1, Quantity: 1 }
    return bat;
}
//bones
export function bones() {
    var bones = { Name: "Bones", Type: "Resource", SubType: "Bones", Cost: 1, Quantity: 1 }
    return bones;
}
export function ectoplasm() {
    var ectoplasm = { Name: "Ectoplasm", Type: "Resource", SubType: "Bones", Cost: 1, Quantity: 1 }
    return ectoplasm;
}
export function skull() {
    var bones = { Name: "Skull", Type: "Resource", SubType: "Bones", Cost: 1, Quantity: 1 }
    return bones;
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
//feathers
export function blackFeather() {
    var feathers = { Name: "Black Feather", Type: "Resource", SubType: "Feather", Cost: 1, Quantity: 1 }
    return feathers
}
export function feather() {
    var feathers = { Name: "Feather", Type: "Resource", SubType: "Feather", Cost: 1, Quantity: 1 }
    return feathers
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
export function saltPeter() {
    var ore = { Name: "Saltpeter", Type: "Resource", SubType: "Ore", Cost: 2, Quantity: 1 }
    return ore
}
export function sulphur() {
    var ore = { Name: "Sulphur", Type: "Resource", SubType: "Ore", Cost: 2, Quantity: 1 }
    return ore
}
export function tinOre() {
    var ore = { Name: "Tin Ore", Type: "Resource", SubType: "Ore", Cost: 1, Quantity: 1 }
    return ore
}
//plant
export function wheat() {
    var wheat = { Name: "Wheat", Type: "Resource", SubType: "Plant", Cost: 1, Quantity: 1 }
    return wheat;
}
//raw fish
export function rawFish() {
    var raw = { Name: "Raw Fish", Type: "Resource", SubType: "Raw Fish", Cost: 2, Quantity: 1 }
    return raw;
}
//raw meat
export function rawBeef() {
    var raw = { Name: "Raw Beef", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
    return raw;
}
export function rawChicken() {
    var raw = { Name: "Raw Chicken", Type: "Resource", SubType: "Raw Meat", Cost: 2, Quantity: 1 }
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
//engineering
export function bronzeTools() {
    var tool = { Name: "Bronze Tools", Type: "Tool", SubType: "Tools", Tier: 1, Cost: 1, Quantity: 1 }
    return tool
}
export function tools() {
    var tool = { Name: "Tools", Type: "Tool", SubType: "Tools", Tier: 1, Cost: 1, Quantity: 1 }
    return tool
}
export function ironTools() {
    var tool = { Name: "Iron Tools", Type: "Tool", SubType: "Tools", Tier: 2, Cost: 5, Quantity: 1 }
    return tool
}
export function steelTools() {
    var tool = { Name: "Steel Tools", Type: "Tool", SubType: "Tools", Tier: 3, Cost: 10, Quantity: 1 }
    return tool
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