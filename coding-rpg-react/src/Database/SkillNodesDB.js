import { alchemyRecipes, churnCookingRecipes, cookingRecipes, craftingRecipes, DrawWater, enchantingRecipes, engineeringRecipes, farmingRecipes, firemakingRecipes, fishingRecipes, fletchingRecipes, GatherBlackFeathers, HarvestPapyrus, herbLoreRecipes, huntingRecipes, huntingRecipesForest, huntingRecipesSwamp, MillWheat, MineSaltpeter, MineSulphur, miningRecipes, restorationRecipes, ShearSheep, smithingRecipes, woodcuttingRecipes } from "./SkillRecipesDB"

export class SkillNode {
    Hero; Name; Skill; Recipes;
    constructor(hero, name, skill, recipes) {
        this.Hero = hero; this.Name = name; this.Recipes = recipes;
        this.Skill = hero.SkillBook[hero.SkillBook.findIndex(x => x.Name === skill)]
    }
}
export class AlchemyNode extends SkillNode {
    constructor(hero, name = "Alchemy", skill = "Alchemy", recipes = alchemyRecipes()) {
        super(hero, name, skill, recipes)
    }
}
//cooking
export class CookNode extends SkillNode {
    constructor(hero, name = "Stove", skill = "Cooking", recipes = cookingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class ChurnNode extends CookNode {
    constructor(hero, name = "Churn", skill = "Cooking", recipes = churnCookingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class MillNode extends CookNode {
    constructor(hero, name = "Mill", skill = "Cooking", recipes = [new MillWheat()]) {
        super(hero, name, skill, recipes)
    }
}
export class WaterNode extends CookNode {
    constructor(hero, name = "Draw Water", skill = "Cooking", recipes = [new DrawWater()]) {
        super(hero, name, skill, recipes)
    }
}
export class WellNode extends WaterNode {
    constructor(hero, name = "Well", skill = "Cooking", recipes = [new DrawWater()]) {
        super(hero, name, skill, recipes)
    }
}
//crafting
export class CraftNode extends SkillNode {
    constructor(hero, name = "Crafting", skill = "Crafting", recipes = craftingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class SpinningNode extends CraftNode
{
    constructor(hero, name = "Spinning Wheel", skill = "Crafting", recipes = []) {
        super(hero, name, skill, recipes)
    }
}
export class EnchantNode extends SkillNode {
    constructor(hero, name = "Enchanting", skill = "Enchanting", recipes = enchantingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class EnginerNode extends SkillNode {
    constructor(hero, name = "Engineering Bench", skill = "Engineering", recipes = engineeringRecipes()) {
        super(hero, name, skill, recipes)
    }
}
//farming
export class FarmNode extends SkillNode {
    constructor(hero, name = "Farm", skill = "Farming", recipes = farmingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class PapyrusNode extends FarmNode {
    constructor(hero, name = "Papyrus", skill = "Farming", recipes = [new HarvestPapyrus()]) {
        super(hero, name, skill, recipes)
    }
}
export class SheepNode extends FarmNode {
    constructor(hero, name = "Flock of Sheep", skill = "Farming", recipes = [new ShearSheep()]) {
        super(hero, name, skill, recipes)
    }
}
export class FireNode extends SkillNode {
    constructor(hero, name = "Firemaking", skill = "Firemaking", recipes = firemakingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class FishNode extends SkillNode {
    constructor(hero, name = "Fishing Spot", skill = "Fishing", recipes = fishingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class FletchNode extends SkillNode {
    constructor(hero, name = "Fletching", skill = "Fletching", recipes = fletchingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class HerbNode extends SkillNode {
    constructor(hero, name = "Gather Herbs", skill = "Herblore", recipes = herbLoreRecipes()) {
        super(hero, name, skill, recipes)
    }
}
//hunting
export class HuntNode extends SkillNode {
    constructor(hero, name = "Hunting Spot", skill = "Hunting", recipes = huntingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class BlackFeatherNode extends HuntNode {
    constructor(hero, name = "Scattered Black Feathers", skill = "Hunting", recipes = [new GatherBlackFeathers()]) {
        super(hero, name, skill, recipes)
    }
}
export class ForestHuntNode extends HuntNode {
    constructor(hero, name = "Hunting Spot", skill = "Hunting", recipes = huntingRecipesForest()) {
        super(hero, name, skill, recipes)
    }
}
export class SwampHuntNode extends HuntNode {
    constructor(hero, name = "Hunting Spot", skill = "Hunting", recipes = huntingRecipesSwamp()) {
        super(hero, name, skill, recipes)
    }
}
//mining
export class MineNode extends SkillNode {
    constructor(hero, name = "Mine", skill = "Mining", recipes = miningRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class SaltPeterNode extends MineNode {
    constructor(hero, name = "Mine Saltpeter", skill = "Mining", recipes = [new MineSaltpeter()]) {
        super(hero, name, skill, recipes)
    }
}
export class SulphurNode extends MineNode {
    constructor(hero, name = "Mine Sulphur", skill = "Mining", recipes = [new MineSulphur()]) {
        super(hero, name, skill, recipes)
    }
}
//restoration
export class RestorationNode extends SkillNode {
    constructor(hero, name = "Altar", skill = "Restoration", recipes = restorationRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class SmithNode extends SkillNode {
    constructor(hero, name = "Anvil & Fore", skill = "Smithing", recipes = smithingRecipes()) {
        super(hero, name, skill, recipes)
    }
}
export class WoodNode extends SkillNode {
    constructor(hero, name = "Trees", skill = "Woodcutting", recipes = woodcuttingRecipes()) {
        super(hero, name, skill, recipes)
    }
}