import {rat} from "./CharactersDB"
import { cheese } from "./ItemsDB"

export function testQuest()
{
    var testQuest = {Name: "Test Quest", Status: "In Progress", Type: "Kill" , Description: "Kill 3 Rats", Target: rat(), Objective: 3, ObjectiveProgress: 0, Reward: {Gold: 0, Items:[{Item: cheese(), Quantity: 1}]}}
    return testQuest
}