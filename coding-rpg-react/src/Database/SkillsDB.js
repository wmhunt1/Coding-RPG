export function allSkills() {
    var allSkills = [new AlchemySkill(), new AcrobaticsSkill(), new AlterationSkill(), new AthleticsSkill(), new BarterSkill(), new BlockSkill(),
    new ConjurationSkill(), new ConstructionSkill(), new CookingSkill(), new CraftingSkill(), new DestructionSkill(), new DivinationSkill(),
    new EngineeringSkill(), new EnchantingSkill(), new FarmingSkill(), new FiremakingSkill(), new FishingSkill(), new FletchingSkill(), new HeavyArmorSkill(),
    new HeavyWeaponSkill(), new HerbloreSkill(), new HuntingSkill(), new IllusionSkill(), new LightArmorSkill(), new LightWeaponSkill(), new LockpickingSkill(),
    new MiningSkill(), new PersuationSkill(), new RangedSkill(), new RestorationSkill(), new SmithingSkill(), new StealthSkill(), new SurvivalSkill(),
    new UnArmedSkill(), new UnArmoredSkill(), new SenseSkill(), new WoodcuttingSkill()]
    return allSkills
}
export class Skill {
    Name; Type; Level = 1; CurrentXP = 1; MaxXP = 50;
    constructor(name, type) {
        this.Name = name;
        this.Type = type;
    }
}
//armor
export class ArmorSkill extends Skill {
    constructor(name, type = "Armor") {
        super(name, type)
    }
}
export class BlockSkill extends ArmorSkill {
    constructor(name) {
        super(name = "Block")
    }
}
export class HeavyArmorSkill extends ArmorSkill {
    constructor(name) {
        super(name = "Heavy Armor")
    }
}
export class LightArmorSkill extends ArmorSkill {
    constructor(name) {
        super(name = "Light Armor")
    }
}
export class UnArmoredSkill extends ArmorSkill {
    constructor(name) {
        super(name = "UnArmored")
    }
}

//crafting skills
export class ArtisanSkill extends Skill {
    constructor(name, type = "Crafting") {
        super(name, type)
    }
}
export class AlchemySkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Alchemy")
    }
}
export class ConstructionSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Construction")
    }
}
export class CookingSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Cooking")
    }
}
export class CraftingSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Crafting")
    }
}
export class EngineeringSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Engineering")
    }
}
export class FiremakingSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Firemaking")
    }
}
export class FletchingSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Fletching")
    }
}
export class SmithingSkill extends ArtisanSkill {
    constructor(name) {
        super(name = "Smithing")
    }
}
//gathering skills
export class GatheringSkill extends Skill {
    constructor(name, type = "Gathering") {
        super(name, type)
    }
}
export class FarmingSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Farming")
    }
}
export class FishingSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Fishing")
    }
}
export class HerbloreSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Herblore")
    }
}
export class HuntingSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Hunting")
    }
}
export class MiningSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Mining")
    }
}
export class WoodcuttingSkill extends GatheringSkill {
    constructor(name) {
        super(name = "Woodcutting")
    }
}
//knowledge skills
//magic skills
export class MagicSkill extends Skill {
    constructor(name, type = "Magic") {
        super(name, type)
    }
}
export class AlterationSkill extends MagicSkill {
    constructor(name = "Alteration") {
        super(name)
    }
}
export class ConjurationSkill extends MagicSkill {
    constructor(name = "Conjuration") {
        super(name)
    }
}
export class DestructionSkill extends MagicSkill {
    constructor(name = "Destruction") {
        super(name)
    }
}
export class DivinationSkill extends MagicSkill {
    constructor(name = "Divination") {
        super(name)
    }
}
export class EnchantingSkill extends MagicSkill {
    constructor(name = "Enchanting") {
        super(name)
    }
}
export class IllusionSkill extends MagicSkill {
    constructor(name = "Illusion") {
        super(name)
    }
}
export class RestorationSkill extends MagicSkill {
    constructor(name = "Restoration") {
        super(name)
    }
}
//utility skills
export class UtilitySkill extends Skill {
    constructor(name, type = "Utility") {
        super(name, type)
    }
}
export class AcrobaticsSkill extends UtilitySkill {
    constructor(name = "Acrobatics") {
        super(name)
    }
}
export class AthleticsSkill extends UtilitySkill {
    constructor(name = "Athletics") {
        super(name)
    }
}
export class BarterSkill extends UtilitySkill {
    constructor(name = "Barter") {
        super(name)
    }
}
export class LockpickingSkill extends UtilitySkill {
    constructor(name = "Lockpicking") {
        super(name)
    }
}
export class PersuationSkill extends UtilitySkill {
    constructor(name = "Persuation") {
        super(name)
    }
}
export class SenseSkill extends UtilitySkill {
    constructor(name = "Sense") {
        super(name)
    }
}
export class StealthSkill extends UtilitySkill {
    constructor(name = "Stealth") {
        super(name)
    }
}
export class SurvivalSkill extends UtilitySkill {
    constructor(name = "Survival") {
        super(name)
    }
}
//weapon skills
export class WeaponSkill extends Skill {
    constructor(name, type = "Weapon") {
        super(name, type)
    }
}
export class HeavyWeaponSkill extends WeaponSkill {
    constructor(name = "Heavy Weapon") {
        super(name)
    }
}
export class LightWeaponSkill extends WeaponSkill {
    constructor(name = "Light Weapon") {
        super(name)
    }
}
export class RangedSkill extends WeaponSkill {
    constructor(name = "Ranged") {
        super(name)
    }
}
export class UnArmedSkill extends WeaponSkill {
    constructor(name = "UnArmed") {
        super(name)
    }
}