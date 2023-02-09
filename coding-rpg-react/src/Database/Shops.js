import { testDialogue } from "./Dialogues";
import {club, dagger, healingPotion } from "./Items"

export function testShop(hero)
{
    var testShop ={Name: "Test Shop", Dialogue: testDialogue(hero), Inventory: [club(), dagger(), healingPotion()]};
    return testShop
}