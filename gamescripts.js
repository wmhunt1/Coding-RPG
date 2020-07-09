var hero = 
{
    basics = 
    {
        current_hp: 10,
        max_HP: 10,
        current_ap: 1,
        max_AP: 1,
        current_ap: 2,
        max_SP: 2,
        player_atk: 1,
        player_def: 1,
        speed: 0,
        xp: 0,
        xp_to_next_level: 100,
    },
    stats = 
    {
        current_hp: 10,
        max_HP: 10,
        current_ap: 1,
        max_AP: 1,
        current_ap: 2,
        max_SP: 2,
        player_atk: 1,
        player_def: 1,
        speed: 0,
        xp: 0,
        xp_to_next_level: 100,
    },
    equipment =
    {
        head_slot: "hat",
        head_armor: 0,
        torso_slot: "shirt",
        torso_armor: 0,
        leg_slot: "pants",
        leg_armor: 0,
        hand_slot: "gloves",
        hand_armor: 0,
        feet_slot: "boots",
        feet_armor: 0,
        total_armor: 0,
        melee_wep: "stick",
        melee_wep_dmg: 1,
        ranged_wep: "rock",
        ranged_wep_dmg: 1,
        magic_wep: "stick",
        magic_wep_dmg: 1,
    },
    inventory =
    {
        item =
        {
            name,
            description,
            effect,
            value,
        }
    },
    skills =
    {
        skill_level_array = ["untrained", "apprentice", "journeyman", "expert", "master"],
        crafting: skill_level_array[0],
        gathering: skill_level_array[0],
        magic: skill_level_array[0],
        marksman: skill_level_array[0],
        melee: skill_level_array[0],
        prayer: skill_level_array[0],
        speech: skill_level_array[0],
        survival: skill_level_array[0],
        thievery: skill_level_array[0],     
    },
    spells_known =
    {
        spell_name_array = [],
        spell_effect_array = []
    }
}
// hero.basics =
// {
//     player_name: "Char",
//     player_gender: "M/F",
//     player_race: "Human",
//     player_class: "Freelancer",
//     player_level: 1
// }
// hero.stats =
// {
//     current_hp: 10,
//     max_HP: 10,
//     current_ap: 1,
//     max_AP: 1,
//     current_ap: 2,
//     max_SP: 2,
//     player_atk: 1,
//     player_def: 1,
//     speed: 0,
//     xp: 0,
//     xp_to_next_level: 100,
// }
// hero.equipment = 
// {
//     head_slot: "hat",
//     head_armor: 0,
//     torso_slot: "shirt",
//     torso_armor: 0,
//     leg_slot: "pants",
//     leg_armor: 0,
//     hand_slot: "gloves",
//     hand_armor: 0,
//     feet_slot: "boots",
//     feet_armor: 0,
//     total_armor: 0,
//     melee_wep: "stick",
//     melee_wep_dmg: 1,
//     ranged_wep: "rock",
//     ranged_wep_dmg: 1,
//     magic_wep: "stick",
//     magic_wep_dmg: 1,
// }
// hero.inventory =
// {

// }
// hero.skills = 
// {
//     skill_level_array = ["untrained", "apprentice", "journeyman", "expert", "master"],
//     crafting: skill_level_array[0],
//     gathering: skill_level_array[0],
//     magic: skill_level_array[0],
//     marksman: skill_level_array[0],
//     melee: skill_level_array[0],
//     prayer: skill_level_array[0],
//     speech: skill_level_array[0],
//     survival: skill_level_array[0],
//     thievery: skill_level_array[0],     
// }