//player stats
var hero =
{
    basics:
    {
        name: "name",
        class: "Freelancer",
        level: 1,
        lifes: 3,
    },
    stats:
    {
        current_hp: 10,
        max_hp: 10,
        current_ap: 1,
        max_ap: 1,
        current_ap: 1,
        current_sp: 2,
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
        head_slot: "Peasant Hat",
        head_armor: 0,
        torso_slot: "Peasant Shirt",
        torso_armor: 0,
        leg_slot: "Peasant Pants",
        leg_armor: 0,
        hand_slot: "Peasant Gloves",
        hand_armor: 0,
        feet_slot: "Peasant Boots",
        feet_armor: 0,
        melee_wep: "Stick",
        melee_wep_dmg: 1,
        ranged_wep: "Rock",
        ranged_wep_dmg: 1,
        magic_wep: "Stick",
        magic_wep_dmg: 1,
        wepCost: 100,
        armorCost: 100,
    },
    inventory:
    {
        gold: 100,
        homeowner: false,
        potion: 0,
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
        infamy: 0
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
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
function arena_champion(x)
{   
    enemy =
    {
        number: x,
        name: "Arena Champion",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
}   
function arena_rookie(x)
{   
    enemy =
    {
        number: x,
        name: "Rookie",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
    }
}   
function bandit(x)
{   
    enemy =
    {
        number: x,
        name: "Bandit",
        current_hp: 5,
        max_hp: 5,
        current_ap: 0,
        max_ap: 0,
        atk: 1,
        weapon: "Dagger",
        weapon_dmg: 2,
        def: 1,
        armor: "Leather",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function bandit_leader(x)
{   
    enemy =
    {
        number: x,
        name: "Bandit Leader",
        current_hp: 20,
        max_hp: 20,
        current_ap: 0,
        max_ap: 0,
        atk: 5,
        weapon: "Sword",
        weapon_dmg: 5,
        def: 5,
        armor: "Chainmail",
        armor_value: 5,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function bar_patron(x)
{   
    enemy =
    {
        number: x,
        name: "Bar Patron",
        current_hp: 5,
        max_hp: 5,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "Broken Bottle",
        weapon_dmg: 1,
        def: 0,
        armor: "None",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function goblin(x)
{   
    enemy =
    {
        number: x,
        name: "Goblin",
        current_hp: 4,
        max_hp: 4,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "Club",
        weapon_dmg: 1,
        def: 1,
        armor: "None",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function goblin_boss(x)
{   
    enemy =
    {
        number: x,
        name: "Goblin Boss",
        current_hp: 10,
        max_hp: 10,
        current_ap: 0,
        max_ap: 0,
        atk: 2,
        weapon: "Axe",
        weapon_dmg: 2,
        def: 2,
        armor: "Leather Scraps",
        armor_value: 1,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function mimic(x)
{   
    enemy =
    {
        number: x,
        name: "Mimic",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function minotaur(x)
{   
    enemy =
    {
        number: x,
        name: "Minotaur",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "W",
        weapon_dmg: 0,
        def: 0,
        armor: "A",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function rat(x)
{
    enemy =
    {
        number: x,
        name: "Rat",
        current_hp: 1,
        max_hp: 1,
        current_ap: 1,
        max_ap: 1,
        atk: 0,
        weapon: "Bite",
        weapon_dmg: 1,
        def: 0,
        armor: "Fur",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 2,
    }
}
function skeleton(x)
{
    enemy =
    {
        number: x,
        name: "Skeleton",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "Rusty Sword",
        weapon_dmg: 0,
        def: 0,
        armor: "Armor Scraps",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
function spider(x)
{
    enemy =
    {
        number: x,
        name: "spider",
        current_hp: 0,
        max_hp: 0,
        current_ap: 0,
        max_ap: 0,
        atk: 0,
        weapon: "bite",
        weapon_dmg: 0,
        def: 0,
        armor: "carapace",
        armor_value: 0,
        speed: 0,
        enemy_buff: 0,
        xp_value: 0,
    }
}
//hero update functions
function changeName()
{
    var chooseName = prompt("What is your Name?")
    hero.basics.name = chooseName;
    document.getElementById("Name").innerHTML = hero.basics.name;
}
//level up functions
function LevelUp()
{
    hero.basics.level += 1;
    hero.basics.max_hp += 10;
    hero.stats.max_sp += 2;
    hero.stats.xp_to_next_level = 100*hero.basics.level;
    hero.stats.player_atk += 1;
    hero.stats.player_def += 1;
    document.getElementById("Level").innerHTML = hero.stats.level;
    document.getElementById("MHP").innerHTML = hero.stats.max_hp;
    document.getElementById("MSP").innerHTML = hero.stats.max_sp;
    document.getElementById("ATK").innerHTML = hero.stats.player_atk;
    document.getElementById("DEF").innerHTML = hero.stats.player_def;
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
    document.getElementById("Gold").innerHTML = hero.inventory.gold;
}
function removeGold(x)
{
    hero.inventory.gold -= x;
    document.getElementById("Gold").innerHTML = hero.inventory.gold;
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
            alert("No damage")
        }
        else
        {
            enemy.current_hp = enemy.current_hp - (hero.equipment.melee_wep_dmg - enemy.armor_value);
            document.getElementById("CHP").innerHTML = hero.stats.current_hp;
            console.log("player hits enemy")
            alert ("Enemy hit")
        }
    }
    else
    {
        console.log("player missed enemy")
        alert ("miss")
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
        
        var action = prompt("Attack (A) or drink a (P)otion?")
        if (action === "A")
        {
            playerATK()
            removeAP(1)

        }
        else if (action === "P")
        {
            drinkPotion()
            removeAP(1)
        }
        else
        {

        }
    }
}
function enemyATK()
{
    console.log("enemy attacks")
    alert("The " + enemy.name + " attacks")
    var enemy_hit_chance = .5 - .1*(hero.stats.player_def + hero.stats.player_buff);
    var enemy_hit_roll = Math.random() + .1*(enemy.atk + enemy.enemy_buff)
    if (enemy_hit_roll > enemy_hit_chance)
    {
        if (total_armor >= enemy.weapon_dmg)
        {
            console.log("no damage")
            alert("No damage")
        }
        else
        {
            hero.stats.current_hp = hero.stats.current_hp - (enemy.weapon_dmg - total_armor);
            console.log("enemy hits player")
            alert("player hit")
        }
    }
    else
    {
        console.log("enemy missed player")
        alert ("miss")
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
        alert ("The " + enemy.name + " dies.")
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
        alert ("victory.")
    }
    else
    {
        console.log("death")
        alert ("death.")
    }
}
//arena functions
function betArena()
{
    var aChoice = prompt("Bet on a fight? (Y/N)")
    if (aChoice === "Y")
    {
        var bet = prompt("How much do you bet?")
        var bet_amount = parseInt(bet)
        if (bet_amount > hero.inventory.gold)
        {
            alert ("You don't have that much gold.")
        }
        else
        {
            var chance = Math.random()
            if (chance > .5)
            {
                alert ("Your fighter wins and you double your bet.")
                addGold(bet_amount*2)
            }
            else
            {
                alert ("Your fighter loses and you lose your bet.")
                removeGold(bet_amount)
            }
        }
    }
    else
    {
        alert ("You instead just watch the bout.")
    }
}
function fightArena()
{
    var aChoice = prompt("Who do you fight? (R)ookie or (C)hampion?")
    if (aChoice === "R")
    {
        arena_rookie(1)
        combat()
        if (hero.stats.current_hp > 0)
        {
            addXP(100)
            addGold(100)
        }
        else
        {
            alert ("You are defeated in the arena.")
            death()
        }
    }
    else if (aChoice = "C")
    {
        arena_champion(1)
        if (hero.stats.current_hp> 0)
        {
            addXP(1000)
            addGold(1000)
        }
        else
        {
            alert ("You are defeated in the arena.")
            death()
        }
    }
    else
    {
        alert ("You chicken out.")
    }
}
//downtime functions
function bar()
{
        var gossipArray = ["I once took an arrow to the knee.", "I saw a mudcrab the other day.", "I heard the brothel is run by succubi.", "The cake is a lie.", "Your waifu is shit.", "Snape kills Dumbledour", "Bruce Willis was dead at the end of Sixth Sense.", "My butthole itches."]
        var drinking = true;
        while (drinking != false && hero.stats.current_hp > 0)
        {
            var bChoice = prompt("Buy a (D)rink, listen to (G)ossip?, get in a bar (F)ight, or (L)eave")
            if (bChoice === "D")
            {
                if (hero.inventory.gold < 1)
                {
                    alert ("You cannot afford a drink.")
                }
                else
                {
                    removeGold(1)
                    alert ("You buy a drink.")
                    dmgPlayer(1)
                    alert ("You get drunk(er)")
                }
            }
            else if (bChoice === "G")
            {
                var gossip = Math.floor((Math.random() * gossipArray.length))
                alert (gossipArray[gossip])
            }
            else if (bChoice === "F")
            {
                alert ("You break a bottle and start a bar fight.")
                hero.equipment.melee_wep = "Broken Bottle";
                hero.equipment.melee_wep_dmg = 0;
                bar_patron(Math.floor(Math.random() * 10+1))
                combat()        
                if (enemy.number == 0)
                {
                    alert("You are the champion.")
                }
                else
                {
                    alert("You lose.")
                }

            }
            else if (bChoice === "L")
            {
                alert("You decide to leave the bar.")
                drinking = false;
            }
            else
            {
            }
        }
        if (hero.stats.current_hp == 0)
        {
            alert ("You are thrown unconcious out of the bar.")
            bad_Rest()
        }
        else
        {
            //
        }
}
//temple fuction
var stormon_worship = 0;
var sunshin_worship = 0;
//maybe abilities etc can be gained based off of praying
function temple()
{
    var wChoice = prompt("Which god do you worship? (Storm)on, (Sun)shin, or leave?")
    if (wChoice === "Storm")
    {
        alert ("You pray to Stormon the god of storms and battle and read from his holy book, 'The Book of Stormon'.")
        stormon_worship += 1;
    }
    else if (wChoice === "Sun")
    {
        alert ("You pray Sto Sunshine the god of light.")
        sunshin_worship += 1;
    }
    else
    {
        alert ("You decide not to pray like the edgy little athiest you are.")
    }
    alert("You leave the temple.")
}
//inventory functions
function addPotion(x)
    {
        hero.inventory.potion += x;
    }
function removePotion(x)
{
    hero.inventory.potion -= x;
}
function DrinkPotion()
{
    if ( hero.inventory.potion < 1)
    {
        alert ("You don't have any potions.")
    }
    else
    {
        removePotion(1)
        alert ("You drink a potion.")
        healPlayer(5)
    }
}
//quest functions
//random locations for quests
    //bars
    var barArray = ["Moes' Bar", "Rats in The Cellar Bar and Grill", "Drunken Lout"]
    var bar = Math.floor((Math.random() * barArray.length))
    //dungeons
    var dungeonArray = ["Abandoned Mine", "Cave"]
    var dungeon = Math.floor((Math.random() * dungeonArray.length))
    //inns
    var innArray = ["Dreaming Worker", "A Place to Rest your Bread", "Motel Styx"]
    var inn = Math.floor((Math.random() * innArray.length))
    //towns
    var townArray = ["Towning Town", "Other Town"]
    var town = Math.floor((Math.random() * townArray.length))
    //villages
    var villageArray = ["Dale", "Vil"]
    var village = Math.floor((Math.random() * villageArray.length))
    //random objectives for quests
    //item retreival
    var fetchArray = ["Missing Item"]
    var fetch = Math.floor((Math.random() * fetchArray.length))
    //rescue
    var rescueArray = ["Boy","Girl","Noble"]
    var rescue = Math.floor((Math.random() * rescueArray.length))
    //random treasure for dungeons etc.
    var treasureArray = ["An old coin", "a goblet", "a statuette", "some porn mags", "an ancient scroll"]
    var treasure = Math.floor((Math.random() * treasureArray.length))
    var treasure_value = Math.floor((Math.random() *10+10))
    //traps
    var trapArray = ["Pressure plate", "Dart", "Spike"]
    var trap = Math.floor((Math.random() * trapArray.length))
    var trap_damage = Math.floor((Math.random() *10+1))

    function questComplete(x,y)
    {
        addXP(x,y)
        addGold(x,y)
        addFame(y)
        hero.journal.quests_completed += 1;
        document.getElementById("QC").innerHTML = hero.journal.quests_completed;
        alert ("You gain: " + x*y + " XP")
        alert ("You gain: " + x*y + " Gold")
        alert ("You gain: " + y + " Fame")
    }
    function bossReward(x,y)
    {
        addXP(x,y)
        addGold(x,y)
        addFame(y)
        hero.journal.quests_completed += 1;
        document.getElementById("QC").innerHTML = hero.journal.quests_completed;
        alert ("You gain: " + x*y + " XP")
        alert ("You gain: " + x*y + " Gold")
        alert ("You gain: " + y + " Fame")
    }
    function Template()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            // quest content
            if (hero.stats.current_hp > 0)
            {
                //quest completion
            }
            else
            {
                Death()
            }
        }
    }
    function banditQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            bandit(Math.floor(Math.random() * 10+1))
            var bandits = enemy.number;
            alert ("You go to " + villageArray[village] + " and are pointed towards the. " + dungeonArray[dungeon] +  " that the bandits have claimed as their base.")
            alert ("You must kill " + enemy.number + " bandits")
            combat()
            alert ("you find the bandit leader.")
            bandit_leader(1)
            combat()
            if (hero.stats.current_hp > 0)
            {
                questComplete(bandits,10)
                bossReward(10,10)
            }
            else
            {
                Death()
            }
        }
    }
    function goblinQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            goblin(Math.floor(Math.random() * 10+1))
            var goblins = enemy.number;
            alert ("You go to " + villageArray[village] + " and are pointed towards the. " + dungeonArray[dungeon] +  " that the goblins have claimed as their lair.")
            alert ("You must kill " + enemy.number + " goblins")
            combat()
            alert("you find the goblin boss.")
            goblin_boss(1)
            combat()
            if (hero.stats.current_hp > 0)
            {
                questComplete(goblins,10)
                bossReward(10,10)
            }
            else
            {
                Death()
            }
        }
    }
    function ratQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            rat(Math.floor(Math.random() * 5+1))
            var rats = enemy.number;
            alert ("You go to " + barArray[bar] + " and head down the stairs into the cellar.")
            alert ("You must kill " + enemy.number + " rats")
            combat()
            if (hero.stats.current_hp > 0)
            {
                questComplete(rats,2)
            }
            else
            {
                Death()
            }
        }
    }
    function spiderQuest()
    {
        if (hero.stats.current_hp <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            spider(Math.floor(Math.random() * 5+1))
            var spiders = enemy.number;
            alert ("You go to " + innArray[inn] + " and head up the stairs into the attic.")
            alert ("You must kill " + enemy.number + " spider")
            combat()
            if (hero.stats.current_hp > 0)
            {
                questComplete(spiders,5)
            }
            else
            {
                Death()
            }
        }
    }
// rest functions
function rest()
{
    hero.stats.current_hp = hero.stats.max_hp;
    hero.stats.current_sp = hero.stats.max_sp;
    hero.journal.day =+ 1;
    document.getElementById("Day").innerHTML = hero.journal.day;
    document.getElementById("CHP").innerHTML = hero.stats.current_hp;
    document.getElementById("CSP").innerHTML = hero.stats.current_sp;
}
function bad_rest()
{
    hero.stats.current_hp = hero.stats.max_hp;
    hero.stats.current_sp = hero.stats.max_sp;
    hero.journal.day =+ 1;
    document.getElementById("Day").innerHTML = hero.journal.day;
    document.getElementById("CHP").innerHTML = hero.stats.current_hp;
}
function inn_rest()
{
    if (hero.inventory.gold < 10)
    {
        alert ("You cannot afford to stay at the inn.")
    }
    else
    {
        rest()
        removeGold(10)
        alert ("You spend the night at the Inn.")
    }
}
function home_rest()
{
    if (hero.inventory.homeowner != true)
    {
        alert("You don't have a house.")
    }
    else
    {
        rest()
        alert ("You sleep in your own bed.")
    }
}
function street_rest()
{
    alert ("You sleep on the street but it isn't very restful.")
    bad_rest()

}
//shopping functions
//apothecary functions
function pharmacy()
{
    var dChoice = prompt("Buy (P)otion(s) or an (E)lixer of Life?")
    if (dChoice === "P")
    {
        if (hero.inventory.gold < 50)
        {
            alert ("You can't afford a potion")
        }
        else
        {
            addPotion(1)
            removeGold(50)
            alert ("You buy a potion")
        }
        
    }
    else if (dChoice === "E")
    {
        if (hero.inventory.gold < 1000)
        {
            alert ("You can't afford an Elixer of Life")
        }
        else
        {
            removeGold(1000)
            alert ("You buy and drink an Elixer of Life.")
            gainLife()
        }
    }
    else
    {
        alert ("You decide not to buy any potions. ")
    }
}
//blacksmith functions
function impWep(x)
{
    hero.equipment.melee_wep_dmg += x;
    alert ("Your weapon improves by " + x)
    hero.equipment.melee_wep = WeaponArray[hero.equipment.melee_wep-1]
    alert ("Your weapon has been updgraded to a " + hero.equipment.melee_wep)
    document.getElementById("Mwep").innerHTML = hero.equipment.melee_wep;

}
function impArmor(x)
{
    hero.equipment.torso_armor;
    alert ("Your armor improves by " + x)
    hero.equipment.torso_armor = armorArray[hero.equipment.torso_slot]
    alert("You armor has now been upgraded to " + hero.equipment.torso_slot)
    document.getElementById("Torso").innerHTML = hero.equipment.torso_slot;
    document.getElementById("Totarm").innerHTML = total_armor;
} 
//blacksmith functions
var weaponArray = ["Stick","Club", "Dagger", "Shortsword", "Longsword", "Magic Sword", "Hero Sword"]
var armorArray = ["Peasant Garb", "Leather", "Studded Leather", "Chain Mail", "Plate" ]
function anvil()
{
    var forge = prompt("Upgrade (W)eapon or (A)rmor?")
    if (forge === "W")
    {
            alert ("Cost of forging is " + hero.equipment.wepCost + " Gold")
            if (hero.inventory.gold < hero.equipment.wepCost)
            {
                alert("You cannot afford to upgrade your weaapon.")
            }
            else
            {
                impWep(1)
                removeGold(hero.equipment.wepCost)
                hero.equipment.wepCost *= 2;
            }
    }
    else if (forge === "A")
    {
            alert ("Cost of forging is " + hero.equipment.armorCost + " Gold")
            if (hero.inventory.gold < hero.equipment.armorCost)
            {
                alert("You cannot afford to upgrade your armor.")
            }
            else
            {
                impArmor(1)
                removeGold(hero.equipment.armorCost)
                hero.equipment.armorCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
}
 //realtor function
 function buy_House()
 {
    if (hero.inventory.homeowner != false)
    {
        alert ("You already have a house.")
    }
    else
    {
        var hChoice = prompt ("Buy a house? (Y/N)")
        if (hChoice === "Y")
        {
                if (hero.inventory.gold < 1000)
                {
                    alert ("You can't afford a house.")
                }
                else
                {
                    removeGold(1000)
                    hero.inventory.homeowner = true;
                    alert ("You are now a proud homeowner.")
                }
        }
        else
        {
            alert("You decide not to buy a house.")
        }
    }
 }