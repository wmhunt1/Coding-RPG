//player stats
var hero =
{
    basics:
    {
        name: "name",
        class: "Freelancer",
        lifes: 3,
    },
    stats:
    {
        current_hp: 10,
        max_hp: 10,
        current_ap: 1,
        max_ap: 1,
        current_ap: 1,
        max_sp: 2,
        player_atk: 1,
        player_def: 1,
        speed: 1,
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
        melee_wep: "stick",
        melee_wep_dmg: 1,
        ranged_wep: "rock",
        ranged_wep_dmg: 1,
        magic_wep: "stick",
        magic_wep_dmg: 1,
    },
    inventory:
    {
        gold: 0,
        item:
        {
            name: "",
            description: "",
            effect: "",
            value: 0,
        }
    },
    journal:
    {
        day: 0,
        quests_completed: 0,
    },
    reputation:
    {
        fame: 0,
        infanmy: 0
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
//couldn't get to work while in object
var total_armor = (hero.equipment.head_armor + hero.equipment.torso_armor + hero.equipment.leg_armor + hero.equipment.hand_armor + hero.equipment.feet_armor);
//enemy stats
var enemy =
    {
        number: 0,
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
function rat(x)
{
    enemy =
    {
        number: x,
        name: "rat",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap:1,
        atk: 0,
        weapon: "bite",
        weapon_dmg: 1,
        def: 0,
        armor: "fur",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
}
//hero update functions
//level up functions
function LevelUp()
{
    hero.basics.level += 1;
    hero.basics.max_hp += 10;
    hero.stats.max_sp += 2;
    hero.stats.xp_to_next_level = 100*hero.basics.level;
    document.getElementById("Level").innerHTML = hero.stats.level;
    document.getElementById("MHP").innerHTML = hero.stats.max_hp;
    document.getElementById("MSP").innerHTML = hero.stats.max_sp;
}
function Ready_for_level()
{
    if (hero.stats.xp >= hero.stats.xp_to_next_level)
    {
        LevelUp()
    }
    else
    {
        alert("Not enough XP for level UP")
    }
}
function gainLife()
{
    hero.basics.lifes += 1;
    document.getElementById("Life").innerHTML = hero.basics.lifes;
}
function loseLife()
{
    hero.basics.lifes -= 1;
    document.getElementById("Life").innerHTML = hero.basics.lifes;
}
function death()
{
    loseLife()
    if (hero.basics.lifes > 0)
    {
        healPlayer(1)
    }
    else 
    {
        //
    }
}
function healPlayer(x)
{
    hero.stats.current_hp += x;
    document.getElementById("CHP").innerHTML = hero.stats.current_hp;
}
function dmgPlayer(x)
{
    hero.stats.current_hp -= x;
    document.getElementById("CHP").innerHTML = hero.stats.current_hp;
}
function addAP(x)
{
    hero.stats.current_ap += x;
}
function removeAP(x)
{
    hero.stats.current_ap -= x;
}
function addXP(x)
{
    hero.stats.xp += x;
    document.getElementById("XP").innerHTML = hero.stats.xp;
}
function addGold(x)
{
    hero.inventory.gold += x;
    document.getElementById("Gold").innerHTML = hero.iventory.gold;
}
function removeGold(x)
{
    hero.inventory.gold -= x;
    document.getElementById("Gold").innerHTML = hero.iventory.gold;
}
function addFame(x)
{
    hero.journal.fame += x;
    document.getElementById("Fame").innerHTML = hero.reputation.fame;
}
function addInfamy(x)
{
    hero.journal.infamy += x;
    document.getElementById("Infamy").innerHTML = hero.reputation.infamy;
}
//combat functions
var enemies_killed = 0;
function playerATK()
{
    console.log("player attacks")
    var player_hit_chance = .5 - .1*(enemy.def + enemy.enemy_buff);
    var player_hit_roll = Math.random() + .1*(hero.stats.player_atk + hero.stats.player_buff)
    if (player_hit_roll > player_hit_chance)
    {
        if (enemy.armor_value >= hero.equipment.melee_wep_dmg)
        {
            console.log("no damage")
        }
        else
        {
            enemy.current_hp = enemy.current_hp - (hero.equipment.melee_wep_dmg - enemy.armor_value);
            document.getElementById("CHP").innerHTML = hero.stats.current_hp;
            console.log("player hits enemy")
        }
    }
    else
    {
        console.log("player missed enemy")
    }
    console.log(player_hit_roll)
    console.log(player_hit_chance)
    console.log(enemy.current_hp + " enemy hp")
}
function playerTurn()
{
    hero.stats.current_ap = hero.stats.max_ap
    while (hero.stats.current_ap > 0)
    {
        playerATK()
        removeAP(1)
    }
}
function enemyATK()
{
    console.log("enemy attacks")
    var enemy_hit_chance = .5 - .1*(hero.stats.player_def + hero.stats.player_buff);
    var enemy_hit_roll = Math.random() + .1*(enemy.atk + enemy.enemy_buff)
    if (enemy_hit_roll > enemy_hit_chance)
    {
        if (total_armor >= enemy.weapon_dmg)
        {
            console.log("no damage")
        }
        else
        {
            hero.stats.current_hp = hero.stats.current_hp - (enemy.weapon_dmg - total_armor);
            console.log("enemy hits player")
        }
    }
    else
    {
        console.log("enemy missed player")
    }
    console.log(enemy_hit_roll)
    console.log(enemy_hit_chance)
    console.log(hero.stats.current_hp + " player hp")
}
function enemyTurn()
{
    //attack for every enemy
    for (var i = 0; i < enemy.number; i++)
    {
        enemyATK()
    }
}
function checkifdead()
{
    if (enemy.current_hp <= 0)
    {
        console.log("checking if dead.")
        enemy.number -= 1;
        enemies_killed += 1;
        enemy.current_hp = enemy.max_hp;
        console.log("a " + enemy.name + " dies")
        console.log("there are " + enemy.number + " " + enemy.name + "(s) left.")
    }
    else
    {
        //so nothing happens
    }
    console.log("checked if dead")
}
//general combat function
function combat()
{
    rat(3)
    console.log ("you face "+ enemy.number + " " + enemy.name + "(s)")
    var turn = 0;
    while(hero.stats.current_hp > 0 && enemy.number > 0)
    {
        for (enemies_killed = 0; enemies_killed < enemy.number && hero.stats.current_hp > 0;)
        {
            turn += 1;
            console.log ("turn " + turn)
            if (hero.stats.speed > enemy.speed || hero.stats.speed == enemy.speed)
            {
                playerTurn()
                checkifdead()
                enemyTurn()
            }
            else
            {
                enemyTurn()
                playerTurn()
                checkifdead()
            }
        }
    }
    if (hero.stats.current_hp > 0)
    {
        console.log("victory")
    }
    else
    {
        console.log("death")
    }
}
