import { BatGuano, BearFur, CowLeather, Egg, Feather, IronDagger, IronDaggerOffHand, IronAxe2H, LeatherBoots, LeatherCowl, LeatherGloves, LeatherLegs, LeatherTorso, OakShortBow, RatTail, RawBeef, RawChicken, RawRatMeat,Skull, SpiderSilkCloth, WolfFur, WoodenClub, IronAxe, IronShield, OakStaff, WoodenShield, Ectoplasm, Bones, BronzeHelmet, BronzeMace, BronzeShield } from "./ItemsDB";

export class Drops {
    Items;
    constructor(items = []) {
        this.Items = items;
    }
}
export class BeastDrops extends Drops {
    constructor(items = [...new Drops().Items]) {
        super(items)
    }
}
export class BatDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new BatGuano()]) {
        super(items)
    }
}
export class BearDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new BearFur()]) {
        super(items)
    }
}
export class ChickenDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new Egg(), new Feather(), new RawChicken()]) {
        super(items)
    }
}
export class CowDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new CowLeather(), new RawBeef()]) {
        super(items)
    }
}
export class RatDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new RawRatMeat(), new RatTail()]) {
        super(items)
    }
}
export class SpiderDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new SpiderSilkCloth()]) {
        super(items)
    }
}
export class WolfDrops extends BeastDrops {
    constructor(items = [...new BeastDrops().Items, new WolfFur()]) {
        super(items)
    }
}
export class HumanoidDrops extends Drops {
    constructor(items = [...new Drops().Items]) {
        super(items)
    }
}
export class BanditDrops extends HumanoidDrops {
    constructor(items = [...new HumanoidDrops().Items, new LeatherBoots(), new LeatherCowl(), new LeatherGloves(), new LeatherLegs(), new LeatherTorso(), new IronDagger(), new IronDaggerOffHand(), new OakShortBow(), new IronAxe2H()]) {
        super(items)
    }
}
export class GiantDrops extends HumanoidDrops {
    constructor(items = [...new HumanoidDrops().Items, new WoodenClub()]) {
        super(items)
    }
}
export class GnollDrops extends HumanoidDrops {
    constructor(items = [...new HumanoidDrops().Items, new IronAxe(), new IronShield(), new OakStaff()]) {
        super(items)
    }
}
export class GoblinDrops extends HumanoidDrops {
    constructor(items = [new HumanoidDrops().Items, new WoodenClub(), new WoodenShield()]) {
        super(items)
    }
}
export class UndeadDrops extends Drops {
    constructor(items = [...new Drops().Items]) {
        super(items)
    }
}
export class GhostDrops extends UndeadDrops
{
    constructor(items = [...new UndeadDrops().Items, new Ectoplasm()]) {
        super(items)
    }
}
export class SkeletonDrops extends UndeadDrops
{
    constructor(items = [...new UndeadDrops().Items, new Bones(), new Skull()]) {
        super(items)
    }
}
export class LowLevelSkeletonDrops extends SkeletonDrops
{
    constructor(items = [...new SkeletonDrops().Items, new BronzeHelmet(), new BronzeMace(), new BronzeShield()]) {
        super(items)
    }
}