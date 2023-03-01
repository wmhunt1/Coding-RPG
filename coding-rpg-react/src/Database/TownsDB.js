import { daleTownRumors } from "./DialoguesDB";
import { DaleTownFaction } from "./FactionsDB";
import { DaleTownReputation } from "./ReputationsDB";
import { DaleChapelShop, DreamingWorkerInn, ForgeHeartSmithy, JoeTheTradersTradingPost } from "./ShopsDB";
import { WellNode } from "./SkillNodesDB";

export class Town {
    Hero; Name; Faction; Rep; Dialogues; Dungeons; Encounters; Nodes; Shops;
    constructor(hero, name, faction, rep, dialogues, dungeons, encounters, nodes, shops) {
        this.Hero = hero; this.Name = name; this.Faction = faction; this.Rep = rep; this.Dialogues = dialogues; this.Dungeons = dungeons; this.Encounters = encounters; this.Nodes = nodes; this.Shops = shops;
    }
}
export class DaleTown extends Town {
    constructor(hero, name = "Dale Town", faction = new DaleTownFaction(), rep = new DaleTownReputation(), dialogues = [daleTownRumors(hero)], dungeons = [], encounters = [], nodes = [new WellNode(hero)], shops = [new DaleChapelShop(hero), new DreamingWorkerInn(hero), new ForgeHeartSmithy(hero), new JoeTheTradersTradingPost(hero)]) {
        super(hero, name, faction, rep, dialogues, dungeons, encounters, nodes, shops)
    }
}