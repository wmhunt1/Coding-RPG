import { BludgeoningDamage, FireDamage, ForceDamage, NecroticDamage, NoDamage, PiercingDamage, SlashingDamage } from "./DamageTypesDB";
import { DrunkDeBuff } from "./DeBuffsDB";
import { FireImmuneEnchantment, IceResistEnchantment, PoisonApplyEnchantment, StrengthEnchantment, UnEnchanted } from "./EnchantmentsDB";
import { Pet } from "./JobsDB";
import { ClothProtection, LeatherProtection, MetalProtection, NaturalProtection, WoodProtection } from "./ProtectionTypesDB";
import { BlockSkill, HeavyWeaponSkill, DestructionSkill, HeavyArmorSkill, LightArmorSkill, RangedSkill, LightWeaponSkill, UnArmedSkill, UnArmoredSkill } from "./SkillsDB";
import { Bane, BasicHeal, BasicMassHeal, Bless, CurePoison, FireBall, Heroism, InspireCourage, MagicMissile, PoisonSpray, SleepSpell, SummonRat, SummonSkeleton, SummonSpider, WebSpell } from "./SpellsDB";
import { LearnAbility, LearnSpell } from "../Scripts/AbilityAndSpellScripts";
import { RemoveCondition } from "../Scripts/BuffConditionAndDeBuffScripts";
import { AddToCharacterLog, EarnXP, HealHP, RecoverMP, RecoverSP } from "../Scripts/CharacterScripts";
import { AddToCombatLog, BasicAttack, } from "../Scripts/CombatScripts";
import { EarnSkillXP, FindSkillInSkillBook } from "../Scripts/SkillScripts";
import { Cleave, PierceArmor, Rage, RaiseShield, StudyFoes } from "./AbilitiesDB";

