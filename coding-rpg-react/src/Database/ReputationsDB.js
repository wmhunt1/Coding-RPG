import { daleTownFaction, whiteScalesFlockFaction } from "./FactionsDB";

export function daleTownReputation() {
    var rep = { Name: "Dale Town Reputation", Faction: daleTownFaction(), PositiveRep: 0, NegativeRep: 0, Reputation: "Neutral" }
    return rep;
}
export function whiteScalesFlockReputation() {
    var rep = { Name: "Whitescale's Flock Reputation", Faction: whiteScalesFlockFaction(), PositiveRep: 0, NegativeRep: 0, Reputation: "Neutral" }
    return rep;
}
