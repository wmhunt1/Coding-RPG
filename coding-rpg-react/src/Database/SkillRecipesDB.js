import {
    Ashes, BatGuano, BeefStew, BlackFeather, Bread, BronzeAxe, BronzeAxe2H, BronzeBar, BronzeBarrel, BronzeBomb,
    BronzeCrossBow1H, BronzeCrossBow2H, BronzeCrossBowOffHand, BronzeDagger, BronzeDaggerOffHand, BronzeGauntlets,
    BronzeHatchet, BronzeHelmet, BronzeLegs, BronzeLimbs, BronzeMace, BronzePickAxe, BronzePistol, BronzePistolOffHand,
    BronzeRifle, BronzeShield, BronzeSword, BronzeSword2H, BronzeTools, BronzeTorso, BronzeWarHammer, BronzeWarHammer2H,
    Bucket, BurntBeef, BurntBread, BurntChicken, BurntFish, BurntRabbitMeat, BurntRatMeat, BurntStew, Charcoal, CoalOre,
    CookedBeef, CookedChicken, CookedFish, CookedRabbitMeat, CookedRatMeat, CopperOre, CowLeather, Dough, EnchantmentTome,
    FishingRod, FishStew, Flour, GunPowder, HardLeatherBoots, HardLeatherCowl, HardLeatherGloves, HardLeatherLegs,
    HardLeatherTorso, Hatchet, IronAxe, IronAxe2H, IronBar, IronBarrel, IronBomb, IronBoots, IronCrossBow1H, IronCrossBow2H,
    IronCrossBowOffHand, IronDagger, IronDaggerOffHand, IronGauntlets, IronHatchet, IronHelmet, IronLegs, IronLimbs,
    IronMace, IronOre, IronPickAxe, IronPistol, IronPistolOffHand, IronRifle, IronShield, IronSword, IronSword2H, IronTools,
    IronTorso, IronWarHammer, IronWarHammer2H, Knife, LeatherBoots, LeatherCowl, LeatherGloves, LeatherLegs, LeatherTorso,
    Milk, Needle, OakLogs, OakStaff, OakStock, OakWand, PickAxe, RabbitStew, RatStew, RawBeef, RawChicken, RawFish,
    RawRabbitMeat, RawRatMeat, Salt, SaltPeter, Shears, Sickle, SteelAxe, SteelAxe2H, SteelBar, SteelBarrel, SteelBomb,
    SteelBoots, SteelCrossBow1H, SteelCrossBow2H, SteelCrossBowOffHand, SteelDagger, SteelDaggerOffHand, SteelGauntlets,
    SteelHatchet, SteelHelmet, SteelLegs, SteelLimbs, SteelMace, SteelPickAxe, SteelPistol, SteelPistolOffHand, Quill,
    SteelRifle, SteelShield, SteelSword, SteelSword2H, SteelTools, SteelTorso, SteelWarHammer, SteelWarHammer2H, Ink,
    Sulphur, Thread, TinderBox, TinOre, Tools, Water, Wheat, WillowLogs, WillowStaff, WillowStock, WillowWand, WoodLogs,
    WoodShortBow, WoodStaff, WoodStock, WoodWand, WoolBoots, WoolCloth, WoolGloves, WoolHat, WoolRobeBottom, WoolRobeTop,
    WoolTrousers, WoolTunic, WoolWizardHat, OakShortBow, WillowShortBow, OakLongBow, WillowLongBow, WoodLongBow, Bones,
    Skull, Ectoplasm, SpiderSilkCloth, SpiderSilkBoots, SpiderSilkGloves, SpiderSilkRobeBottom, SpiderSilkRobeTop, Rope,
    SpiderSilkWizardHat, BronzeBoots, MortarAndPestle, UnEnchantedWoodWand, UnEnchantedWillowWand, UnEnchantedWillowStaff,
    UnEnchantedOakStaff, UnEnchantedWoodStaff, UnEnchantedOakWand, Trap, MilkThistle, Aloe, PotionBottle, Antidote, BurnSalve,
    RawCrayFish, CookedCrayFish, RawTrout, CookedTrout, EyeOfNewt, RabbitFur, Honey, Beeswax, Butter, Toast, ButteredToast,
    Carrot, Cabbage, Trowel, Spade, RawPotato, BronzeRapier, IronRapier, SteelRapier, SteelScimitar, IronScimitar, BronzeScimitar, BoneMeal,
    BronzeShortSpear, BronzeSpear, IronShortSpear, IronSpear, SteelShortSpear, SteelSpear, BronzeHalberd, IronHalberd, SteelHalberd, OakQuarterStaff,
    WillowQuarterStaff, WoodQuarterStaff, WoolCloak, SpiderSilkCloak, BronzeDart, BronzeDartOffHand, IronDart, IronDartOffHand, SteelDart, SteelDartOffHand,
    BronzeThrowingAxe, BronzeThrowingAxeOffHand, BronzeThrowingHammer, BronzeThrowingHammerOffHand, BronzeThrowingKnife, BronzeThrowingKnifeOffHand,
    BronzeThrowingSpear, BronzeThrowingSpearOffHand, IronThrowingAxe, IronThrowingAxeOffHand, IronThrowingHammer, IronThrowingHammerOffHand, IronThrowingKnife,
    IronThrowingKnifeOffHand, IronThrowingSpear, IronThrowingSpearOffHand, SteelThrowingKnife, SteelThrowingKnifeOffHand, SteelThrowingAxe, SteelThrowingAxeOffHand,
    SteelThrowingHammer, SteelThrowingHammerOffHand, SteelThrowingSpear, SteelThrowingSpearOffHand, BronzeMaceOffHand, BronzeRapierOffHand, BronzeScimitarOffHand, BronzeShortSpearOffHand,
    BronzeSwordOffHand, BronzeWarHammerOffHand, IronAxeOffHand, IronMaceOffHand, BronzeAxeOffHand, IronRapierOffHand, IronScimitarOffHand, IronShortSpearOffHand, IronSwordOffHand, IronWarHammerOffHand, SteelAxeOffHand, SteelMaceOffHand, SteelRapierOffHand, SteelScimitarOffHand, SteelShortSpearOffHand, SteelSwordOffHand, SteelWarHammerOffHand, Flax, BowString, Feather, Paper
} from "./ItemsDB"
export class SkillRecipe {
    Name; Skill; Tool; Verb; LevelRequirement; Exp; Input; Output; FailureOutput;
    constructor(name, level, xp, input, output, failure) {
        this.Name = name; this.LevelRequirement = level; this.Exp = xp; this.Input = input; this.Output = output; this.FailureOutput = failure; this.Tool = null
    }
}
//crafting
//alchemy
export function alchemyRecipes() {
    var alchemyRecipes = [new GrindBones(), new MakeAntidote(), new MakeBurnSalve(), new MakeGunPowder(), new MakeInk(), new ProcessBatGuano()]
    return alchemyRecipes
}
export class AlchemyRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Alchemy"; this.Tool = new MortarAndPestle(); this.Verb = "Make"
    }
}
export class GrindBones extends AlchemyRecipe {
    constructor(name = "Grind Bonees", level = 1, xp = 5, input = [{ Item: new Bones(), Quantity: 1 }], output = [{ Item: new BoneMeal(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Grind"
    }
}
export class MakeAntidote extends AlchemyRecipe {
    constructor(name = "Make Antidote", level = 1, xp = 25, input = [{ Item: new MilkThistle(), Quantity: 1 }, { Item: new PotionBottle(), Quantity: 1 }], output = [{ Item: new Antidote(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeBurnSalve extends AlchemyRecipe {
    constructor(name = "Make Burn Salve", level = 1, xp = 25, input = [{ Item: new Aloe(), Quantity: 1 }, { Item: new Beeswax(), Quantity: 1 }, { Item: new PotionBottle(), Quantity: 1 }], output = [{ Item: new BurnSalve(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeGunPowder extends AlchemyRecipe {
    constructor(name = "Make Gunpowder", level = 5, xp = 100, input = [{ Item: new Sulphur(), Quantity: 1 }, { Item: new SaltPeter(), Quantity: 1 }, { Item: new Charcoal(), Quantity: 1 }], output = [{ Item: new GunPowder(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeInk extends AlchemyRecipe {
    constructor(name = "Make Ink", level = 1, xp = 25, input = [{ Item: new Water(), Quantity: 1 }, { Item: new Charcoal(), Quantity: 1 }], output = [{ Item: new Ink(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class ProcessBatGuano extends AlchemyRecipe {
    constructor(name = "Make Gunpowder", level = 1, xp = 25, input = [{ Item: new BatGuano(), Quantity: 1 }, { Item: new Water(), Quantity: 1 }], output = [{ Item: new SaltPeter(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Process"
    }
}
//cooking
export function cookingRecipes() {
    var cookingRecipes = [new BakeBread(), new CookBeefStew(), new CookFishStew(), new CookRabbitStew(), new CookRatStew(),
    new CookRawBeef(), new CookRawChicken(), new CookRawCrayFish(), new CookRawFish(), new CookRawRabbitMeat(), new CookRawRatMeat(), new CookRawTrout(), new MakeDough()]
    return cookingRecipes;
}
export function churnCookingRecipes() {
    var recipes = [new ChurnButter()]
    return recipes;
}
export class CookingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Cooking"; this.Verb = "Cook"
    }
}
export class BakeBread extends CookingRecipe {
    constructor(name = "Bake Bread", level = 1, xp = 25, input = [{ Item: new Dough(), Quantity: 1 }], output = [{ Item: new Bread(), Quantity: 1 }], failure = { Item: new BurntBread(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Bake"
    }
}
export class ButterToast extends CookingRecipe {
    constructor(name = "Butter Toast", level = 1, xp = 25, input = [{ Item: new Butter(), Quantity: 1 }, { Item: new Toast(), Quantity: 1 }], output = [{ Item: new ButteredToast(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Butter"; this.Tool = new Knife()
    }
}
export class ChurnButter extends CookingRecipe {
    constructor(name = "Churn Butter", level = 1, xp = 25, input = [{ Item: new Milk(), Quantity: 1 }], output = [{ Item: new Butter(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Churn"
    }
}
export class ToastBread extends CookingRecipe {
    constructor(name = "Toast Bread", level = 1, xp = 25, input = [{ Item: new Bread(), Quantity: 1 }], output = [{ Item: new Toast(), Quantity: 1 }], failure = { Item: new BurntBread(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Toast"
    }
}
//stew recipe
export class CookBeefStew extends CookingRecipe {
    constructor(name = "Cook Beef Stew", level = 5, xp = 125, input = [{ Item: new RawBeef(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }, { Item: new Salt(), Quantity: 1 }], output = [{ Item: new BeefStew(), Quantity: 1 }], failure = { Item: new BurntStew(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookFishStew extends CookingRecipe {
    constructor(name = "Cook Fish Stew", level = 5, xp = 125, input = [{ Item: new RawFish(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }, { Item: new Salt(), Quantity: 1 }], output = [{ Item: new FishStew(), Quantity: 1 }], failure = { Item: new BurntStew(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRabbitStew extends CookingRecipe {
    constructor(name = "Cook Rabbit Stew", level = 5, xp = 125, input = [{ Item: new RawRabbitMeat(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }, { Item: new Salt(), Quantity: 1 }], output = [{ Item: new RabbitStew(), Quantity: 1 }], failure = { Item: new BurntStew(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRatStew extends CookingRecipe {
    constructor(name = "Cook Rat Stew", level = 5, xp = 125, input = [{ Item: new RawRatMeat(), Quantity: 1 }, { Item: new Milk(), Quantity: 1 }, { Item: new Salt(), Quantity: 1 }], output = [{ Item: new RatStew(), Quantity: 1 }], failure = { Item: new BurntStew(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawBeef extends CookingRecipe {
    constructor(name = "Cook Raw Beef", level = 1, xp = 25, input = [{ Item: new RawBeef(), Quantity: 1 }], output = [{ Item: new CookedBeef(), Quantity: 1 }], failure = { Item: new BurntBeef(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawChicken extends CookingRecipe {
    constructor(name = "Cook Raw Chicken", level = 1, xp = 25, input = [{ Item: new RawChicken(), Quantity: 1 }], output = [{ Item: new CookedChicken(), Quantity: 1 }], failure = { Item: new BurntChicken(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawCrayFish extends CookingRecipe {
    constructor(name = "Cook Raw Crayfish", level = 1, xp = 25, input = [{ Item: new RawCrayFish(), Quantity: 1 }], output = [{ Item: new CookedCrayFish(), Quantity: 1 }], failure = { Item: new BurntFish(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawFish extends CookingRecipe {
    constructor(name = "Cook Raw Fish", level = 1, xp = 25, input = [{ Item: new RawFish(), Quantity: 1 }], output = [{ Item: new CookedFish(), Quantity: 1 }], failure = { Item: new BurntFish(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawRabbitMeat extends CookingRecipe {
    constructor(name = "Cook Raw Rabbit Meat", level = 1, xp = 25, input = [{ Item: new RawRabbitMeat(), Quantity: 1 }], output = [{ Item: new CookedRabbitMeat(), Quantity: 1 }], failure = { Item: new BurntRabbitMeat(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawRatMeat extends CookingRecipe {
    constructor(name = "Cook Raw Rat", level = 1, xp = 25, input = [{ Item: new RawRatMeat(), Quantity: 1 }], output = [{ Item: new CookedRatMeat(), Quantity: 1 }], failure = { Item: new BurntRatMeat(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CookRawTrout extends CookingRecipe {
    constructor(name = "Cook Raw Trout", level = 5, xp = 50, input = [{ Item: new RawTrout(), Quantity: 1 }], output = [{ Item: new CookedTrout(), Quantity: 1 }], failure = { Item: new BurntFish(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class DrawWater extends CookingRecipe {
    constructor(name = "Draw Water", level = 1, xp = 1, input = [{ Item: new Bucket(), Quantity: 1 }], output = [{ Item: new Water(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Draw"
    }
}
export class MakeDough extends CookingRecipe {
    constructor(name = "Knead Dough", level = 1, xp = 5, input = [{ Item: new Flour(), Quantity: 1 }, { Item: new Water(), Quantity: 1 }], output = [{ Item: new Dough(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Knead"
    }
}
export class MillWheat extends CookingRecipe {
    constructor(name = "Mill Grain", level = 1, xp = 25, input = [{ Item: new Wheat(), Quantity: 1 }], output = [{ Item: new Flour(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Mill"
    }
}
//crafting
export function craftingRecipes() {
    var craft = [new CraftHardLeatherBoots(), new CraftHardLeatherCowl(), new CraftHardLeatherGloves(), new CraftHardLeatherLegs(), new CraftHardLeatherTorso(),
    new CraftLeatherBoots(), new CraftLeatherCowl(), new CraftLeatherGloves(), new CraftLeatherLegs(), new CraftLeatherTorso(), new MakePaperFromOakLogs(), new MakePaperFromWillowLogs(), new MakeCharcoalFromWoodLogs(),
    new WeaveSpiderSilkBoots(), new WeaveSpiderSilkCloak(), new WeaveSpiderSilkGloves(), new WeaveSpiderSilkRobeBottom(), new WeaveSpiderSilkRobeTop(), new WeaveSpiderSilkWizardHat(),
    new WeaveWoolBoots(), new WeaveWoolCloak(), new WeaveWoolGloves(), new WeaveWoolHat(), new WeaveWoolRobeBottom(), new WeaveWoolRobeTop(), new WeaveWoolTrousers(), new WeaveWoolTunic(), new WeaveWoolWizardHat()]
    return craft;
}
export function spinCraftingRecipes() {
    var craft = [new SpinBowString(), new SpinRope()]
    return craft;
}
export class CraftingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Crafting"; this.Verb = "Craft"
    }
}
export class LeatherCraftingRecipe extends CraftingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Needle()
    }
}
export class CraftHardLeatherBoots extends LeatherCraftingRecipe {
    constructor(name = "Craft Hard Leather Boots", level = 5, xp = 50, input = [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new HardLeatherBoots(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftHardLeatherCowl extends LeatherCraftingRecipe {
    constructor(name = "Craft Hard Leather Cowl", level = 6, xp = 100, input = [{ Item: new CowLeather(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new HardLeatherCowl(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftHardLeatherGloves extends LeatherCraftingRecipe {
    constructor(name = "Craft Hard Leather Gloves", level = 5, xp = 50, input = [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new HardLeatherGloves(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftHardLeatherLegs extends LeatherCraftingRecipe {
    constructor(name = "Craft Hard Leather Legs", level = 7, xp = 150, input = [{ Item: new CowLeather(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new HardLeatherLegs(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 3 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftHardLeatherTorso extends LeatherCraftingRecipe {
    constructor(name = "Craft Hard Leather Torso", level = 9, xp = 250, input = [{ Item: new CowLeather(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new HardLeatherTorso(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 5 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftLeatherBoots extends LeatherCraftingRecipe {
    constructor(name = "Craft Leather Boots", level = 1, xp = 25, input = [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new LeatherBoots(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftLeatherCowl extends LeatherCraftingRecipe {
    constructor(name = "Craft Leather Cowl", level = 2, xp = 50, input = [{ Item: new CowLeather(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new LeatherCowl(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftLeatherGloves extends LeatherCraftingRecipe {
    constructor(name = "Craft Leather Gloves", level = 1, xp = 25, input = [{ Item: new CowLeather(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new LeatherGloves(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftLeatherLegs extends LeatherCraftingRecipe {
    constructor(name = "Craft Leather Legs", level = 3, xp = 75, input = [{ Item: new CowLeather(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new LeatherLegs(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 3 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class CraftLeatherTorso extends LeatherCraftingRecipe {
    constructor(name = "Craft Leather Torso", level = 4, xp = 125, input = [{ Item: new CowLeather(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new LeatherTorso(), Quantity: 1 }], failure = { Item: new CowLeather(), Quantity: 5 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class PaperCraftingRecipe extends CraftingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Make"
    }
}
export class MakePaperFromOakLogs extends PaperCraftingRecipe {
    constructor(name = "Make Paper (Oak Logs)", level = 5, xp = 100, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new Paper(), Quantity: 2 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakePaperFromWillowLogs extends PaperCraftingRecipe {
    constructor(name = "Make Paper (Willow Logs)", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new Paper(), Quantity: 3 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakePaperFromWoodLogs extends PaperCraftingRecipe {
    constructor(name = "Make Paper (Wood Logs)", level = 1, xp = 25, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new Paper(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SpinningCraftingRecipe extends CraftingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Spin"
    }
}
export class SpinBowString extends SpinningCraftingRecipe {
    constructor(name = "Spin BowString", level = 1, xp = 5, input = [{ Item: new Flax(), Quantity: 1 }], output = [{ Item: new BowString(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SpinRope extends SpinningCraftingRecipe {
    constructor(name = "Spin Rope", level = 1, xp = 15, input = [{ Item: new Flax(), Quantity: 3 }], output = [{ Item: new Rope(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveClothCraftingRecipe extends CraftingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Needle(); this.Verb = "Weave"
    }
}
export class WeaveSpiderSilkBoots extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Silk Boots", level = 5, xp = 50, input = [{ Item: new SpiderSilkCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkBoots(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveSpiderSilkCloak extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Silk Cloak", level = 5, xp = 50, input = [{ Item: new SpiderSilkCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkCloak(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveSpiderSilkGloves extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Silk Gloves", level = 5, xp = 50, input = [{ Item: new SpiderSilkCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkGloves(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveSpiderSilkRobeBottom extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Silk Robe Bottom", level = 7, xp = 150, input = [{ Item: new SpiderSilkCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkRobeBottom(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 3 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveSpiderSilkRobeTop extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Robe Top", level = 9, xp = 250, input = [{ Item: new SpiderSilkCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkRobeTop(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 5 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveSpiderSilkWizardHat extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Spider Silk Wizard Hat", level = 6, xp = 100, input = [{ Item: new SpiderSilkCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new SpiderSilkWizardHat(), Quantity: 1 }], failure = { Item: new SpiderSilkCloth(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolBoots extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Boots", level = 1, xp = 25, input = [{ Item: new WoolCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolBoots(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolCloak extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Cloak", level = 1, xp = 25, input = [{ Item: new WoolCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolCloak(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolGloves extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Gloves", level = 1, xp = 25, input = [{ Item: new WoolCloth(), Quantity: 1 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolGloves(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 1 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolHat extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Hat", level = 2, xp = 50, input = [{ Item: new WoolCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolHat(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolRobeBottom extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Robe Bottom", level = 3, xp = 75, input = [{ Item: new WoolCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolRobeBottom(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 3 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolRobeTop extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Hat", level = 4, xp = 125, input = [{ Item: new WoolCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolRobeTop(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 5 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolTrousers extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Trousers", level = 1, xp = 75, input = [{ Item: new WoolCloth(), Quantity: 3 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolTrousers(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 3 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolTunic extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Tunic", level = 1, xp = 125, input = [{ Item: new WoolCloth(), Quantity: 5 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolTunic(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 5 }) {
        super(name, level, xp, input, output, failure)
    }
}
export class WeaveWoolWizardHat extends WeaveClothCraftingRecipe {
    constructor(name = "Weave Wool Wizard Hat", level = 2, xp = 50, input = [{ Item: new WoolCloth(), Quantity: 2 }, { Item: new Thread(), Quantity: 1 }], output = [{ Item: new WoolWizardHat(), Quantity: 1 }], failure = { Item: new WoolCloth(), Quantity: 2 }) {
        super(name, level, xp, input, output, failure)
    }
}
//enchanting;
export function enchantingRecipes() {
    var enchantingRecipes = [new EnchantOakStaff(), new EnchantOakWand(), new EnchantWillowStaff(), new EnchantWillowWand(), new EnchantWoodStaff(), new EnchantWoodWand()]
    return enchantingRecipes
}
export class EnchantingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Enchanting"; this.Tool = new EnchantmentTome(); this.Verb = "Enchant"
    }
}
export class EnchantOakStaff extends EnchantingRecipe {
    constructor(name = "Enchant Oak Staff", level = 7, xp = 200, input = [{ Item: new UnEnchantedOakStaff(), Quantity: 1 }], output = [{ Item: new OakStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class EnchantOakWand extends EnchantingRecipe {
    constructor(name = "Enchant Oak Wand", level = 5, xp = 100, input = [{ Item: new UnEnchantedOakWand(), Quantity: 1 }], output = [{ Item: new OakWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class EnchantWillowStaff extends EnchantingRecipe {
    constructor(name = "Enchant Willow Staff", level = 13, xp = 400, input = [{ Item: new UnEnchantedWillowStaff(), Quantity: 1 }], output = [{ Item: new WillowStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class EnchantWillowWand extends EnchantingRecipe {
    constructor(name = "Enchant Willow Wand", level = 10, xp = 200, input = [{ Item: new UnEnchantedWillowWand(), Quantity: 1 }], output = [{ Item: new WillowWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class EnchantWoodStaff extends EnchantingRecipe {
    constructor(name = "Enchant Wood Staff", level = 3, xp = 50, input = [{ Item: new UnEnchantedWoodStaff(), Quantity: 1 }], output = [{ Item: new WoodStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class EnchantWoodWand extends EnchantingRecipe {
    constructor(name = "Enchant Wood Wand", level = 1, xp = 25, input = [{ Item: new UnEnchantedWoodWand(), Quantity: 1 }], output = [{ Item: new WoodWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//engineering
export function engineeringRecipes() {
    var engineeringRecipes = [new BuildBronzeBomb(), new BuildBronzePistol(), new BuildBronzePistolOffHand(), new BuildBronzeRifle(),
    new BuildIronBomb(), new BuildIronPistol(), new BuildIronPistolOffHand(), new BuildIronRifle(),
    new BuildSteelBomb(), new BuildSteelPistol(), new BuildSteelPistolOffHand(), new BuildSteelRifle()]
    return engineeringRecipes;
}
export class EngineeringRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Engineering"; this.Tool = new Tools(); this.Verb = "Build"
    }
}
export class BuildBronzeBomb extends EnchantingRecipe {
    constructor(name = "Build Bronze Bomb", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }], output = [{ Item: new BronzeBomb(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildBronzePistol extends EnchantingRecipe {
    constructor(name = "Build Bronze Pistol", level = 1, xp = 25, input = [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }], output = [{ Item: new BronzePistol(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildBronzePistolOffHand extends EnchantingRecipe {
    constructor(name = "Build Bronze Pistol (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 1 }], output = [{ Item: new BronzePistolOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildBronzeRifle extends EnchantingRecipe {
    constructor(name = "Build Bronze Rifle", level = 1, xp = 25, input = [{ Item: new BronzeBarrel(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }], output = [{ Item: new BronzeRifle(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildIronBomb extends EnchantingRecipe {
    constructor(name = "Build Iron Bomb", level = 5, xp = 100, input = [{ Item: new IronBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }], output = [{ Item: new IronBomb(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildIronPistol extends EnchantingRecipe {
    constructor(name = "Build Iron Pistol", level = 5, xp = 100, input = [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }], output = [{ Item: new IronPistol(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildIronPistolOffHand extends EnchantingRecipe {
    constructor(name = "Build Iron Pistol (OffHand)", level = 5, xp = 100, input = [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 2 }], output = [{ Item: new IronPistolOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildIronRifle extends EnchantingRecipe {
    constructor(name = "Build Iron Rifle", level = 5, xp = 100, input = [{ Item: new IronBarrel(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }], output = [{ Item: new IronRifle(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildSteelBomb extends EnchantingRecipe {
    constructor(name = "Build Steel Bomb", level = 10, xp = 400, input = [{ Item: new SteelBar(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }], output = [{ Item: new SteelBomb(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildSteelPistol extends EnchantingRecipe {
    constructor(name = "Build Steel Pistol", level = 10, xp = 400, input = [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }], output = [{ Item: new SteelPistol(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildSteelPistolOffHand extends EnchantingRecipe {
    constructor(name = "Build Steel Pistol (OffHand)", level = 10, xp = 400, input = [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 3 }], output = [{ Item: new SteelPistolOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuildSteelRifle extends EnchantingRecipe {
    constructor(name = "Build Steel Rifle", level = 10, xp = 400, input = [{ Item: new SteelBarrel(), Quantity: 1 }, { Item: new WillowStock(), Quantity: 1 }, { Item: new GunPowder(), Quantity: 4 }], output = [{ Item: new SteelRifle(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//firemaking
export function firemakingRecipes() {
    var firemakingRecipes = [new BurnOakLogs(), new BurnWillowLogs(), new BurnWoodLogs(), new MakeCharcoalFromOakLogs(), new MakeCharcoalFromWillowLogs(), new MakeCharcoalFromWoodLogs()]
    return firemakingRecipes
}
export class FiremakingingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Firemaking"; this.Tool = new TinderBox(); this.Verb = "Burn"
    }
}
export class BurnOakLogs extends FiremakingingRecipe {
    constructor(name = "Burn Oak Logs", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }], output = [{ Item: new Ashes(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BurnWillowLogs extends FiremakingingRecipe {
    constructor(name = "Burn Willow Logs", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new Ashes(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BurnWoodLogs extends FiremakingingRecipe {
    constructor(name = "Burn Wood Logs", level = 1, xp = 25, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new Ashes(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeCharcoalFromOakLogs extends FiremakingingRecipe {
    constructor(name = "Make Charcoal (Oak Logs)", level = 5, xp = 100, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new Charcoal(), Quantity: 2 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeCharcoalFromWillowLogs extends FiremakingingRecipe {
    constructor(name = "Make Charcoal (Willow Logs)", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new Charcoal(), Quantity: 3 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MakeCharcoalFromWoodLogs extends FiremakingingRecipe {
    constructor(name = "Make Charcoal (Wood Logs)", level = 1, xp = 25, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new Charcoal(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//fletching
export function fletchingRecipes() {
    var fletchingRecipes = [new AssembleBronzeCrossBow1H(), new AssembleBronzeCrossBow2H(), new AssembleBronzeCrossBowOffHand(),
    new AssembleIronCrossBow1H(), new AssembleIronCrossBow2H(), new AssembleIronCrossBowOffHand(),
    new AssembleSteelCrossBow1H(), new AssembleSteelCrossBow2H(), new AssembleSteelCrossBowOffHand(),
    new FletchOakLongBow(), new FletchOakQuarterStaff(), new FletchOakStaff(), new FletchOakShortBow(), new FletchOakStock(), new FletchOakWand(), new FletchQuill(),
    new FletchWillowLongBow(), new FletchWillowQuarterStaff(), new FletchWillowStaff(), new FletchWillowShortBow(), new FletchWillowStock(), new FletchWillowWand(),
    new FletchWoodLongBow(), new FletchWoodQuarterStaff(), new FletchWoodStaff(), new FletchWoodShortBow(), new FletchWillowStock(), new FletchWoodWand()]
    return fletchingRecipes
}
export class FletchingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Fletching"; this.Tool = new Knife(); this.Verb = "Fletch"
    }
}
export class FletchOakLongBow extends FletchingRecipe {
    constructor(name = "Fletch Oak LongBow", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new OakLongBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchOakQuarterStaff extends FletchingRecipe {
    constructor(name = "Fletch Oak QuarterStaff", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }], output = [{ Item: new OakQuarterStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchOakStaff extends FletchingRecipe {
    constructor(name = "Fletch Oak Staff", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedOakStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchOakShortBow extends FletchingRecipe {
    constructor(name = "Fletch Oak ShortBow", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new OakShortBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchOakStock extends FletchingRecipe {
    constructor(name = "Fletch Oak Stock", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }], output = [{ Item: new OakStock(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchOakWand extends FletchingRecipe {
    constructor(name = "Fletch Oak Wand", level = 5, xp = 100, input = [{ Item: new OakLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedOakWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchQuill extends FletchingRecipe {
    constructor(name = "Fletch Quill", level = 1, xp = 5, input = [{ Item: new Feather(), Quantity: 1 }], output = [{ Item: new Quill(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowLongBow extends FletchingRecipe {
    constructor(name = "Fletch Willow LongBow", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new WillowLongBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowQuarterStaff extends FletchingRecipe {
    constructor(name = "Fletch Willow QuarterStaff", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new WillowQuarterStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowStaff extends FletchingRecipe {
    constructor(name = "Fletch Willow Staff", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedWillowStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowShortBow extends FletchingRecipe {
    constructor(name = "Fletch Willow ShortBow", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new WillowShortBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowStock extends FletchingRecipe {
    constructor(name = "Fletch Willow Stock", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new WillowStock(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWillowWand extends FletchingRecipe {
    constructor(name = "Fletch Willow Wand", level = 10, xp = 400, input = [{ Item: new WillowLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedWillowWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodLongBow extends FletchingRecipe {
    constructor(name = "Fletch Wood LongBow", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new WoodLongBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodQuarterStaff extends FletchingRecipe {
    constructor(name = "Fletch Wood QuarterStaff", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new WoodQuarterStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodStaff extends FletchingRecipe {
    constructor(name = "Fletch Wood Staff", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedWoodStaff(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodShortBow extends FletchingRecipe {
    constructor(name = "Fletch Wood ShortBow", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new WoodShortBow(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodStock extends FletchingRecipe {
    constructor(name = "Fletch Wood Stock", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new WoodStock(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FletchWoodWand extends FletchingRecipe {
    constructor(name = "Fletch Wood Wand", level = 1, xp = 15, input = [{ Item: new WoodLogs(), Quantity: 1 }], output = [{ Item: new UnEnchantedWoodWand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleCrossBow extends FletchingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Fletching"; this.Tool = new Tools(); this.Verb = "Assemble"
    }
}
export class AssembleBronzeCrossBow1H extends AssembleCrossBow {
    constructor(name = "Assemble Bronze CrossBow 1H", level = 1, xp = 25, input = [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new BronzeCrossBow1H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleBronzeCrossBow2H extends AssembleCrossBow {
    constructor(name = "Assemble Bronze CrossBow 2H", level = 1, xp = 25, input = [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new BronzeCrossBow2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleBronzeCrossBowOffHand extends AssembleCrossBow {
    constructor(name = "Assemble Bronze CrossBow (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new BronzeCrossBowOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleIronCrossBow1H extends AssembleCrossBow {
    constructor(name = "Assemble Iron CrossBow 1H", level = 5, xp = 100, input = [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new IronCrossBow1H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleIronCrossBow2H extends AssembleCrossBow {
    constructor(name = "Assemble Iron CrossBow 2H", level = 5, xp = 100, input = [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new IronCrossBow2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleIronCrossBowOffHand extends AssembleCrossBow {
    constructor(name = "Assemble Iron CrossBow (OffHand)", level = 5, xp = 100, input = [{ Item: new IronLimbs(), Quantity: 1 }, { Item: new OakStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new IronCrossBowOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleSteelCrossBow1H extends AssembleCrossBow {
    constructor(name = "Assemble Steel CrossBow 1H", level = 10, xp = 400, input = [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new SteelCrossBow1H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleSteelCrossBow2H extends AssembleCrossBow {
    constructor(name = "Assemble Steel CrossBow 2H", level = 10, xp = 400, input = [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new SteelCrossBow2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class AssembleSteelCrossBowOffHand extends AssembleCrossBow {
    constructor(name = "Assemble Steel CrossBow (OffHand)", level = 10, xp = 400, input = [{ Item: new SteelLimbs(), Quantity: 1 }, { Item: new WoodStock(), Quantity: 1 }, { Item: new BowString(), Quantity: 1 }], output = [{ Item: new SteelCrossBowOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//smith
export function smelterRecipes() {
    var smelterRecipes = [new SmeltBronzeBar(), new SmeltIronBar(), new SmeltSteelBar()]
    return smelterRecipes
}
export function smithingRecipes() {
    var smithingRecipes = [...bronzeSmithRecipes(), ...ironSmithRecipes(), ...steelSmithRecipes()]
    return smithingRecipes
}
export class SmithingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Smithing"; this.Tool = new Tools(); this.Verb = "Smith"
    }
}
//bronze
export function bronzeSmithRecipes() {
    var bronzeRecipes = [new SmithBronzeAxe(), new SmithBronzeAxeOffHand(), new SmithBronzeAxe2H(), new SmithBronzeBarrel(), new SmithBronzeBoots(), new SmithBronzeDagger(), new SmithBronzeDaggerOffHand(), new SmithBronzeDart(), new SmithBronzeDartOffHand(),
    new SmithBronzeGauntlets(), new SmithBronzeHalberd(), new SmithBronzeHatchet(), new SmithBronzeHelmet(), new SmithBronzeLegs(), new SmithBronzeLimbs(), new SmithBronzeMace(), new SmithBronzeMaceOffHand(),
    new SmithBronzePickaxe(), new SmithBronzeRapier(), new SmithBronzeRapierOffHand(), new SmithBronzeShield(), new SmithBronzeScimitar(), new SmithBronzeScimitarOffHand(), new SmithBronzeShortSpear(), new SmithBronzeShortSpearOffHand(), new SmithBronzeSpear(), new SmithBronzeSword(), new SmithBronzeSwordOffHand(), new SmithBronzeSword2H(), new SmithBronzeTools(), new SmithBronzeTorso(),
    new SmithBronzeThrowingAxe(), new SmithBronzeThrowingAxeOffHand(), new SmithBronzeThrowingHammer(), new SmithBronzeThrowingHammerOffHand(), new SmithBronzeThrowingKnife(), new SmithBronzeThrowingKnifeOffHand(), new SmithBronzeThrowingSpear(), new SmithBronzeThrowingSpearOffHand(),
    new SmithBronzeWarHammer(), new SmithBronzeWarHammerOffHand(), new SmithBronzeWarHammer2H(),]
    return bronzeRecipes
}
//armor
export class SmithBronzeBoots extends SmithingRecipe {
    constructor(name = "Smith Bronze Boots", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeBoots(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeGauntlets extends SmithingRecipe {
    constructor(name = "Smith Bronze Gauntlets", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeGauntlets(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeHelmet extends SmithingRecipe {
    constructor(name = "Smith Bronze Helmet", level = 3, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeHelmet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeLegs extends SmithingRecipe {
    constructor(name = "Smith Bronze Legs", level = 4, xp = 75, input = [{ Item: new BronzeBar(), Quantity: 3 }], output = [{ Item: new BronzeLegs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeShield extends SmithingRecipe {
    constructor(name = "Smith Bronze Shield", level = 4, xp = 75, input = [{ Item: new BronzeBar(), Quantity: 3 }], output = [{ Item: new BronzeShield(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeTorso extends SmithingRecipe {
    constructor(name = "Smith Bronze Torso", level = 4, xp = 125, input = [{ Item: new BronzeBar(), Quantity: 5 }], output = [{ Item: new BronzeTorso(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//processed
export class SmithBronzeBarrel extends SmithingRecipe {
    constructor(name = "Smith Bronze Barrel", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeBarrel(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeLimbs extends SmithingRecipe {
    constructor(name = "Smith Bronze Limbs", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeLimbs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//new Tools
export class SmithBronzeHatchet extends SmithingRecipe {
    constructor(name = "Smith Bronze Hatchet", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeHatchet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzePickaxe extends SmithingRecipe {
    constructor(name = "Smith Bronze PickAxe", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzePickAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeTools extends SmithingRecipe {
    constructor(name = "Smith Bronze Tools", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeTools(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//weapon
export class SmithBronzeAxe extends SmithingRecipe {
    constructor(name = "Smith Bronze Axe", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Axe (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeAxe2H extends SmithingRecipe {
    constructor(name = "Smith Bronze Axe 2H", level = 4, xp = 100, input = [{ Item: new BronzeBar(), Quantity: 4 }], output = [{ Item: new BronzeAxe2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeDagger extends SmithingRecipe {
    constructor(name = "Smith Bronze Dagger", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeDagger(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeDaggerOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Dagger (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeDaggerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeDart extends SmithingRecipe {
    constructor(name = "Smith Bronze Dart", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeDart(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeDartOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Dart (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeDartOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeHalberd extends SmithingRecipe {
    constructor(name = "Smith Bronze Halberd", level = 4, xp = 100, input = [{ Item: new BronzeBar(), Quantity: 4 }], output = [{ Item: new BronzeHalberd(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeMace extends SmithingRecipe {
    constructor(name = "Smith Bronze Mace", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeMace(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeMaceOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Mace (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeMaceOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeRapier extends SmithingRecipe {
    constructor(name = "Smith Bronze Rapier", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeRapier(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeRapierOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Rapier (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeRapierOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeScimitar extends SmithingRecipe {
    constructor(name = "Smith Bronze Scimitar", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeScimitar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeScimitarOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Scimitar (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeScimitarOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeShortSpear extends SmithingRecipe {
    constructor(name = "Smith Bronze ShortSpear", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeShortSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeShortSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze ShortSpear (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeShortSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeSpear extends SmithingRecipe {
    constructor(name = "Smith Bronze Spear", level = 4, xp = 100, input = [{ Item: new BronzeBar(), Quantity: 4 }], output = [{ Item: new BronzeSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeSword extends SmithingRecipe {
    constructor(name = "Smith Bronze Sword", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeSword(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeSwordOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze Sword (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeSwordOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeSword2H extends SmithingRecipe {
    constructor(name = "Smith Bronze Sword 2H", level = 4, xp = 100, input = [{ Item: new BronzeBar(), Quantity: 4 }], output = [{ Item: new BronzeSword2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingAxe extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingAxe", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingAxe (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingHammer extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingHammer", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingHammer (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingKnife extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingKnife", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingKnife(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingKnifeOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingKnife (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingKnifeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingSpear extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingSpear", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeThrowingSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze ThrowingSpear (OffHand)", level = 1, xp = 25, input = [{ Item: new BronzeBar(), Quantity: 1 }], output = [{ Item: new BronzeThrowingSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeWarHammer extends SmithingRecipe {
    constructor(name = "Smith Bronze WarHammer", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeWarHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeWarHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Bronze WarHammer (OffHand)", level = 2, xp = 50, input = [{ Item: new BronzeBar(), Quantity: 2 }], output = [{ Item: new BronzeWarHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithBronzeWarHammer2H extends SmithingRecipe {
    constructor(name = "Smith Bronze WarHammer 2H", level = 4, xp = 100, input = [{ Item: new BronzeBar(), Quantity: 4 }], output = [{ Item: new BronzeWarHammer2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//iron
export function ironSmithRecipes() {
    var recipes = [new SmithIronAxe(), new SmithIronAxeOffHand(), new SmithIronAxe2H(), new SmithIronBarrel(), new SmithIronBoots(), new SmithIronDagger(), new SmithIronDaggerOffHand(), new SmithIronDart(), new SmithIronDartOffHand(),
    new SmithIronGauntlets(), new SmithIronHalberd(), new SmithIronHatchet(), new SmithIronHelmet(), new SmithIronLegs(), new SmithIronLimbs(), new SmithIronMace(), new SmithIronMaceOffHand(),
    new SmithIronPickaxe(), new SmithIronRapier(), new SmithIronRapierOffHand(), new SmithIronScimitar(), new SmithIronScimitarOffHand(), new SmithIronShortSpear(), new SmithIronShortSpearOffHand(), new SmithIronSpear(),
    new SmithIronShield(), new SmithIronSword(), new SmithIronSwordOffHand(), new SmithIronSword2H(), new SmithIronTools(), new SmithIronTorso(),
    new SmithIronThrowingAxe(), new SmithIronThrowingAxeOffHand(), new SmithIronThrowingHammer(), new SmithIronThrowingHammerOffHand(), new SmithIronThrowingKnife(), new SmithIronThrowingKnifeOffHand(), new SmithIronThrowingSpear(), new SmithIronThrowingSpearOffHand(),
    new SmithIronWarHammer(), new SmithIronWarHammerOffHand(), new SmithIronWarHammer2H()]
    return recipes;
}
//armor
export class SmithIronBoots extends SmithingRecipe {
    constructor(name = "Smith Iron Boots", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronBoots(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronGauntlets extends SmithingRecipe {
    constructor(name = "Smith Iron Gauntlets", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronGauntlets(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronHelmet extends SmithingRecipe {
    constructor(name = "Smith Iron Helmet", level = 7, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronHelmet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronLegs extends SmithingRecipe {
    constructor(name = "Smith Iron Legs", level = 9, xp = 150, input = [{ Item: new IronBar(), Quantity: 3 }], output = [{ Item: new IronLegs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronShield extends SmithingRecipe {
    constructor(name = "Smith Iron Shield", level = 9, xp = 150, input = [{ Item: new IronBar(), Quantity: 3 }], output = [{ Item: new IronShield(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronTorso extends SmithingRecipe {
    constructor(name = "Smith Iron Torso", level = 9, xp = 125, input = [{ Item: new IronBar(), Quantity: 5 }], output = [{ Item: new IronTorso(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//processed
export class SmithIronBarrel extends SmithingRecipe {
    constructor(name = "Smith Iron Barrel", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronBarrel(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronLimbs extends SmithingRecipe {
    constructor(name = "Smith Iron Limbs", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronLimbs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//new Tools
export class SmithIronHatchet extends SmithingRecipe {
    constructor(name = "Smith Iron Hatchet", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronHatchet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronPickaxe extends SmithingRecipe {
    constructor(name = "Smith Iron PickAxe", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronPickAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronTools extends SmithingRecipe {
    constructor(name = "Smith Iron Tools", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronTools(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//weapon
export class SmithIronAxe extends SmithingRecipe {
    constructor(name = "Smith Iron Axe", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Axe (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronAxe2H extends SmithingRecipe {
    constructor(name = "Smith Iron Axe 2H", level = 9, xp = 250, input = [{ Item: new IronBar(), Quantity: 4 }], output = [{ Item: new IronAxe2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronDagger extends SmithingRecipe {
    constructor(name = "Smith Iron Dagger", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronDagger(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronDaggerOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Dagger (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronDaggerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronDart extends SmithingRecipe {
    constructor(name = "Smith Iron Dart", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronDart(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronDartOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Dart (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronDartOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronHalberd extends SmithingRecipe {
    constructor(name = "Smith Iron Halberd", level = 9, xp = 250, input = [{ Item: new IronBar(), Quantity: 4 }], output = [{ Item: new IronHalberd(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronMace extends SmithingRecipe {
    constructor(name = "Smith Iron Mace", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronMace(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronMaceOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Mace (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronMaceOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronRapier extends SmithingRecipe {
    constructor(name = "Smith Iron Rapier", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronRapier(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronRapierOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Rapier (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronRapierOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronScimitar extends SmithingRecipe {
    constructor(name = "Smith Iron Scimitar", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronScimitar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronScimitarOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Scimitar (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronScimitarOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronShortSpear extends SmithingRecipe {
    constructor(name = "Smith Iron ShortSpear", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronShortSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronShortSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron ShortSpear (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronShortSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronSpear extends SmithingRecipe {
    constructor(name = "Smith Iron Spear", level = 9, xp = 250, input = [{ Item: new IronBar(), Quantity: 4 }], output = [{ Item: new IronSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronSword extends SmithingRecipe {
    constructor(name = "Smith Iron Sword", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronSword(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronSwordOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron Sword (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronSwordOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronSword2H extends SmithingRecipe {
    constructor(name = "Smith Iron Sword 2H", level = 9, xp = 250, input = [{ Item: new IronBar(), Quantity: 4 }], output = [{ Item: new IronSword2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingAxe extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingAxe", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingAxe (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingHammer extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingHammer", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingHammer (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingKnife extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingKnife", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingKnife(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingKnifeOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingKnife (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingKnifeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingSpear extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingSpear", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronThrowingSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron ThrowingSpear (OffHand)", level = 1, xp = 50, input = [{ Item: new IronBar(), Quantity: 1 }], output = [{ Item: new IronThrowingSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronWarHammer extends SmithingRecipe {
    constructor(name = "Smith Iron WarHammer", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronWarHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronWarHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Iron WarHammer (OffHand)", level = 6, xp = 250, input = [{ Item: new IronBar(), Quantity: 2 }], output = [{ Item: new IronWarHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithIronWarHammer2H extends SmithingRecipe {
    constructor(name = "Smith Iron WarHammer 2H", level = 9, xp = 250, input = [{ Item: new IronBar(), Quantity: 4 }], output = [{ Item: new IronWarHammer2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//steel
export function steelSmithRecipes() {
    var recipes = [new SmithSteelAxe(), new SmithSteelAxeOffHand(), new SmithSteelAxe2H(), new SmithSteelBarrel(), new SmithSteelBoots(), new SmithSteelDagger(), new SmithSteelDaggerOffHand(), new SmithSteelDart(), new SmithSteelDartOffHand(),
    new SmithSteelGauntlets(), new SmithSteelHalberd(), new SmithSteelHatchet(), new SmithSteelHelmet(), new SmithSteelLegs(), new SmithSteelLimbs(), new SmithSteelMace(), new SmithSteelMaceOffHand(),
    new SmithSteelPickaxe(), new SmithSteelRapier(), new SmithSteelRapierOffHand(), new SmithSteelScimitar(), new SmithSteelScimitarOffHand(), new SmithSteelShortSpear(), new SmithSteelShortSpearOffHand(), new SmithSteelSpear(),
    new SmithSteelShield(), new SmithSteelSword(), new SmithSteelSwordOffHand(), new SmithSteelSword2H(), new SmithSteelTools(), new SmithSteelTorso(),
    new SmithSteelThrowingAxe(), new SmithSteelThrowingAxeOffHand(), new SmithSteelThrowingHammer(), new SmithSteelThrowingHammerOffHand(), new SmithSteelThrowingKnife(), new SmithSteelThrowingKnifeOffHand(), new SmithSteelThrowingSpear(), new SmithSteelThrowingSpearOffHand(),
    new SmithSteelWarHammer(), new SmithSteelWarHammerOffHand(), new SmithSteelWarHammer2H()]
    return recipes;
}
//armor
export class SmithSteelBoots extends SmithingRecipe {
    constructor(name = "Smith Steel Boots", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelBoots(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelGauntlets extends SmithingRecipe {
    constructor(name = "Smith Steel Gauntlets", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelGauntlets(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelHelmet extends SmithingRecipe {
    constructor(name = "Smith Steel Helmet", level = 12, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelHelmet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelLegs extends SmithingRecipe {
    constructor(name = "Smith Steel Legs", level = 13, xp = 300, input = [{ Item: new SteelBar(), Quantity: 3 }], output = [{ Item: new SteelLegs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelShield extends SmithingRecipe {
    constructor(name = "Smith Steel Shield", level = 13, xp = 300, input = [{ Item: new SteelBar(), Quantity: 3 }], output = [{ Item: new SteelShield(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelTorso extends SmithingRecipe {
    constructor(name = "Smith Steel Torso", level = 13, xp = 500, input = [{ Item: new SteelBar(), Quantity: 5 }], output = [{ Item: new SteelTorso(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//processed
export class SmithSteelBarrel extends SmithingRecipe {
    constructor(name = "Smith Steel Barrel", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelBarrel(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelLimbs extends SmithingRecipe {
    constructor(name = "Smith Steel Limbs", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelLimbs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//new Tools
export class SmithSteelHatchet extends SmithingRecipe {
    constructor(name = "Smith Steel Hatchet", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelHatchet(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelPickaxe extends SmithingRecipe {
    constructor(name = "Smith Steel PickAxe", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelPickAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelTools extends SmithingRecipe {
    constructor(name = "Smith Steel Tools", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelTools(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//weapon
export class SmithSteelAxe extends SmithingRecipe {
    constructor(name = "Smith Steel Axe", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Axe (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelAxe2H extends SmithingRecipe {
    constructor(name = "Smith Steel Axe 2H", level = 13, xp = 100, input = [{ Item: new SteelBar(), Quantity: 4 }], output = [{ Item: new SteelAxe2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelDagger extends SmithingRecipe {
    constructor(name = "Smith Steel Dagger", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelDagger(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelDaggerOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Dagger (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelDaggerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelDart extends SmithingRecipe {
    constructor(name = "Smith Steel Dart", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelDart(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelDartOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Dart (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelDartOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelHalberd extends SmithingRecipe {
    constructor(name = "Smith Steel Halberd", level = 13, xp = 100, input = [{ Item: new SteelBar(), Quantity: 4 }], output = [{ Item: new SteelHalberd(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelMace extends SmithingRecipe {
    constructor(name = "Smith Steel Mace", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelMace(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelMaceOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Mace (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelMaceOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelRapier extends SmithingRecipe {
    constructor(name = "Smith Steel Rapier", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelRapier(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelRapierOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Rapier (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelRapierOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelScimitar extends SmithingRecipe {
    constructor(name = "Smith Steel Scimitar", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelScimitar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelScimitarOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Scimitar (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelScimitarOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelShortSpear extends SmithingRecipe {
    constructor(name = "Smith Steel Short Spear", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelShortSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelShortSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Short Spear (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelShortSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelSpear extends SmithingRecipe {
    constructor(name = "Smith Steel Spear", level = 13, xp = 100, input = [{ Item: new SteelBar(), Quantity: 4 }], output = [{ Item: new SteelSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelSword extends SmithingRecipe {
    constructor(name = "Smith Steel Sword", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelSword(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelSwordOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel Sword (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelSwordOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelSword2H extends SmithingRecipe {
    constructor(name = "Smith Steel Sword 2H", level = 13, xp = 100, input = [{ Item: new SteelBar(), Quantity: 4 }], output = [{ Item: new SteelSword2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingAxe extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingAxe", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingAxe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingAxeOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingAxe (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingAxeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingHammer extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingHammer", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingHammer (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingKnife extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingKnife", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingKnife(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingKnifeOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingKnife (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingKnifeOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingSpear extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingSpear", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingSpear(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelThrowingSpearOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel ThrowingSpear (OffHand)", level = 10, xp = 100, input = [{ Item: new SteelBar(), Quantity: 1 }], output = [{ Item: new SteelThrowingSpearOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelWarHammer extends SmithingRecipe {
    constructor(name = "Smith Steel WarHammer", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelWarHammer(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelWarHammerOffHand extends SmithingRecipe {
    constructor(name = "Smith Steel WarHammer (OffHand)", level = 11, xp = 200, input = [{ Item: new SteelBar(), Quantity: 2 }], output = [{ Item: new SteelWarHammerOffHand(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmithSteelWarHammer2H extends SmithingRecipe {
    constructor(name = "Smith Steel WarHammer 2H", level = 13, xp = 100, input = [{ Item: new SteelBar(), Quantity: 4 }], output = [{ Item: new SteelWarHammer2H(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//smelting
export class SmeltingRecipe extends SmithingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Smelt"
    }
}
export class SmeltBronzeBar extends SmeltingRecipe {
    constructor(name = "Smelt Bronze Bar", level = 1, xp = 25, input = [{ Item: new CopperOre(), Quantity: 1 }, { Item: new TinOre(), Quantity: 1 }], output = [{ Item: new BronzeBar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmeltIronBar extends SmeltingRecipe {
    constructor(name = "Smelt Iron Bar", level = 5, xp = 50, input = [{ Item: new IronOre(), Quantity: 2 }], output = [{ Item: new IronBar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class SmeltSteelBar extends SmeltingRecipe {
    constructor(name = "Smelt Steel Bar", level = 10, xp = 100, input = [{ Item: new IronOre(), Quantity: 1 }, { Item: new CoalOre(), Quantity: 2 }], output = [{ Item: new SteelBar(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//gathering
//farming
export function farmingRecipes() {
    var farm = [new HarvestBeeHive(), new HarvestWheat(), new MilkCow(), new ShearSheep()]
    return farm;
}
export class FarmingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Farming"; this.Verb = "Farm"
    }
}
export class HarvestBeeHive extends FarmingRecipe {
    constructor(name = "Harvest BeeHive", level = 1, xp = 5, input = [{ Item: new Bucket(), Quantity: 1 }], output = [{ Item: new Beeswax(), Quantity: 1 }, { Item: new Honey(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Harvest"
    }
}
export class MilkCow extends FarmingRecipe {
    constructor(name = "Milk Cow", level = 1, xp = 5, input = [{ Item: new Bucket(), Quantity: 1 }], output = [{ Item: new Milk(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Milk"
    }
}
export class ShearSheep extends FarmingRecipe {
    constructor(name = "Shear Sheep", level = 1, xp = 5, input = [], output = [{ Item: new WoolCloth(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Shears(); this.Verb = "Shear"
    }
}
export class HarvestCrop extends FarmingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Harvest"
    }
}
export class HarvestCabbage extends HarvestCrop {
    constructor(name = "Harvest Cabbage", level = 1, xp = 5, input = [], output = [{ Item: new Cabbage(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Knife()
    }
}
export class HarvestCarrot extends HarvestCrop {
    constructor(name = "Harvest Carrot", level = 1, xp = 5, input = [], output = [{ Item: new Carrot(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Trowel()
    }
}
export class HarvestWheat extends HarvestCrop {
    constructor(name = "Harvest Wheat", level = 1, xp = 5, input = [], output = [{ Item: new Wheat(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Sickle()
    }
}
export class HarvestPotato extends HarvestCrop {
    constructor(name = "Harvest Potato", level = 1, xp = 5, input = [], output = [{ Item: new RawPotato(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Tool = new Spade()
    }
}
//fishing
export function fishingRecipes() {
    var fish = [new FishCrayFish(), new FishFish(), new FishTrout()]
    return fish;
}
export class FishingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Fishing"; this.Verb = "Fish"
    }
}
export class RodFishing extends FishingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Tool = new FishingRod();
    }
}
export class FishCrayFish extends RodFishing {
    constructor(name = "Fish Crayfish", level = 1, xp = 25, input = [], output = [{ Item: new RawCrayFish(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FishFish extends RodFishing {
    constructor(name = "Fish Fish", level = 1, xp = 25, input = [], output = [{ Item: new RawFish(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class FishTrout extends RodFishing {
    constructor(name = "Fish Trout", level = 5, xp = 50, input = [], output = [{ Item: new RawTrout(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//herblore
export function herbLoreRecipes() {
    var herb = [new GatherAloe(), new GatherMilkThistle()]
    return herb;
}
export class HerbloreRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Herblore"; this.Verb = "Gather"
    }
}
export class GatherAloe extends HerbloreRecipe {
    constructor(name = "Gather Aloe", level = 1, xp = 25, input = [], output = [{ Item: new Aloe(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class GatherMilkThistle extends HerbloreRecipe {
    constructor(name = "Gather Milk Thistle", level = 1, xp = 25, input = [], output = [{ Item: new MilkThistle(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//hunting
export function huntingRecipes() {
    var hunt = [new HuntRabbits()]
    return hunt;
}
export function huntingRecipesForest() {
    var hunt = [new HuntRabbits()]
    return hunt;
}
export function huntingRecipesSwamp() {
    var hunt = [new HuntNewts()]
    return hunt;
}
export class HuntingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Hunting"; this.Verb = "Hunt"
    }
}
export class AnimalDropGatheringRecipe extends HuntingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Gather"
    }
}
export class GatherBlackFeathers extends AnimalDropGatheringRecipe {
    constructor(name = "Gather Feathers", level = 1, xp = 5, input = [], output = [{ Item: new BlackFeather(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Gather"
    }
}
export class TrapHunting extends HuntingRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Verb = "Verb"; this.Tool = new Trap()
    }
}
export class HuntNewts extends TrapHunting {
    constructor(name = "Hunt Newts", level = 1, xp = 25, input = [], output = [{ Item: new EyeOfNewt(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class HuntRabbits extends TrapHunting {
    constructor(name = "Hunt Rabbits", level = 1, xp = 25, input = [], output = [{ Item: new RawRabbitMeat(), Quantity: 1 }, { Item: new RabbitFur(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//mining
export function miningRecipes() {
    var mine = [new MineCoalOre(), new MineCopperOre(), new MineTinOre(), new MineIronOre(), new MineSalt(), new MineSaltpeter(), new MineSulphur()]
    return mine;
}
export class MiningRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Mining"; this.Tool = new PickAxe(); this.Verb = "Mine"
    }
}
export class MineCoalOre extends MiningRecipe {
    constructor(name = "Mine Coal", level = 10, xp = 100, input = [], output = [{ Item: new CoalOre(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineCopperOre extends MiningRecipe {
    constructor(name = "Mine Copper Ore", level = 1, xp = 25, input = [], output = [{ Item: new CopperOre(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineIronOre extends MiningRecipe {
    constructor(name = "Mine Iron Ore", level = 5, xp = 50, input = [], output = [{ Item: new IronOre(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineSalt extends MiningRecipe {
    constructor(name = "Mine Salt", level = 1, xp = 5, input = [], output = [{ Item: new Salt(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineSaltpeter extends MiningRecipe {
    constructor(name = "Mine Saltpeter", level = 1, xp = 50, input = [], output = [{ Item: new SaltPeter(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineSulphur extends MiningRecipe {
    constructor(name = "Mine Sulphur", level = 5, xp = 50, input = [], output = [{ Item: new Sulphur(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class MineTinOre extends MiningRecipe {
    constructor(name = "Mine Tin Ore", level = 1, xp = 25, input = [], output = [{ Item: new TinOre(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//new Woodcutting
export function woodcuttingRecipes() {
    var wood = [new CutOakWood(), new CutWillowWood(), new CutWood()]
    return wood;
}
export class WoodcuttingRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Woodcutting"; this.Tool = new Hatchet(); this.Verb = "Chop"
    }
}
export class CutOakWood extends WoodcuttingRecipe {
    constructor(name = "Cut Oak Wood", level = 5, xp = 100, input = [], output = [{ Item: new OakLogs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class CutWillowWood extends WoodcuttingRecipe {
    constructor(name = "Cut Willow Wood", level = 10, xp = 400, input = [], output = [{ Item: new WillowLogs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class CutWood extends WoodcuttingRecipe {
    constructor(name = "Cut Wood", level = 1, xp = 25, input = [], output = [{ Item: new WoodLogs(), Quantity: 1 }], failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//magic
//restoration
export function restorationRecipes() {
    var all = [new BuryBones(), new BuryEctoplasm(), new BurySkull()]
    return all;
}
export class RestorationRecipe extends SkillRecipe {
    constructor(name, level, xp, input, output, failure) {
        super(name, level, xp, input, output, failure)
        this.Skill = "Restoration"; this.Verb = "Consecrate"
    }
}
export class BuryBones extends RestorationRecipe {
    constructor(name = "Consecrate Bones", level = 1, xp = 5, input = [{ Item: new Bones(), Quantity: 1 }], output = null, failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BuryEctoplasm extends RestorationRecipe {
    constructor(name = "Consecrate Ectoplasm", level = 1, xp = 5, input = [{ Item: new Ectoplasm(), Quantity: 1 }], output = null, failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
export class BurySkull extends RestorationRecipe {
    constructor(name = "Consecrate Skull", level = 1, xp = 5, input = [{ Item: new Skull(), Quantity: 1 }], output = null, failure = null) {
        super(name, level, xp, input, output, failure)
    }
}
//utility