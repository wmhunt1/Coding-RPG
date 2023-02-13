import { giantRat} from "./CharactersDB"
import { goblinMine } from "./DungeonsDB"
import { lessonsFromFaldan } from "./ItemsDB"

export function dwarvenMineGoblinQuest() {
    var dwarvenMineGoblinQuest = { Name: "Goblin Slayer", Status: "In Progress", Type: "Dungeon", Description: "Clear out the goblins in the Dwarven Mine to rescue the miners", Target: goblinMine(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 50, Items: [] } }
    return dwarvenMineGoblinQuest
}
export function ratCellarQuest() {
    var ratCellarQuest = { Name: "Rats in The Cellar", Status: "In Progress", Type: "Kill", Description: "Kill the Giant Rat in the cellar", Target: giantRat(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: lessonsFromFaldan(), Quantity: 1 }] } }
    return ratCellarQuest
}