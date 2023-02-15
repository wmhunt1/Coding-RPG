import { AddToCharacterLog } from "./CharacterScripts";

export function FindRelationship(hero, rel) {
    var index = null
    if (hero.Relationships.find(x => x.Name === rel.Name)) {
        index = hero.Relationships.findIndex(x => x.Name === rel.Name);
    }
    return index
}
export function UpdateRelationship(hero, rel) {
    var index = FindRelationship(hero, rel)
    if (hero.Relationships[index].Approval > hero.Relationships[index].DisApproval) {
        hero.Relationships[index].Relationship = "Friend"
    }
    else if (hero.Relationships[index].Approval < hero.Relationships[index].DisApproval) {
        hero.Relationships[index].Relationship = "Rival"
    }
    else {
        hero.Relationships[index].Relationship = "Acquaintance"
    }
    AddToCharacterLog(hero, hero.Name + " is now " + hero.Relationships[index].Relationship + "s with " + rel.Name)
}
export function IncreaseRelationship(hero, rel, inc) {
    var index = FindRelationship(hero, rel)
    if (index === null) {
        hero.Relationships.push(rel)
        var index2 = FindRelationship(hero, rel)
        hero.Relationships[index2].Approval += inc;
    }
    else {
        hero.Relationships[index].Approval += inc;
    }
    var index3 = FindRelationship(hero, rel)
    AddToCharacterLog(hero, hero.Name + " gains " + inc + " affinity with " + rel.Name)
    UpdateRelationship(hero, hero.Relationships[index3])
}
export function DecreaseRelationship(hero, rel, dec) {
    var index = FindRelationship(hero, rel)
    if (index !== null) {
        hero.Relationships.push(rel)
        var index2 = FindRelationship(hero, rel)
        hero.Relationships[index2].DisApproval -= dec;
    }
    else {
        hero.Relationships[index].DisApproval -= dec;
    }
    var index3 = FindRelationship(hero, rel)
    AddToCharacterLog(hero, hero.Name + " loses " + dec + " affinity with " + rel.Name)
    UpdateRelationship(hero, hero.Relationships[index3])
}
export function FindRepuation(hero, rep) {
    var index = null
    if (hero.Reputation.find(x => x.Faction === rep.Faction)) {
        index = hero.Reputation.findIndex(x => x.Faction === rep.Faction);
    }
    return index
}
export function UpdateReputation(hero, rep) {
    var index = FindRepuation(hero, rep)
    if (hero.Reputation[index].PositiveRep > hero.Reputation[index].NegativeRep) {
        hero.Reputation[index].Reputation = "Liked"
    }
    else if (hero.Reputation[index].PositiveRep < hero.Reputation[index].NegativeRep) {
        hero.Reputation[index].Reputation = "DisLiked"
    }
    else {
        hero.Reputation[index].Reputation = "Neutral"
    }
    AddToCharacterLog(hero, hero.Name + " is now " + hero.Reputation[index].Reputation + " with " + rep.Name)
}
export function IncreaseReputation(hero, rep, inc) {
    var index = FindRepuation(hero, rep)
    if (index === null) {
        hero.Reputation.push(rep)
        var index2 = FindRepuation(hero, rep)
        hero.Reputation[index2].PositiveRep += inc;
    }
    else {
        hero.Reputation[index].PositiveRep += inc;
    }
    var index3 = FindRepuation(hero, rep)
    AddToCharacterLog(hero, hero.Name + " gains " + inc + " reputation with " + rep.Name)
    UpdateReputation(hero, hero.Reputation[index3])
}
export function DecreaseReputation(hero, rep, dec) {
    var index = FindRepuation(hero, rep)
    if (index !== null) {
        hero.Reputation.push(rep)
        var index2 = FindRepuation(hero, rep)
        hero.Reputation[index2].NegativeRep -= dec;
    }
    else {
        hero.Reputation[index].NegativeRep -= dec;
    }
    var index3 = FindRepuation(hero, rep)
    AddToCharacterLog(hero, hero.Name + " loses " + dec + " reputation with " + rep.Name)
    UpdateReputation(hero, hero.Reputation[index3])
}