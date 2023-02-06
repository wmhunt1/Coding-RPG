import { poisonDamage } from "./DamageTypes";

export function noCondition() {
    var noCondition = { Name: "None", Symbol: "", Type: "None", Damage: 0 }
    return noCondition
}
export function poisonCondition(damage) {
    var poison = { Name: "Poisoned", Symbol: "PSN", Type: "Damage", DamageType: poisonDamage(), Damage: damage }
    return poison;
}
export function sleepCondition() {
    var sleep = { Name: "Sleep", Symbol: "SLP", Type: "Skip", Damage: 0 }
    return sleep;
}