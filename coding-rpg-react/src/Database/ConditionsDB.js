import { poisonDamage } from "./DamageTypesDB";

export function noCondition() {
    var noCondition = { Name: "None", Symbol: "", Type: "None", Damage: 0, Source: null }
    return noCondition
}
export function poisonCondition(damage) {
    var poison = { Name: "Poisoned", Symbol: "PSN", Type: "Damage", DamageType: poisonDamage(), Damage: damage, Source: null }
    return poison;
}
export function sleepCondition() {
    var sleep = { Name: "Sleep", Symbol: "SLP", Type: "Skip", Damage: 0, Source: null }
    return sleep;
}