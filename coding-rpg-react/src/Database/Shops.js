import {club, dagger, healingPotion } from "./Items"

export function testShop()
{
    var testShop ={Name: "Test Shop", Inventory: [club(), dagger(), healingPotion()]};
    return testShop
}