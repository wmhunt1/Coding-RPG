import { noDamage, poisonDamage } from "./DamageTypesDB";

export function noCondition() {
    var noCondition = { Name: "None", Symbol: "", Type: "None",Attribute: "", Damage: 0, Source: null }
    return noCondition
}
export function poisonCondition(damage, duration) {
    var poison = { Name: "Poisoned", Symbol: "PSN", Type: "Damage",Attribute: "Con", Duration: duration, RemainingDuration: duration, DamageType: poisonDamage(), Damage: damage, Source: null }
    return poison;
}
export function sleepCondition(damage, duration) {
    var sleep = { Name: "Sleep", Symbol: "SLP", Type: "Skip", Attribute: "Wlp",Duration: duration, RemainingDuration: duration, DamageType: noDamage(), Damage: 0, Source: null }
    return sleep;
}
export function webCondition(damage, duration) {
    var web = { Name: "Webed", Symbol: "SLP", Type: "Skip",Attribute: "Str", Duration: duration, RemainingDuration: duration, DamageType: noDamage(), Damage: 0, Source: null }
    return web;
}