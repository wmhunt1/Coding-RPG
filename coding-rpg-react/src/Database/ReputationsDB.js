import { DaleTownFaction, WhiteScalesFlockFaction } from "./FactionsDB";

export class Reputation {
    Name; Faction; PositiveRep = 0; NegativeRep = 0; Reputation = "Neutral";
    constructor(name, faction) {
        this.Name = name; this.Faction = faction;
    }
}
export class DaleTownReputation extends Reputation {
    constructor(name = "Dale Town Repuation", faction = new DaleTownFaction()) {
        super(name, faction)
    }
}
export class WhiteScalesFlockReputation extends Reputation {
    constructor(name = "Whitescale's Flock Reputation", faction = new WhiteScalesFlockFaction()) {
        super(name, faction)
    }
}
