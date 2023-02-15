import { daleTownFaction } from "./FactionsDB";

export function daleTownReputation() {
    var rep = { Name: "Dale Town Reputation", Faction: daleTownFaction(), PositiveRep: 0, NegativeRep: 0, Reputation: "Neutral" }
    return rep;
}