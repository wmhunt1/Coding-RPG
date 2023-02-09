import { dreamingWorkerInnDialogue, innDialogue, testDialogue } from "./Dialogues";
import {ale, bronzeDagger, club, dagger, healingPotion } from "./Items"

//inns
export function dreamingWorkerInn(hero)
{
    var inn = {Name: "Dreaming Worker Inn", Dialogue: dreamingWorkerInnDialogue(hero), Inventory:[ale()]};
    return inn;
}
export function innShop(hero)
{
    var inn = {Name: "Inn", Dialogue: innDialogue(hero) , Inventory:[ale()]};
    return inn;
}
//smiths
export function forgeHeartSmithy(hero)
{
    var forgeHeartSmithy = {Name: "Forgeheart Smithy", Dialogue:null, Inventory:[bronzeDagger()]};
    return forgeHeartSmithy
}
//tests
export function testShop(hero)
{
    var testShop ={Name: "Test Shop", Dialogue: testDialogue(hero), Inventory: [club(), dagger(), healingPotion()]};
    return testShop
}