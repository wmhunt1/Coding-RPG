import { noDamage, poisonDamage } from "./DamageTypesDB";

export function noCondition() {
    var noCondition = { Name: "None", Symbol: "", Type: "None", Damage: 0, Source: null }
    return noCondition
}
export function poisonCondition(damage, duration) {
    var poison = { Name: "Poisoned", Symbol: "PSN", Type: "Damage", Duration: duration, RemainingDuration: duration, DamageType: poisonDamage(), Damage: damage, Source: null }
    return poison;
}
export function sleepCondition(damage, duration) {
    var sleep = { Name: "Sleep", Symbol: "SLP", Type: "Skip", Duration: duration, RemainingDuration: duration, DamageType: noDamage(), Damage: 0, Source: null }
    return sleep;
}
export function webCondition(damage, duration) {
    var web = { Name: "Webed", Symbol: "SLP", Type: "Skip", Duration: duration, RemainingDuration: duration, DamageType: noDamage(), Damage: 0, Source: null }
    return web;
}