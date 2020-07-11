//player stats
var hero = 
{
    basics: 
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
    stats:
    {
        current_hp: 10,
        max_hp: 10,
        current_ap: 1,
        max_ap: 1,
        current_ap: 2,
        max_sp: 2,
        player_atk: 1,
        player_def: 1,
        speed: 0,
        xp: 0,
        xp_to_next_level: 100,
        player_buff: 0,
    },
    equipment:
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
        //total_armor: (hero.equipment.head_armor + hero.equipment.torso_armor + hero.equipment.leg_armor + hero.equipment.hand_armor + hero.equipment.feet_armor),
        //total_armor: (head_armor + torso_armor + leg_armor + hand_armor + feet_armor),
        melee_wep: "stick",
        melee_wep_dmg: 1,
        ranged_wep: "rock",
        ranged_wep_dmg: 1,
        magic_wep: "stick",
        magic_wep_dmg: 1,
    },
    inventory:
    {
        item:
        {
            name: "",
            description: "",
            effect: "",
            value: 0,
        }
    },
    skills:
    {
        skill_level_array: ["untrained", "apprentice", "journeyman", "expert", "master"],
        crafting: "untrained",
        gathering: "untrained",
        magic: "untrained",
        marksman: "untrained",
        melee: "untrained",
        prayer: "untrained",
        speech: "untrained",
        survival: "untrained",
        thievery: "untrained",     
    },
    spells_known:
    {
        spell_name_array: [],
        spell_effect_array: []
    }
}
var total_armor = (hero.equipment.head_armor + hero.equipment.torso_armor + hero.equipment.leg_armor + hero.equipment.hand_armor + hero.equipment.feet_armor);
//enemy stats
var enemy = 
    {
        name: "N",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap:0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
function rat()
{
    enemy = 
    {
        name: "rat",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap:1,
        atk: 1,
        weapon: "bite",
        weapon_dmg: 1,
        def: 0,
        armor: "fur",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
}
//combat functions
function playerATK()
{
    var player_hit_chance = .5 - .1*(enemy.def + enemy.buff);
    var player_hit_roll = Math.random() + .1*(hero.stats.player_atk + hero.stats.player_buff)
    if (player_hit_roll > player_hit_chance)
    {
        if (enemy.armor_value > hero.equipment.melee_wep_dmg)
        {
            alert ("no damage")
        }
        else 
        {
            enemy.current_hp = enemy.current_hp - (hero.equipment.melee_wep_dmg - enemy.armor_value);
        }
    }
    else
    {
        alert("miss")
    }
    console.log(player_hit_roll)
    console.log(enemy.current_hp)
}
function playerTurn()
{
    while (hero.stats.current_ap != 0)
    {
        playerATK()
        hero.stats.current_ap -= 1;
    }
}
function enemyATK()
{
    var enemy_hit_chance = .5 - .1*(hero.stats.player_def + hero.stats.player_buff);
    var enemy_hit_roll = Math.random() + .1*(enemy.atk + enemy.enemy_buff)
    if (enemy_hit_roll > enemy_hit_chance)
    {
        if (total_armor > enemy.weapon_dmg)
        {
            alert ("no damage")
        }
        else 
        {
            hero.stats.current_hp = hero.stats.current_hp - (enemy.weapon_dmg - total_armor);
        }
    }
    else
    {
        alert("miss")
    }
    console.log(enemy_hit_roll)
    console.log(hero.stats.current_hp)
}
function enemyTurn()
{
    enemyATK()
}
function combat()
{
    rat()
    if (hero.stats.speed > enemy.speed || hero.stats.speed == enemy.speed)
    {
        alert ("player attacks")
        playerTurn()
        alert ("enemy attacks")
        enemyTurn()
       
    }
    else
    {
        alert ("enemy attacks")
        enemyTurn()
        alert ("player attacks")
        playerTurn()
      
    }
}