//items
export class Item {
    Name; Type; SubType; Cost; Quantity = 1;
    constructor(name, cost) {
        this.Name = name; this.Cost = cost;
    }
}
//consumables
export class Consumable extends Item {
    constructor(name, cost) {
        super(name, cost)
        this.Type = "Consumable"
    }
    ConsumeEffect(hero, log) { }
}
//consumables
export function innFood() {
    var food = [new Ale(), new Bread(), new Cheese(), new Stew()]
    return food;
}
//battle items
export class BattleItem extends Consumable {
    BattleWeapon;
    constructor(name, cost, battleWep) {
        super(name, cost)
        this.SubType = "Battle"
        this.BattleWeapon = battleWep;
    }
    ConsumeEffect(hero, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, hero.Name + " throws a " + this.Name); for (var e = 0; e < enemies.length; e++) { BasicAttack(hero, enemies[e], combatLog, this.BattleWeapon) } }
}
export class Bomb extends BattleItem {
    constructor(name = "Bomb", cost = 10, battleWep = new BronzeShrapnel()) {
        super(name, cost, battleWep)
    }
}
export class BronzeBomb extends BattleItem {
    constructor(name = "Bronze Bomb", cost = 20, battleWep = new BronzeShrapnel()) {
        super(name, cost, battleWep)
    }
}
export class IronBomb extends BattleItem {
    constructor(name = "Iron Bomb", cost = 40, battleWep = new IronShrapnel()) {
        super(name, cost, battleWep)
    }
}
export class SteelBomb extends BattleItem {
    constructor(name = "Steel Bomb", cost = 60, battleWep = new SteelShrapnel()) {
        super(name, cost, battleWep)
    }
}
//drinks
export class Drink extends Consumable {
    Amount;
    constructor(name, cost, amount) {
        super(name, cost)
        this.SubType = "Drink"; this.Amount = amount;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks an " + this.Name); RecoverSP(hero, this.Amount); RecoverMP(hero, this.Amount) }
}
export class Ale extends Drink {
    constructor(name = "Ale", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks an " + this.Name); RecoverSP(hero, this.Amount); RecoverMP(hero, this.Amount); new DrunkDeBuff(3).ApplyDeBuff(hero) }
}
export class Milk extends Drink {
    constructor(name = "Milk", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks a " + this.Name + " you have strong bones.") }
}
export class Water extends Drink {
    constructor(name = "Water", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks a " + this.Name + " and feels more hydrated."); }
}
//food
export class Food extends Consumable {
    Amount;
    constructor(name, cost, amount) {
        super(name, cost)
        this.SubType = "Food"; this.Amount = amount;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " eats " + this.Name); RecoverSP(hero, this.Amount); HealHP(hero, this.Amount) }
}
export class Bread extends Food {
    constructor(name = "Bread", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Toast extends Bread {
    constructor(name = "Toast", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class ButteredToast extends Toast {
    constructor(name = "Buttered Toast", cost = 2, amount = 2) {
        super(name, cost, amount)
    }
}
export class CookedMeat extends Food {
    constructor(name = "Cooked Meat", cost = 1, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedBeef extends CookedMeat {
    constructor(name = "Cooked Beef", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedChicken extends CookedMeat {
    constructor(name = "Cooked Chicken", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedCrayFish extends CookedMeat {
    constructor(name = "Cooked Crayfish", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedFish extends CookedMeat {
    constructor(name = "Cooked Fish", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedRabbitMeat extends CookedMeat {
    constructor(name = "Cooked Rabbit", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
} export class CookedRatMeat extends CookedMeat {
    constructor(name = "Cooked Rat", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class CookedTrout extends CookedMeat {
    constructor(name = "Cooked Trout", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Dairy extends Food {
    constructor(name = "Dairy", cost = 1, amount = 1) {
        super(name, cost, amount)
    }
}
export class Butter extends Dairy {
    constructor(name = "Butter", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Cheese extends Dairy {
    constructor(name = "Cheese", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Egg extends Food {
    constructor(name = "Egg", cost = 1, amount = 1) {
        super(name, cost, amount)
    }
}
export class Honey extends Food {
    constructor(name = "Honey", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Stew extends Food {
    constructor(name = "Stew", cost = 4, amount = 5) {
        super(name, cost, amount)
    }
}
export class BeefStew extends Stew {
    constructor(name = "Beef Stew", cost = 4, amount = 5) {
        super(name, cost, amount)
    }
}
export class FishStew extends Food {
    constructor(name = "Fish Stew", cost = 4, amount = 5) {
        super(name, cost, amount)
    }
}
export class RabbitStew extends Food {
    constructor(name = "Rabbit Stew", cost = 4, amount = 5) {
        super(name, cost, amount)
    }
}
export class RatStew extends Food {
    constructor(name = "Rat Stew", cost = 4, amount = 5) {
        super(name, cost, amount)
    }
}
export class Vegetable extends Food {
    constructor(name = "Vegetable", cost = 1, amount = 1) {
        super(name, cost, amount)
    }
}
export class Cabbage extends Vegetable {
    constructor(name = "Cabbage", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class Carrot extends Vegetable {
    constructor(name = "Carrot", cost = 2, amount = 1) {
        super(name, cost, amount)
    }
}
export class RawPotato extends Vegetable {
    constructor(name = "Raw Potato", cost = 2, amount = 0) {
        super(name, cost, amount)
    }
}
//potions
export class Potion extends Consumable {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Potion"
    }
}
export class ConditionPotion extends Potion {
    Condition;
    constructor(name, cost, cond) {
        super(name, cost)
        this.Condition = cond;
    }
    ConsumeEffect(hero, log) { if (hero.Conditon.Name === this.Condition) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RemoveCondition(hero, hero.Log) } }
}
export class Antidote extends ConditionPotion {
    constructor(name = "Antidote", cost = 5, cond = "Poisoned") {
        super(name, cost, cond)
    }
}
export class BurnSalve extends ConditionPotion {
    constructor(name = "Burn Salve", cost = 5, cond = "Burned") {
        super(name, cost, cond)
    }
    ConsumeEffect(hero, log) { if (hero.Conditon.Name === this.Condition) { AddToCharacterLog(log, hero.Name + " applies " + this.Name); RemoveCondition(hero, hero.Log) } }
}
export class HealingPotion extends Potion {
    Heal;
    constructor(name = "Healing Potion", cost, heal) {
        super(name, cost)
        this.Heal = heal;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); HealHP(hero, this.Heal) }
}
export class ManaPotion extends Potion {
    Mana;
    constructor(name = "Mana Potion", cost, mp) {
        super(name, cost)
        this.Mana = mp;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RecoverMP(hero, this.Mana) }
}
export class StaminaPotion extends Potion {
    Stamina;
    constructor(name = "StaminaPotion", cost, sp) {
        super(name, cost)
        this.Stamina = sp;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " drinks " + this.Name); RecoverSP(hero, this.Mana) }
}
export function allPotions() {
    var all = [new Antidote(), new HealingPotion(10, 10), new ManaPotion(10, 10), new StaminaPotion(10, 10)]
    return all;
}
//scrolls
export class Scroll extends Consumable {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Scroll"
    }
}
//abilityscroll
export class AbilityScoll extends Scroll {
    Ability;
    constructor(name, cost, abil) {
        super(name, cost, abil)
        this.Ability = abil
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnAbility(hero, this.Ability) }
}
export class CleaveScroll extends AbilityScoll {
    constructor(name = "Scroll of Cleave", cost = 10, abil = new Cleave()) {
        super(name, cost, abil)
    }
}
export class PierceArmorScroll extends AbilityScoll {
    constructor(name = "Scroll of Pierce Armor", cost = 10, abil = new PierceArmor()) {
        super(name, cost, abil)
    }
}
export class RageScroll extends AbilityScoll {
    constructor(name = "Scroll of Rage", cost = 10, abil = new Rage()) {
        super(name, cost, abil)
    }
}
export class RaiseShieldScroll extends AbilityScoll {
    constructor(name = "Scroll of Raise Shield", cost = 10, abil = new RaiseShield()) {
        super(name, cost, abil)
    }
}
export class StudyFoesScroll extends AbilityScoll {
    constructor(name = "Scroll of Study Foes", cost = 10, abil = new StudyFoes()) {
        super(name, cost, abil)
    }
}
//spellscroll
export class SpellScoll extends Scroll {
    Spell;
    constructor(name, cost, spell) {
        super(name, cost, spell)
        this.Spell = spell
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " studies " + this.Name); LearnSpell(hero, this.Spell) }
}
export class BaneScroll extends SpellScoll {
    constructor(name = "Scroll of Bane", cost = 10, spell = new Bane()) {
        super(name, cost, spell)
    }
}
export class BasicHealScroll extends SpellScoll {
    constructor(name = "Scroll of Basic Heal", cost = 10, spell = new BasicHeal()) {
        super(name, cost, spell)
    }
}
export class BasicMassHealScroll extends SpellScoll {
    constructor(name = "Scroll of Mass Basic Heal", cost = 10, spell = new BasicMassHeal()) {
        super(name, cost, spell)
    }
}
export class BlessScroll extends SpellScoll {
    constructor(name = "Scroll of Bless", cost = 10, spell = new Bless()) {
        super(name, cost, spell)
    }
}
export class CurePoisonScroll extends SpellScoll {
    constructor(name = "Scroll of Cure Poison", cost = 10, spell = new CurePoison()) {
        super(name, cost, spell)
    }
}
export class FireBallScroll extends SpellScoll {
    constructor(name = "Scroll of Fireball", cost = 10, spell = new FireBall()) {
        super(name, cost, spell)
    }
}
export class HeroismScroll extends SpellScoll {
    constructor(name = "Scroll of Heroism", cost = 10, spell = new Heroism()) {
        super(name, cost, spell)
    }
}
export class InspireCourageScroll extends SpellScoll {
    constructor(name = "Scroll of Inspire Courage", cost = 10, spell = new InspireCourage()) {
        super(name, cost, spell)
    }
}
export class MagicMissileScroll extends SpellScoll {
    constructor(name = "Scroll of Magic Missile", cost = 10, spell = new MagicMissile()) {
        super(name, cost, spell)
    }
}
export class PoisonSprayScroll extends SpellScoll {
    constructor(name = "Scroll of Poison Spray", cost = 10, spell = new PoisonSpray()) {
        super(name, cost, spell)
    }
}
export class SleepScroll extends SpellScoll {
    constructor(name = "Scroll of Sleep", cost = 10, spell = new SleepSpell()) {
        super(name, cost, spell)
    }
}
export class SummonRatScroll extends SpellScoll {
    constructor(name = "Scroll of Summon Rat", cost = 10, spell = new SummonRat()) {
        super(name, cost, spell)
    }
}
export class SummonSkeletonScroll extends SpellScoll {
    constructor(name = "Scroll of Summon Skeleton", cost = 10, spell = new SummonSkeleton()) {
        super(name, cost, spell)
    }
}
export class SummonSpiderScroll extends SpellScoll {
    constructor(name = "Scroll of Summon Spider", cost = 10, spell = new SummonSpider()) {
        super(name, cost, spell)
    }
}
export class WebScroll extends SpellScoll {
    constructor(name = "Scroll of Web", cost = 10, spell = new WebSpell()) {
        super(name, cost, spell)
    }
}
export function allHealingScrolls() {
    var all = [new BaneScroll(), new BasicHealScroll(), new BasicMassHealScroll(), new BlessScroll(), new CurePoisonScroll(), new HeroismScroll()]
    return all
}
export function allSpellScrolls() {
    var all = [new FireBallScroll(), new InspireCourageScroll(), new MagicMissileScroll(), new PoisonSprayScroll(), new SleepScroll(), new SummonRatScroll(), new SummonSkeletonScroll(), new SummonSpiderScroll()]
    return all;
}
//xp lamps
export class Lamp extends Consumable {
    constructor(name, cost = 0) {
        super(name, cost = 0)
        this.SubType = "Lamp"
    }
}
export class LevelLamp extends Lamp {
    Xp;
    constructor(name, xp) {
        super(name)
        this.Xp = xp;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " rubs " + this.Name + " gaining " + this.Xp + " XP"); EarnXP(hero, this.Xp, hero) }
}
export class SkillLamp extends Lamp {
    Xp; Skill;
    constructor(name, xp, skill) {
        super(name)
        this.Xp = xp; this.Skill = skill;
    }
    ConsumeEffect(hero, log) { AddToCharacterLog(log, hero.Name + " rubs " + this.Name + " gaining " + this.Skill.Name + " " + this.Xp + " XP"); EarnSkillXP(hero, FindSkillInSkillBook(hero, this.Skill), this.Xp) }
}
//equipables
export class Equipable extends Item {
    Level; Slot; Class; Enchantment; Restriction;
    constructor(name, cost, level) {
        super(name, cost)
        this.Level = level; this.Type = "Equipable"; this.Enchantment = new UnEnchanted(); this.Restriction = new Pet()
    }
}
//ammo
export class Ammo extends Equipable {
    Damage; DamageType;
    constructor(name, cost, level, damage, damageType) {
        super(name, cost, level)
        this.Damage = damage; this.DamageType = damageType; this.Class = new RangedSkill(); this.Slot = "Ammo"; this.SubType = ""
    }
}
export class NoAmmo extends Ammo {
    constructor(name = "None", cost = 0, level = 1, damage = 0, damageType = new NoDamage()) {
        super(name, cost, level, damage, damageType)
    }
}
export class BronzeShrapnel extends Ammo {
    constructor(name = "Bronze Shrapnel", cost = 5, level = 1, damage = 3, damageType = new FireDamage()) {
        super(name, cost, level, damage, damageType)
    }
}
export class IronShrapnel extends Ammo {
    constructor(name = "Iron Shrapnel", cost = 10, level = 5, damage = 5, damageType = new FireDamage()) {
        super(name, cost, level, damage, damageType)
    }
}
export class SteelShrapnel extends Ammo {
    constructor(name = "Steel Shrapnel", cost = 20, level = 10, damage = 7, damageType = new FireDamage()) {
        super(name, cost, level, damage, damageType)
    }
}
//accessories
export class Accessory extends Equipable {
    constructor(name, cost, level) {
        super(name, cost, level)
        this.Class = new UnArmoredSkill(); this.Enchantment = new UnEnchanted(); this.SubType = ""
    }
}
//back
export class Back extends Accessory {
    constructor(name, cost, level) {
        super(name, cost, level)
        this.Slot = "Back"
    }
}
export class BareBack extends Back {
    constructor(name = "None", cost = 0, level = 1) {
        super(name, cost, level)
    }
}
export class CapeOfFireImmunity extends Back {
    constructor(name = "Cape of Fire Immunity", cost = 100, level = 1) {
        super(name, cost, level)
        this.Enchantment = new FireImmuneEnchantment()
    }
}
export class Cloak extends Back {
    constructor(name = "Cloak", cost = 1, level = 1) {
        super(name, cost, level)
        this.Enchantment = new IceResistEnchantment()
    }
}
export class SpiderSilkCloak extends Cloak {
    constructor(name = "Spider Silk Cloak", cost = 2, level = 1) {
        super(name, cost, level)
    }
}
export class WoolCloak extends Cloak {
    constructor(name = "Wool Cloak", cost = 2, level = 1) {
        super(name, cost, level)
    }
}
//neck
export class Neck extends Accessory {
    constructor(name, cost, level) {
        super(name, cost, level)
        this.Slot = "Neck"
    }
}
export class BareNeck extends Neck {
    constructor(name = "None", cost = 0, level = 1) {
        super(name, cost, level)
    }
}
export class DogCollar extends Neck {
    constructor(name = "Dog Collar", cost = 0, level = 1) {
        super(name, cost, level)
        this.Restriction = null;
    }
}
//ring
export class Ring extends Accessory {
    constructor(name, cost, level) {
        super(name, cost, level)
        this.Slot = "Ring"
    }
}
export class BareFinger extends Ring {
    constructor(name = "None", cost = 0, level = 1) {
        super(name, cost, level)
    }
}
export class RingOfStr extends Ring {
    constructor(name = "Ring of Strength", cost = 50, level = 1) {
        super(name, cost, level)
        this.Enchantment = new StrengthEnchantment()
    }
}
export class SilverRingLR extends Ring {
    constructor(name = "Silver Ring engraved with the Initials CR", cost = 10, level = 1) {
        super(name, cost, level)
    }
}
//armor
export class Armor extends Equipable {
    Protection; ProtectionType;
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.SubType = "Armor"; this.Protection = prot; this.Enchantment = new UnEnchanted()
    }
}
//feet
export class Feet extends Armor {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Slot = "Feet"
    }
}
export class ClothFeet extends Feet {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new ClothProtection();
    }
}
export class Shoes extends ClothFeet {
    constructor(name = "Shoes", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class SpiderSilkBoots extends ClothFeet {
    constructor(name = "Spider Silk Boots", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class WoolBoots extends ClothFeet {
    constructor(name = "Wool Boots", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class LeatherFeet extends Feet {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new LightArmorSkill(); this.ProtectionType = new LeatherProtection()
    }
}
export class HardLeatherBoots extends LeatherFeet {
    constructor(name = "Hard Leather Boots", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class LeatherBoots extends LeatherFeet {
    constructor(name = "Leather Boots", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class MetalFeet extends Feet {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new HeavyArmorSkill(); this.ProtectionType = new MetalProtection()
    }
}
export class BronzeBoots extends MetalFeet {
    constructor(name = "Bronze Boots", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronBoots extends MetalFeet {
    constructor(name = "Iron Boots", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelBoots extends MetalFeet {
    constructor(name = "Steel Boots", cost = 10, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class NaturalFeet extends Feet {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new NaturalProtection()
    }
}
export class BareFeet extends NaturalFeet {
    constructor(name = "None", cost = 0, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
//hands
export class Hands extends Armor {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Slot = "Hands"
    }
}
export class ClothHands extends Hands {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new ClothProtection();
    }
}
export class ClothGloves extends ClothHands {
    constructor(name = "Cloth Gloves", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class Gloves extends ClothHands {
    constructor(name = "Gloves", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class SpiderSilkGloves extends ClothGloves {
    constructor(name = "Spider Silk Gloves", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class WoolGloves extends ClothHands {
    constructor(name = "Wool Gloves", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class LeatherHands extends Hands {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new LightArmorSkill(); this.ProtectionType = new LeatherProtection()
    }
}
export class HardLeatherGloves extends LeatherHands {
    constructor(name = "Hard Leather Gloves", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class LeatherGloves extends LeatherHands {
    constructor(name = "Leather Gloves", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class MetalHands extends Hands {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new HeavyArmorSkill(); this.ProtectionType = new MetalProtection()
    }
}
export class BronzeGauntlets extends MetalHands {
    constructor(name = "Bronze Gaunlets", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronGauntlets extends MetalHands {
    constructor(name = "Iron Gaunlets", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelGauntlets extends MetalHands {
    constructor(name = "Steel Gaunlets", cost = 10, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class NaturalHands extends Hands {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new NaturalProtection()
    }
}
export class BareHands extends NaturalHands {
    constructor(name = "None", cost = 0, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
//head
export class Head extends Armor {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Slot = "Head"
    }
}
export class ClothHead extends Head {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new ClothProtection()
    }
}
export class Hat extends ClothHead {
    constructor(name = "Hat", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class SpiderSilkWizardHat extends ClothHead {
    constructor(name = "Spider Silk Wizard Hat", cost = 20, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class WoolHat extends ClothHead {
    constructor(name = "Wool Hat", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class WoolWizardHat extends ClothHead {
    constructor(name = "WoolWizardHat", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class LeatherHead extends Head {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new LightArmorSkill(); this.ProtectionType = new LeatherProtection()
    }
}
export class HardLeatherCowl extends LeatherHead {
    constructor(name = "Hard Leather Cowl", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class LeatherCowl extends LeatherHead {
    constructor(name = "Leather Cowl", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class MetalHead extends Head {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new HeavyArmorSkill(); this.ProtectionType = new MetalProtection()
    }
}
export class BronzeHelmet extends MetalHead {
    constructor(name = "Bronze Helmet", cost = 2, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronHelmet extends MetalHead {
    constructor(name = "Iron Helmet", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelHelmet extends MetalHead {
    constructor(name = "Steel Helmet", cost = 20, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class NaturalHead extends Head {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new NaturalProtection()
    }
}
export class BareHead extends NaturalHead {
    constructor(name = "None", cost = 0, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
//legs
export class Legs extends Armor {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Slot = "Legs"
    }
}
export class ClothLegs extends Legs {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new ClothProtection()
    }
}
export class LoinCloth extends ClothLegs {
    constructor(name = "LoinCloth", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class SpiderSilkRobeBottom extends ClothLegs {
    constructor(name = "Spider Silk Robe Bottom", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class Trousers extends ClothLegs {
    constructor(name = "Trousers", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class WoolTrousers extends ClothLegs {
    constructor(name = "Wool Trousers", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class WoolRobeBottom extends ClothLegs {
    constructor(name = "Wool Robe Bottom", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class LeatherLegs extends Legs {
    constructor(name = "Leather Legs", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
        this.Class = new LightArmorSkill(); this.ProtectionType = new LeatherProtection()
    }
}
export class HardLeatherLegs extends LeatherLegs {
    constructor(name = "Head Leather Legs", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class MetalLegs extends Legs {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new HeavyArmorSkill(); this.ProtectionType = new MetalProtection()
    }
}
export class BronzeLegs extends MetalLegs {
    constructor(name = "Bronze Legs", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronLegs extends MetalLegs {
    constructor(name = "Iron Legs", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelLegs extends MetalLegs {
    constructor(name = "Steel Legs", cost = 20, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class NaturalLegs extends Legs {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new NaturalProtection()
    }
}
export class BareLegs extends NaturalLegs {
    constructor(name = "None", cost = 0, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
//torso
export class Torso extends Armor {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Slot = "Torso"
    }
}
export class ClothTorso extends Torso {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new ClothProtection()
    }
}
export class SpiderSilkRobeTop extends ClothTorso {
    constructor(name = "Spider Silk Robe Top", cost = 5, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class Tunic extends ClothTorso {
    constructor(name = "Tunic", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class WoolRobeTop extends ClothTorso {
    constructor(name = "Wool Robe Top", cost = 1, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class WoolTunic extends ClothTorso {
    constructor(name = "Wool Tunic", cost = 1, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
export class LeatherTorso extends Torso {
    constructor(name = "Leather Torso", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
        this.Class = new LightArmorSkill(); this.ProtectionType = new LeatherProtection()
    }
}
export class HardLeatherTorso extends LeatherTorso {
    constructor(name = "Head Leather Torso", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class MetalTorso extends Torso {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new HeavyArmorSkill(); this.ProtectionType = new MetalProtection()
    }
}
export class BronzeTorso extends MetalTorso {
    constructor(name = "Bronze Armor", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronTorso extends MetalTorso {
    constructor(name = "Iron Armor", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelTorso extends MetalTorso {
    constructor(name = "Steel Armor", cost = 20, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class NaturalTorso extends Torso {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.Class = new UnArmoredSkill(); this.ProtectionType = new NaturalProtection()
    }
}
export class BareTorso extends NaturalTorso {
    constructor(name = "None", cost = 0, level = 1, prot = 0) {
        super(name, cost, level, prot)
    }
}
//offhands
export class OffHand extends Equipable {
    constructor(name, cost, level) {
        super(name, cost, level)
        this.Slot = "OffHand"
    }
}
export class EmptyOffHand extends OffHand {
    constructor(name = "None", cost = 0, level = 1) {
        super(name, cost, level)
    }
}
//offhand weapons
export class OffHandWeapon extends OffHand {
    Damage; DamageType;
    constructor(name, cost, level, damage) {
        super(name, cost, level)
        this.Damage = damage; this.SubType = "OneHand"
    }
}
//melee
export class OffHandMeleeWeapon extends OffHandWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new LightWeaponSkill()
    }
}
//daggers
export class DaggerOffHand extends OffHandMeleeWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Name = ""
    }
}
export class BronzeDaggerOffHand extends DaggerOffHand {
    constructor(name = "Bronze Dagger (OffHand)", cost = 1, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
export class IronDaggerOffHand extends DaggerOffHand {
    constructor(name = "Iron Dagger (OffHand)", cost = 5, level = 5, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class SteelDaggerOffHand extends DaggerOffHand {
    constructor(name = "Steel Dagger (OffHand)", cost = 10, level = 10, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class NaturalWeaponOffHand extends OffHandMeleeWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new UnArmedSkill()
    }
}
export class ClawSlashOffHand extends NaturalWeaponOffHand {
    constructor(name = "Claw Slash (OffHand)", cost = 0, level = 1, damage = 2) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage()
    }
}
//unarmed
export class UnArmedOffHand extends OffHandWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new UnArmedSkill()
    }
}
export class BareFistOffHand extends UnArmedOffHand {
    constructor(name = "Fist", cost = 0, level = 1, damage = 0) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new UnArmedSkill()
    }
}
//ranged
export class OffHandRangedWeapon extends OffHandWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new RangedSkill(); this.DamageType = new PiercingDamage()
    }
}
//crossbows
export class CrossBowOffHand extends OffHandRangedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Name = ""
    }
}
export class BronzeCrossBowOffHand extends CrossBowOffHand {
    constructor(name = "Bronze Crossbow (OffHand)", cost = 5, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
export class IronCrossBowOffHand extends CrossBowOffHand {
    constructor(name = "Iron Crossbow (OffHand)", cost = 10, level = 5, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class SteelCrossBowOffHand extends CrossBowOffHand {
    constructor(name = "Steel Crossbow (OffHand)", cost = 20, level = 10, damage = 3) {
        super(name, cost, level, damage)
    }
}
//pistol
export class PistolOffHand extends OffHandRangedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Name = ""
    }
}
export class BronzePistolOffHand extends PistolOffHand {
    constructor(name = "Bronze Pistol (OffHand)", cost = 5, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
export class IronPistolOffHand extends PistolOffHand {
    constructor(name = "Iron Pistol (OffHand)", cost = 10, level = 5, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class SteelPistolOffHand extends PistolOffHand {
    constructor(name = "Steel Pistol (OffHand)", cost = 20, level = 10, damage = 3) {
        super(name, cost, level, damage)
    }
}
//shields
export class Shield extends OffHand {
    Protection; ProtectionType;
    constructor(name, cost, level, prot) {
        super(name, cost, level)
        this.Protection = prot; this.SubType = "Shield"; this.Class = new BlockSkill()
    }
}
export class MetalShield extends Shield {
    constructor(name, cost, level, prot) {
        super(name, cost, level, prot)
        this.ProtectionType = MetalProtection()
    }
}
export class BronzeShield extends MetalShield {
    constructor(name = "Bronze Shield", cost = 5, level = 1, prot = 1) {
        super(name, cost, level, prot)
    }
}
export class IronShield extends MetalShield {
    constructor(name = "Iron Shield", cost = 10, level = 5, prot = 2) {
        super(name, cost, level, prot)
    }
}
export class SteelShield extends MetalShield {
    constructor(name = "Steel Shield", cost = 20, level = 10, prot = 3) {
        super(name, cost, level, prot)
    }
}
export class WoodenShield extends Shield {
    constructor(name = "Wooden Shield", cost = 2, level = 1, prot = 1) {
        super(name, cost, level, prot)
        this.ProtectionType = new WoodProtection()
    }
}
//weapons
export class Weapon extends Equipable {
    Damage; DamageType;
    constructor(name, cost, level, damage, damageType) {
        super(name, cost, level)
        this.Damage = damage; this.DamageType = damageType; this.Slot = "Weapon"
    }
}
//OneHand Weapons
export class OneHandedWeapon extends Weapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.SubType = "OneHand"
    }
}
//magic 1h
export class MagicOneHandedWeapon extends OneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new DestructionSkill(); this.DamageType = new ForceDamage();
    }
}
export class MagicNaturalWeapon extends MagicOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new DestructionSkill(); this.DamageType = new ForceDamage();
    }
}
export class GhostTouch extends MagicNaturalWeapon {
    constructor(name = "Ghost Touch", cost = 0, level = 1, damage = 1) {
        super(name, cost, level, damage)
        this.DamageType = new NecroticDamage();
    }
}
export class Wand extends MagicOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new ForceDamage()
    }
}
export class OakWand extends Wand {
    constructor(name = "Oak Wand", cost = 10, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class WillowWand extends Wand {
    constructor(name = "Willow Wand", cost = 20, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class WoodWand extends Wand {
    constructor(name = "Wood Wand", cost = 5, level = 5, damage = 2) {
        super(name, cost, level, damage)
    }
}
//melee 1h
export class MeleeOneHandedWeapon extends OneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Name = ""
    }
}
//axes
export class Axe extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class BronzeAxe extends Axe {
    constructor(name = "Bronze Axe", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronAxe extends Axe {
    constructor(name = "Iron Axe", cost = 10, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelAxe extends Axe {
    constructor(name = "Steel Axe", cost = 20, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//clubs
export class Club extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class WoodenClub extends Club {
    constructor(name = "Wooden Club", cost = 2, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
//daggers
export class Dagger extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage(); this.Class = new LightWeaponSkill()
    }
}
export class BronzeDagger extends Dagger {
    constructor(name = "Bronze Dagger", cost = 1, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
export class IronDagger extends Dagger {
    constructor(name = "Iron Dagger", cost = 5, level = 5, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class SteelDagger extends Dagger {
    constructor(name = "Steel Dagger", cost = 10, level = 10, damage = 3) {
        super(name, cost, level, damage)
    }
}
//maces
export class Mace extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class BronzeMace extends Mace {
    constructor(name = "Bronze Mace", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronMace extends Mace {
    constructor(name = "Iron Mace", cost = 5, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelMace extends Mace {
    constructor(name = "Steel Mace", cost = 10, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class NaturalWeapon extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new UnArmedSkill()
    }
}
//bites
export class Bite extends NaturalWeapon {
    constructor(name = "Bite", cost = 0, level = 1, damage = 1) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class PoisonedBite extends Bite {
    constructor(name = "Poisoned Bite", cost = 0, level = 1, damage = 1) {
        super(name, cost, level, damage)
        this.Enchantment = new PoisonApplyEnchantment()
    }
}
export class ClawSlash extends NaturalWeapon {
    constructor(name = "Claw Slash", cost = 0, level = 1, damage = 2) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage()
    }
}
export class Peck extends NaturalWeapon {
    constructor(name = "Peck", cost = 0, level = 1, damage = 1) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class UnArmedWeapon extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new UnArmedSkill()
    }
}
export class BareFist extends UnArmedWeapon {
    constructor(name = "Fist", cost = 0, level = 1, damage = 0) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new UnArmedSkill()
    }
}
//rapiers
export class Rapier extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage(); this.Class = new LightWeaponSkill()
    }
}
export class BronzeRapier extends Rapier {
    constructor(name = "Bronze Rapier", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronRapier extends Rapier {
    constructor(name = "Iron Rapier", cost = 5, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelRapier extends Rapier {
    constructor(name = "Steel Rapier", cost = 10, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//swords
export class Scimitar extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage(); this.Class = new LightWeaponSkill()
    }
}
export class BronzeScimitar extends Scimitar {
    constructor(name = "Bronze Scimitar", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronScimitar extends Scimitar {
    constructor(name = "Iron Scimitar", cost = 10, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelScimitar extends Scimitar {
    constructor(name = "Steel Scimitar", cost = 20, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//short spear
export class ShortSpear extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class BronzeShortSpear extends ShortSpear {
    constructor(name = "Bronze ShortSpear", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronShortSpear extends ShortSpear {
    constructor(name = "Iron ShortSpear", cost = 5, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelShortSpear extends ShortSpear {
    constructor(name = "Steel ShortSpear", cost = 10, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//swords
export class Sword extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class BronzeSword extends Sword {
    constructor(name = "Bronze Sword", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronSword extends Sword {
    constructor(name = "Iron Sword", cost = 5, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelSword extends Sword {
    constructor(name = "Steel Sword", cost = 10, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//warhammers
export class WarHammer extends MeleeOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage(); this.Class = new HeavyWeaponSkill()
    }
}
export class BronzeWarHammer extends WarHammer {
    constructor(name = "Bronze WarHammer", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronWarHammer extends WarHammer {
    constructor(name = "Iron WarHammer", cost = 5, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelWarHammer extends WarHammer {
    constructor(name = "Steel WarHammer", cost = 10, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//ranged 1h
export class RangedOneHandedWeapon extends OneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new RangedSkill(); this.DamageType = new PiercingDamage()
    }
}
export class CrossBow1H extends RangedOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class BronzeCrossBow1H extends CrossBow1H {
    constructor(name = "Bronze CrossBow 1H", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronCrossBow1H extends CrossBow1H {
    constructor(name = "Iron CrossBow 1H", cost = 10, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelCrossBow1H extends CrossBow1H {
    constructor(name = "Steel CrossBow 1H", cost = 20, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class Pistol extends RangedOneHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class BronzePistol extends Pistol {
    constructor(name = "Bronze Pistol", cost = 5, level = 1, damage = 2) {
        super(name, cost, level, damage)
    }
}
export class IronPistol extends Pistol {
    constructor(name = "Iron Pistol", cost = 10, level = 5, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class SteelPistol extends Pistol {
    constructor(name = "Steel Pistol", cost = 20, level = 10, damage = 4) {
        super(name, cost, level, damage)
    }
}
//2h
export class TwoHandedWeapon extends Weapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.SubType = "TwoHands"
    }
}//magic 2h
export class MagicTwoHandedWeapon extends TwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new DestructionSkill()
    }
}
export class Staff extends MagicTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new ForceDamage()
    }
}
export class OakStaff extends MagicTwoHandedWeapon {
    constructor(name = "Oak Staff", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class WillowStaff extends MagicTwoHandedWeapon {
    constructor(name = "Willow Staff", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export class WoodStaff extends MagicTwoHandedWeapon {
    constructor(name = "Wood Staff", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
//melee 2h
export class MeleeTwoHandedWeapon extends TwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new HeavyWeaponSkill()
    }
}
//2h axes
export class Axe2H extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage();
    }
}
export class BronzeAxe2H extends Axe2H {
    constructor(name = "Bronze Axe 2H", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronAxe2H extends Axe2H {
    constructor(name = "Iron Axe 2H", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelAxe2H extends Axe2H {
    constructor(name = "Steel Axe 2H", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
//halberd
export class Halberd extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage();
    }
}
export class BronzeHalberd extends Halberd {
    constructor(name = "Bronze Halberd", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronHalberd extends Halberd {
    constructor(name = "Iron Halberd", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelHalberd extends Halberd {
    constructor(name = "Steel Halberd", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
//natural
export class Natural2H extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new UnArmedSkill()
    }
}
export class Slam extends Natural2H {
    constructor(name = "Slam", cost = 0, level = 1, damage = 1) {
        super(name, cost, level, damage)
    }
}
//quarterstaff
export class QuarterStaff extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage()
    }
}
export class OakQuarterStaff extends MagicTwoHandedWeapon {
    constructor(name = "Oak QuarterStaff", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class WillowQuarterStaff extends MagicTwoHandedWeapon {
    constructor(name = "Willow QuarterStaff", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export class WoodQuarterStaff extends MagicTwoHandedWeapon {
    constructor(name = "Wood QuarterStaff", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
//spear
export class Spear extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage();
    }
}
export class BronzeSpear extends Spear {
    constructor(name = "Bronze Spear", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronSpear extends Spear {
    constructor(name = "Iron Spear", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelSpear extends Spear {
    constructor(name = "Steel Spear", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
//swords
export class Sword2H extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new SlashingDamage();
    }
}
export class BronzeSword2H extends Sword2H {
    constructor(name = "Bronze Sword 2H", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronSword2H extends Sword2H {
    constructor(name = "Iron Sword 2H", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelSword2H extends Sword2H {
    constructor(name = "Steel Sword 2H", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
//warhammer
export class WarHammer2H extends MeleeTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new BludgeoningDamage();
    }
}
export class BronzeWarHammer2H extends WarHammer2H {
    constructor(name = "Bronze WarHammer 2H", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronWarHammer2H extends WarHammer2H {
    constructor(name = "Iron WarHammer 2H", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelWarHammer2H extends WarHammer2H {
    constructor(name = "Steel WarHammer 2H", cost = 20, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
//ranged 2h
export class RangedTwoHandedWeapon extends TwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.Class = new RangedSkill(); this.DamageType = new PiercingDamage()
    }
}
//bows
export class Bow extends RangedTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class LongBow extends Bow {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class OakLongBow extends LongBow {
    constructor(name = "Oak LongBow", cost = 5, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class WillowLongBow extends LongBow {
    constructor(name = "Willow LongBow", cost = 10, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export class WoodLongBow extends LongBow {
    constructor(name = "Wood LongBow", cost = 1, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class ShortBow extends Bow {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class OakShortBow extends ShortBow {
    constructor(name = "Oak ShortBow", cost = 5, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class WillowShortBow extends ShortBow {
    constructor(name = "Willow ShortBow", cost = 10, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export class WoodShortBow extends ShortBow {
    constructor(name = "Wood ShortBow", cost = 1, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class CrossBow2H extends RangedTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class BronzeCrossBow2H extends CrossBow2H {
    constructor(name = "Bronze CrossBow 2H", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronCrossBow2H extends CrossBow2H {
    constructor(name = "Iron CrossBow 2H", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelCrossBow2H extends CrossBow2H {
    constructor(name = "Steel CrossBow 2H", cost = 1, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export class Rifle extends RangedTwoHandedWeapon {
    constructor(name, cost, level, damage) {
        super(name, cost, level, damage)
        this.DamageType = new PiercingDamage()
    }
}
export class BronzeRifle extends Rifle {
    constructor(name = "Bronze Rifle", cost = 5, level = 1, damage = 3) {
        super(name, cost, level, damage)
    }
}
export class IronRifle extends Rifle {
    constructor(name = "Iron Rifle", cost = 10, level = 5, damage = 4) {
        super(name, cost, level, damage)
    }
}
export class SteelRifle extends Rifle {
    constructor(name = "Steel Rifle", cost = 1, level = 10, damage = 5) {
        super(name, cost, level, damage)
    }
}
export function allBronze() {
    var all = [new BronzeAxe(), new BronzeAxe2H(), new BronzeBoots(), new BronzeCrossBow1H(), new BronzeCrossBow2H(), new BronzeCrossBowOffHand(), new BronzeDagger(), new BronzeDaggerOffHand(), new BronzeGauntlets(), new BronzeHatchet(), new BronzeHelmet(), new BronzeLegs(), new BronzeMace(), new BronzePickAxe(), new BronzePistol(), new BronzePistolOffHand(), new BronzeRapier(), new BronzeRifle(), new BronzeShield(), new BronzeSword(), new BronzeSword2H(), new BronzeTools(), new BronzeTorso(), new BronzeWarHammer(), new BronzeWarHammer2H()]
    return all;
}
export function allIron() {
    var all = [new IronAxe(), new IronAxe2H(), new IronBoots(), new IronDagger(), new IronCrossBow1H(), new IronCrossBow2H(), new IronCrossBowOffHand(), new IronDaggerOffHand(), new IronGauntlets(), new IronHatchet(), new IronHelmet(), new IronLegs(), new IronMace(), new IronPickAxe(), new IronPistol(), new IronPistolOffHand(), new IronRapier(), new IronRifle(), new IronShield(), new IronSword(), new IronSword2H(), new IronTools(), new IronTorso(), new IronWarHammer(), new IronWarHammer2H()]
    return all;
}
export function allLeather() {
    var all = [new LeatherBoots(), new LeatherCowl(), new LeatherGloves(), new LeatherLegs(), new LeatherTorso()]
    return all;
}
export function allSteel() {
    var all = [new SteelAxe(), new SteelAxe2H(), new SteelBoots(), new SteelDagger(), new SteelDaggerOffHand(), new SteelGauntlets(), new SteelHatchet(), new SteelHelmet(), new SteelLegs(), new SteelMace(), new SteelPickAxe(), new SteelShield(), new SteelSword(), new SteelSword2H(), new SteelTorso(), new SteelWarHammer(), new SteelWarHammer2H()]
    return all;
}
export function allWool() {
    var all = [new WoolBoots(), new WoolGloves(), new WoolHat(), new WoolRobeBottom(), new WoolRobeTop(), new WoolTrousers(), new WoolTunic(), new WoolWizardHat()]
    return all;
}
//junk
export class Junk extends Item {
    constructor(name, cost) {
        super(name, cost)
        this.Type = "Junk";
    }
}
//burnt food
export class BurntFood extends Junk {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Burnt Food";
    }
}
export class BurntBread extends BurntFood {
    constructor(name = "Burnt Bread", cost = 0) {
        super(name, cost)
    }
}
export class BurntBeef extends BurntFood {
    constructor(name = "Burnt Beef", cost = 0) {
        super(name, cost)
    }
}
export class BurntChicken extends BurntFood {
    constructor(name = "Burnt Chicken", cost = 0) {
        super(name, cost)
    }
}
export class BurntFish extends BurntFood {
    constructor(name = "Burnt Fish", cost = 0) {
        super(name, cost)
    }
}
export class BurntRabbitMeat extends BurntFood {
    constructor(name = "Burnt Rabbit Meat", cost = 0) {
        super(name, cost)
    }
}
export class BurntRatMeat extends BurntFood {
    constructor(name = "Burnt Rat Meat", cost = 0) {
        super(name, cost)
    }
}
export class BurntStew extends BurntFood {
    constructor(name = "Burnt Stew", cost = 0) {
        super(name, cost)
    }
}
//vendor trash
export class VendorTrash extends Junk {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Vendor Trash";
    }
}
export class BanditSpoils extends VendorTrash {
    constructor(name = "Bandit Spoils", cost = 50) {
        super(name, cost)
    }
}
export class RatTail extends VendorTrash {
    constructor(name = "Rat Tail", cost = 1) {
        super(name, cost)
    }
}
//processed
export class Processed extends Item {
    constructor(name, cost) {
        super(name, cost)
        this.Type = "Processed";
    }
}
//alchemy
export class Alchemical extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Alchemical";
    }
}
export class BoneMeal extends Alchemical {
    constructor(name = "BoneMeal", cost = 5) {
        super(name, cost)
    }
}
export class GunPowder extends Alchemical {
    constructor(name = "Gun Powder", cost = 5) {
        super(name, cost)
    }
}
//cooking
export class Baking extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Baking"
    }
}
export class Dough extends Baking {
    constructor(name = "Dough", cost = 2) {
        super(name, cost)
    }
}
export class Flour extends Baking {
    constructor(name = "Flour", cost = 2) {
        super(name, cost)
    }
}
//firemaking
export class Ashes extends Processed {
    constructor(name = "Ashes", cost = 1) {
        super(name, cost)
        this.SubType = "Ashes";
    }
}
export class Charcoal extends Processed {
    constructor(name = "Charcoal", cost = 1) {
        super(name, cost)
        this.SubType = "Charcoal";
    }
}
//fletching
export class Stock extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Stock";
    }
}
export class OakStock extends Stock {
    constructor(name = "Oak Stock", cost = 5) {
        super(name, cost)
    }
}
export class WillowStock extends Stock {
    constructor(name = "Willow Stock", cost = 10) {
        super(name, cost)
    }
}
export class WoodStock extends Stock {
    constructor(name = "Wood Stock", cost = 1) {
        super(name, cost)
    }
}
export class UnEnchantedStaff extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "UnEnchanted Staff";
    }
}
export class UnEnchantedOakStaff extends UnEnchantedStaff {
    constructor(name = "UnEnchanted Oak Staff", cost = 5) {
        super(name, cost)
    }
}
export class UnEnchantedWillowStaff extends UnEnchantedStaff {
    constructor(name = "UnEnchanted Willow Staff", cost = 10) {
        super(name, cost)
    }
}
export class UnEnchantedWoodStaff extends UnEnchantedStaff {
    constructor(name = "UnEnchanted Wood Staff", cost = 1) {
        super(name, cost)
    }
}
export class UnEnchantedWand extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "UnEnchanted Wand";
    }
}
export class UnEnchantedOakWand extends UnEnchantedWand {
    constructor(name = "UnEnchanted Oak Wand", cost = 5) {
        super(name, cost)
    }
}
export class UnEnchantedWillowWand extends UnEnchantedWand {
    constructor(name = "UnEnchanted Willow Wand", cost = 10) {
        super(name, cost)
    }
}
export class UnEnchantedWoodWand extends UnEnchantedStaff {
    constructor(name = "UnEnchanted Wood Wand", cost = 1) {
        super(name, cost)
    }
}
//smithing
export class Barrel extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Barrel";
    }
}
export class BronzeBarrel extends Barrel {
    constructor(name = "Bronze Barrel", cost = 1) {
        super(name, cost)
    }
}
export class IronBarrel extends Barrel {
    constructor(name = "Iron Barrel", cost = 5) {
        super(name, cost)
    }
}
export class SteelBarrel extends Barrel {
    constructor(name = "Steel Barrel", cost = 10) {
        super(name, cost)
    }
}
export class Limbs extends Processed {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Limbs";
    }
}
export class BronzeLimbs extends Limbs {
    constructor(name = "Bronze Limbs", cost = 1) {
        super(name, cost)
    }
}
export class IronLimbs extends Limbs {
    constructor(name = "Iron Limbs", cost = 5) {
        super(name, cost)
    }
}
export class SteelLimbs extends Limbs {
    constructor(name = "Steel Limbs", cost = 10) {
        super(name, cost)
    }
}
//resources
export class Resource extends Item {
    constructor(name, cost) {
        super(name, cost)
        this.Type = "Resource";
    }
}
//animal drop
export class AnimalDrop extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Animal Drop";
    }
}
export class Beeswax extends AnimalDrop {
    constructor(name = "Beeswax", cost = 1) {
        super(name, cost)
    }
}
export class BatGuano extends AnimalDrop {
    constructor(name = "Bat Guano", cost = 1) {
        super(name, cost)
    }
}
export class EyeOfNewt extends AnimalDrop {
    constructor(name = "Eye of Newt", cost = 1) {
        super(name, cost)
    }
}
//bones
export class Bones extends Resource {
    constructor(name = "Bones", cost = 1) {
        super(name, cost)
        this.SubType = "Bones";
    }
}
export class Ectoplasm extends Bones {
    constructor(name = "Ectoplasm", cost = 1) {
        super(name, cost)
        this.SubType = "Bones";
    }
}
export class Skull extends Bones {
    constructor(name = "Skull", cost = 1) {
        super(name, cost)
        this.SubType = "Bones";
    }
}
//cloth
export class Cloth extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Cloth"
    }
}
export class SpiderSilkCloth extends Cloth {
    constructor(name = "Spider Silk", cost = 5) {
        super(name, cost)
    }
}
export class WoolCloth extends Cloth {
    constructor(name = "Wool", cost = 1) {
        super(name, cost)
    }
}
//crop
export class Crop extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Crop"
    }
}
export class Papyrus extends Crop {
    constructor(name = "Papyrus", cost = 1) {
        super(name, cost)
    }
}
export class Wheat extends Crop {
    constructor(name = "Wheat", cost = 1) {
        super(name, cost)
    }
}
//feathers
export class Feather extends Resource {
    constructor(name = "Feather", cost = 1) {
        super(name, cost)
        this.SubType = "Feather"
    }
}
export class BlackFeather extends Feather {
    constructor(name = "Black Feather", cost = 1) {
        super(name, cost)
    }
}
//fur
export class Fur extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Fur"
    }
}
export class BearFur extends Fur {
    constructor(name = "Bear Fur", cost = 10) {
        super(name, cost)
    }
}
export class RabbitFur extends Fur {
    constructor(name = "Rabbit Fur", cost = 1) {
        super(name, cost)
    }
}
export class WolfFur extends Fur {
    constructor(name = "Wolf Fur", cost = 5) {
        super(name, cost)
    }
}
//herb
export class Herb extends Resource {
    constructor(name = "Herb", cost = 1) {
        super(name, cost)
        this.SubType = "Herb"
    }
}
export class Aloe extends Herb {
    constructor(name = "Aloe", cost = 1) {
        super(name, cost)
    }
}
export class MilkThistle extends Herb {
    constructor(name = "Milk Thistle", cost = 1) {
        super(name, cost)
    }
}
//leather
export class Leather extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Leather"
    }
}
export class CowLeather extends Leather {
    constructor(name = "Cow Leather", cost = 1) {
        super(name, cost)
    }
}
//metal bars
export class MetalBar extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Bar"
    }
}
export class BronzeBar extends MetalBar {
    constructor(name = "Bronze Bar", cost = 2) {
        super(name, cost)
    }
}
export class IronBar extends MetalBar {
    constructor(name = "Iron Bar", cost = 4) {
        super(name, cost)
    }
}
export class SteelBar extends MetalBar {
    constructor(name = "Steel Bar", cost = 8) {
        super(name, cost)
    }
}
//ore
export class Ore extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Ore"
    }
}
export class CoalOre extends Ore {
    constructor(name = "Coal", cost = 4) {
        super(name, cost)
    }
}
export class CopperOre extends Ore {
    constructor(name = "Copper Ore", cost = 1) {
        super(name, cost)
    }
}
export class IronOre extends Ore {
    constructor(name = "Iron Ore", cost = 2) {
        super(name, cost)
    }
}
export class Salt extends Ore {
    constructor(name = "Salt", cost = 2) {
        super(name, cost)
    }
}
export class SaltPeter extends Ore {
    constructor(name = "Saltpeter", cost = 2) {
        super(name, cost)
    }
}
export class Sulphur extends Ore {
    constructor(name = "Sulphur", cost = 2) {
        super(name, cost)
    }
}
export class TinOre extends Ore {
    constructor(name = "Tin Ore", cost = 1) {
        super(name, cost)
    }
}
//raw fish
export class RawFish extends Resource {
    constructor(name = "Raw Fish", cost = 2) {
        super(name, cost)
        this.SubType = "Raw Fish"
    }
}
export class RawCrayFish extends RawFish {
    constructor(name = "Raw Crayfish", cost = 2) {
        super(name, cost)
    }
}
export class RawTrout extends RawFish {
    constructor(name = "Raw Trout", cost = 2) {
        super(name, cost)
    }
}
//raw meat
export class RawMeat extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Raw Meat"
    }
}
export class RawBeef extends RawMeat {
    constructor(name = "Raw Beef", cost = 2) {
        super(name, cost)
    }
}
export class RawChicken extends RawMeat {
    constructor(name = "Raw Chicken", cost = 2) {
        super(name, cost)
    }
}
export class RawRabbitMeat extends RawMeat {
    constructor(name = "Raw Rabbit Meat", cost = 2) {
        super(name, cost)
    }
}
export class RawRatMeat extends RawMeat {
    constructor(name = "Raw Rat Meat", cost = 2) {
        super(name, cost)
    }
}
//wood
export class Logs extends Resource {
    constructor(name, cost) {
        super(name, cost)
        this.SubType = "Logs"
    }
}
export class OakLogs extends Logs {
    constructor(name = "Oak Logs", cost = 4) {
        super(name, cost)
    }
}
export class WillowLogs extends Logs {
    constructor(name = "Willow Logs", cost = 8) {
        super(name, cost)
    }
}
export class WoodLogs extends Logs {
    constructor(name = "Wood Logs", cost = 2) {
        super(name, cost)
    }
}
//tools
export function generalTools() {
    var tools = [new BronzeHatchet(), new BronzePickAxe(), new Bucket(), new FishingRod(), new Knife(), new Needle(), new Shears(), new Sickle(), new TinderBox(), new Trap()]
    return tools;
}
export class Tool extends Item {
    Tier;
    constructor(name, cost, tier) {
        super(name, cost)
        this.Tier = tier; this.Type = "Tool"
    }
}
export class Bucket extends Tool {
    constructor(name = "Bucket", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Bucket"
    }
}
//alchemy
export class MortarAndPestle extends Tool {
    constructor(name = "Mortar and Pestle", cost = 10, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Mortar and Pestle"
    }
}
export class PotionBottle extends Tool {
    constructor(name = "Potion Bottle", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Potion Bottle"
    }
}
//crafting
export class Needle extends Tool {
    constructor(name = "Mortar and Pestle", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Needle"
    }
}
export class Thread extends Tool {
    constructor(name = "Thread", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Thread"
    }
}
//enchanting
export class EnchantmentTome extends Tool {
    constructor(name = "Mortar and Pestle", cost = 10, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Tome"
    }
}
//engineering and smithing
export class Tools extends Tool {
    constructor(name, cost, tier) {
        super(name, cost, tier)
        this.SubType = "Tools"
    }
}
export class BronzeTools extends Tools {
    constructor(name = "Bronze Tools", cost = 1, tier = 1) {
        super(name, cost, tier)
    }
}
export class IronTools extends Tools {
    constructor(name = "Iron Tools", cost = 5, tier = 2) {
        super(name, cost, tier)
    }
}
export class SteelTools extends Tools {
    constructor(name = "Steel Tools", cost = 10, tier = 3) {
        super(name, cost, tier)
    }
}
//farming
export class Shears extends Tool {
    constructor(name = "Shears", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Shears"
    }
}
export class Sickle extends Tool {
    constructor(name = "Sickle", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Sickle"
    }
}
export class Spade extends Tool {
    constructor(name = "Spade", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Spade"
    }
}
export class Trowel extends Tool {
    constructor(name = "Trowel", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Trowel"
    }
}
export class WateringCan extends Tool {
    constructor(name = "Watering Can", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Watering Can"
    }
}
//fishing
export class FishingRod extends Tool {
    constructor(name = "Fishing Rod", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Fishing Rod"
    }
}
export class FishingBait extends Tool {
    constructor(name = "Fishing Bait", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Bait"
    }
}
//hatchets
export class Hatchet extends Tool {
    constructor(name, cost, tier) {
        super(name, cost, tier)
        this.SubType = "Hatchet"
    }
}
export class BronzeHatchet extends Hatchet {
    constructor(name = "Bronze Hatchet", cost = 1, tier = 1) {
        super(name, cost, tier)
    }
}
export class IronHatchet extends Hatchet {
    constructor(name = "Iron Hatchet", cost = 5, tier = 2) {
        super(name, cost, tier)
    }
}
export class SteelHatchet extends Hatchet {
    constructor(name = "Steel Hatchet", cost = 10, tier = 3) {
        super(name, cost, tier)
    }
}
//hunting
export class Trap extends Tool {
    constructor(name = "Trap", cost = 2, tier = 1) {
        super(name, cost, tier)
        this.SubType = "Trap"
    }
}
//knife
export class Knife extends Tool {
    constructor(name = "Knife", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Knife"
    }
}
//pickaxes
export class PickAxe extends Tool {
    constructor(name, cost, tier) {
        super(name, cost, tier)
        this.SubType = "Pickaxe"
    }
}
export class BronzePickAxe extends PickAxe {
    constructor(name = "Bronze Pickaxe", cost = 1, tier = 1) {
        super(name, cost, tier)
    }
}
export class IronPickAxe extends PickAxe {
    constructor(name = "Iron Pickaxe", cost = 5, tier = 2) {
        super(name, cost, tier)
    }
}
export class SteelPickAxe extends PickAxe {
    constructor(name = "Steel Pickaxe", cost = 10, tier = 3) {
        super(name, cost, tier)
    }
}
//tinderboxes
export class TinderBox extends Tool {
    constructor(name = "Tinderbox", cost = 1, tier = 1) {
        super(name, cost)
        this.Tier = tier; this.SubType = "Tinderbox"
    }
}