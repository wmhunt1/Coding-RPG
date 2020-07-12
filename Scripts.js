    //bandit function
    function Bandit()
    {
        Enemy = 
        {
            Name: "Bandit",
            CurrentHP: 4,
            MaxHP: 4,
            Atk: 2,
            Wep: "Dagger",
            Def: 1,
            Armor: "Leather",
        }
    }
    //bandit leader function
    function Bandit_Leader()
    {
        Enemy = 
        {
            Name: "Bandit Leader",
            CurrentHP: 10,
            MaxHP: 10,
            Atk: 2,
            Wep: "Shortsword",
            Def: 1,
            Armor: "Studded Leather",
        }
    }
    //arena champion function
    function Champion()
    {
        Enemy = 
        {
            Name: "Champion",
            CurrentHP: 100,
            MaxHP: 100,
            Atk: 10,
            Wep: "Gladius",
            Def: 10,
            Armor: "Bronze Plate",
        }
    }
    //goblin function
    function Goblin()
    {
        Enemy = 
        {
            Name: "Goblin",
            CurrentHP: 2,
            MaxHP: 2,
            Atk: 1,
            Wep: "Club",
            Def: 1,
            Armor: "Dirty Hide",
        }
    }
    //goblin boss function
    function Goblin_Boss()
    {
        Enemy = 
        {
            Name: "Goblin Boss",
            CurrentHP: 5,
            MaxHP: 5,
            Atk: 2,
            Wep: "Axe",
            Def: 1,
            Armor: "Pot",
        }
    }
    //bar patron function
    function Mimic()
    {
        Enemy = 
        {
            Name: "Mimic",
            CurrentHP: 5,
            MaxHP: 5,
            Atk: 2,
            Wep: "Teeth",
            Def: 4,
            Armor: "Wood",
        }
    }
    function Minotaur()
    {
        Enemy = 
        {
            Name: "Mintaur",
            CurrentHP: 20,
            MaxHP: 20,
            Atk: 8,
            Wep: "Great axe",
            Def: 4,
            Armor: "Thick Skin",
        }
    }
    function Patron()
    {
        Enemy = 
        {
            Name: "Patron",
            CurrentHP: 2,
            MaxHP: 2,
            Atk: 1,
            Wep: "Broken Bottle",
            Def: 0,
            Armor: "None",
        }
    }
    //arena Rookie function
    function Rookie()
    {
        Enemy = 
        {
            Name: "Rookie",
            CurrentHP: 5,
            MaxHP: 5,
            Atk: 2,
            Wep: "Sword",
            Def: 1,
            Armor: "Shield",
        }
    }
    function Skeleton()
    {
        Enemy = 
        {
            Name: "Skeleton",
            CurrentHP: 5,
            MaxHP: 5,
            Atk: 2,
            Wep: "Rusty Sword",
            Def: 0,
            Armor: "Armor Scraps",
        }
    }

    function Spider()
    {
        Enemy = 
        {
            Name: "Spider",
            CurrentHP: 2,
            MaxHP: 2,
            Atk: 2,
            Wep: "Bite",
            Def: 0,
            Armor: "Carapace",
        }
    }
// combat functions
    // function ATKPlayer()
    // {
    //     //Should reduce damage by armor amount
    //     Player.CurrentHP = Player.CurrentHP - (Enemy.Atk - Player.Def);
    //     alert ("The " + Enemy.Name + " attacks you with its " + Enemy.Wep)
    //     if (Player.Def >= Enemy.Atk)
    //     {
    //         alert ("The attack bounces harmlessly off your " + Player.Armor)
    //     }
    //     else
    //     {

    //     }
    //     document.getElementById("CHP").innerHTML = Player.CurrentHP;
    // }
    // function ATKEnemy()
    // {
    //     //should reduce damage by armor amount
    //     Enemy.CurrentHP = Enemy.CurrentHP - (Player.Atk - Enemy.Def);
    //     alert("You attack the " + Enemy.Name + " with your " + Player.Wep)
    //     if (Enemy.Def >= Player.Atk)
    //     {
    //         alert ("The attack bounces harmlessly off their " + Enemy.Armor)
    //     }
    //     else
    //     {
            
    //     }
    // }
    function MagicATK()
    {
        Enemy.CurrentHP = Enemy.CurrentHP - Player.Atk;
    }
    function Combat()
    {
        alert ("You face off against a " + Enemy.Name)
        var action = prompt("Attack (A), use a (S)kill or drink a (P)otion?")
        if (action === "A")
        {
            ATKEnemy()

        }
        else if (action === "S")
        {
            if (Skills.Combat != true && Skills.Magic != true) 
            {
                alert ("You don't know any skills yet so you attack normally.")
                ATKEnemy()
            }
            else
            {
                if (Player.CurrentAP > 0)
                {
                    var sChoice = prompt("Choose an ability.")
                    if (sChoice === "D" && Skills.Combat != false)
                    {
                        alert ("You use your combat training and attack twice.")
                        RemoveAP(1)
                        ATKEnemy()
                        ATKEnemy()
                    }
                    else if (sChoice === "H" && Skills.Healing != false)
                    {
                        alert ("You say a prayer and heal yourself.")
                        RemoveAP(1)
                        HealPlayer(5)
                    }
                    else if (sChoice === "M" && Skills.Magic != false)
                    {
                        alert ("You attack the enemy with a magic blast, ingnoring armor.")
                        RemoveAP(1)
                        MagicATK()
                    }
                    else
                    {
                        ATKEnemy()
                    }
                }
                else
                {
                    alert ("You are out of AP and instead attack normally.")
                    ATKEnemy()
                }
            }
        }
        else if (action === "P")
        {
            DrinkPotion()
        }
        else
        {
            alert ("you hesitated and lost your action.")
        
        }
        if (Enemy.CurrentHP > 0)
        {
        ATKPlayer()
        }
        else
        {

        }
    }
//arena functions
    function BetArena()
    {
        var aChoice = prompt("Bet on a fight? (Y/N)")
        if (aChoice === "Y")
        {
            var bet = prompt("How much do you bet?")
            var bet_amount = parseInt(bet)
            if (bet_amount > Player.Gold)
            {
                alert ("You don't have that much gold.")
            }
            else
            {
                var chance = Math.random()
                if (chance > .5)
                {
                    alert ("Your fighter wins and you double your bet.")
                    AddGold(bet_amount*2)
                }
                else
                {
                    alert ("Your fighter loses and you lose your bet.")
                    RemoveGold(bet_amount)
                }
            }
        }
        else
        {
            alert ("You instead just watch the bout.")
        }
    }
    function FightArena()
    {
        var aChoice = prompt("Who do you fight? (R)ookie or (C)hampion?")
        if (aChoice === "R")
        {
            var combatant = 1;
            Rookie()
            Boss_Battle(10)
            if (Player.CurrentHP > 0)
            {
                //
            }
            else
            {
            alert ("You are defeated in the arena.")
            Death()
            }
        }
        else if (aChoice = "C")
        {
            Champion()
            Boss_Battle(1000)
            if (Player.CurrentHP > 0)
            {
                //
            }
            else
            {
            alert ("You are defeated in the arena.")
            Death()
            }
        }
        else
        {
            alert ("You chicken out.")
        }
    }
// downtime functions
    function Bar()
    {
            var gossipArray = ["I once took an arrow to the knee.", "I saw a mudcrab the other day.", "I heard the brothel is run by succubi.", "The cake is a lie.", "Your waifu is shit.", "Snape kills Dumbledour", "Bruce Willis was dead at the end of Sixth Sense.", "My butthole itches."]
            var drinking = true;
            while (drinking != false && Player.CurrentHP > 0)
            {
                var bChoice = prompt("Buy a (D)rink, listen to (G)ossip?, get in a bar (F)ight, or (L)eave")
                if (bChoice === "D")
                {
                    if (Player.Gold < 1)
                    {
                        alert ("You cannot afford a drink.")
                    }
                    else
                    {
                        RemoveGold(1)
                        alert ("You buy a drink.")
                        DMGPlayer(1)
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
                    Player.Wep = "Broken Bottle";
                    Patron()
                    var patrons = Math.floor(Math.random() * 10+1);
                    Reg_Battle(patrons)
                    if (enemy_defeated == patrons)
                    {
                        alert("You are the champion.")
                        AddFame(patrons)
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
            if (Player.HP == 0)
            {
                alert ("You are thrown unconcious out of the bar.")
                Bad_Rest()
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
    function Temple()
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

// item functions
    function AddPotion(x)
    {
        Inventory.potions += x;
        document.getElementById("POT").innerHTML = Inventory.potions;
    }
    function RemovePotion(x)
    {
        Inventory.potions -= x;
        document.getElementById("POT").innerHTML = Inventory.potions;
    }
    function DrinkPotion()
    {
        if (Inventory.potions < 1)
        {
            alert ("You don't have any potions.")
        }
        else
        {
            RemovePotion(1)
            alert ("You drink a potion.")
            HealPlayer(5)
        }
    }
// quest functions
    //quest event functions
    //maze function
    function Maze(x)
    {
        for (var i = 0; i < x; i++ && Player.CurrentHP > 0)
        {
            var paths = Math.floor((Math.random()*4+1))
            var mChoice = prompt("There are " + paths + " paths to choose from. Which path do you chose?")
            var result = Math.random()
            //results: treasure, random encounter, trap, puzzle, point of interest, etc.
            if (1 >= result && result > 0.75)
            {
                var oChoice = prompt ("You find a chest. Do you open it? (Y/N)")
                if (oChoice === "Y")
                {
                    var mimic_chance = Math.random()
                    if (mimic_chance > .9)
                    {
                        Mimic()
                        Boss_Battle(10)
                    }
                    else
                    {
                        AddGold(treasure_value)
                        alert ("you find a " + TreasureArray[treasure] + " worth " + treasure_value + " gold")
                    }
                }
                else
                {
                    alert ("You decide not to risk it.")
                }
            }
            else if (.75 >= result && result > 0.5)
            {
                if (Skills.Thievery != false)
                {
                    alert ("You avoid a " + TrapArray[trap] + " trap")
                }
                else
                {
                    alert ("You trigger a " + TrapArray[trap] + " trap")
                    DMGPlayer(trap_damage)

                }
            }
            else if (.5 >= result && result > 0.25)
            {
                var random_encounter = Math.random()
                if (1 >= random_encounter && random_encounter > .75)
                {
                    Skeleton()
                }
                else if (.75 >= random_encounter && random_encounter > .5)
                {
                    Goblin()
                }
                else if (.5 >= random_encounter && random_encounter > .25)
                {
                    Spider()
                }
                else
                {
                    Rat()
                }
                var random_encounter_amount =  Math.floor((Math.random()*3+2))
                alert ("You run into a group of " + Enemy.Name + "s")
                Reg_Battle(random_encounter_amount)
            }
            else
            {
                alert ("You continue without issue.")
            }
        }
    }
    //quest template
    //bandit quest
    function Bandit_Quest()
    {
        if (Player.CurrentHP <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {
            Bandit()
            var bandits = Math.floor(Math.random() *5+1);
            alert ("You arrive at " + VillageArray[village] + " Village and meet with the mayor. In the morning, When the bandits come to get their protection fee, you will ambush them.")
            Rest()
            alert ("The bandits arrive.")
            Reg_Battle(bandits)
            if (Player.CurrentHP > 0)
                {
                    QuestComplete(bandits,5)
                    alert ("You manage to drive off the bandits. However that wasn't all of them. They may return in greater numbers.")
                    var bChoice = prompt("Will you pursue the bandits (Y/N)?")
                    if (bChoice === "Y")
                    {
                        if (Skills.Hunting != true)
                        {
                            alert ("You fail to find the bandits hideout.")
                        }
                        else 
                        {
                            Bandit()
                            alert ("You discover the bandits hiding out in a "  + DungeonArray[dungeon] + ".")
                            var bandits = Math.floor(Math.random() *10+1);
                            Reg_Battle(bandits)
                            alert ("After defeating the bandits you find their leader.")
                            Bandit_Leader()
                            Boss_Battle(25)
                            if (Player.CurrentHP > 0)
                            {
                                alert ("You have wiped out the bandits and freed the village from their influence.")
                                alert ("You return to the villagers and are rewarded for the remaining bandits you killed.")
                                QuestComplete(bandits,5)
                            }
                            else
                            {
                                Death()
                            }
                        }
                    }
                    else
                    {
                        alert ("You decide to end your involvement.")
                    }
                }
                else
                {
                    alert ("you fall unconscious and are dragged back to town.")
                }
        }
    }
    //dungeon test quest
    function DG_Test_Quest()
    {
        if (Player.CurrentHP <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            alert ("You meet the wizard at the " + InnArray[inn] + "and they show you the magic portal that leads into the dungeon.")
            // quest content
            var dChoice = prompt("Do you enter the portal?(Y/N)")
            if (dChoice === "Y")
            {
                alert ("You arrive in an extradimmensional space. The dungeon is a laybrinth with opaque white walls surrounded by black void.")
                var passages = Math.floor(Math.random() *5+5)
                Maze(passages)
                // or x time for minibosses with keys.
                Minotaur()
                Boss_Battle(50)
                if (Player.CurrentHP > 0)
                {
                    QuestComplete(10,10)
                    alert ("You sucessfully traverse the dungeon and the wizard thanks you.")
                    //quest completion
                }
                else
                {
                    Death()
                }
            }
            else
            {
                alert ("You decide you don't trust this wizard and leave.")
            }
        }
    }
    //goblin slayer quest
    function Goblin_Quest()
    {
        if (Player.CurrentHP <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        { 
            Goblin()
            alert ("You travel to " + VillageArray[village] + " village and are pointed in the right direction.")
            alert ("You find the " + DungeonArray[dungeon] +  " that the goblins have claimed as their lair.")
            var gChoice = prompt ("Do you enter the cave? (Y/N)")
            if (gChoice === "Y")
            {
                alert ("You enter the cave.")
                var goblins = Math.floor(Math.random() * 10+1);
                alert ("You must kill " + goblins + " goblins")
                Reg_Battle(goblins)
                // bossfight
                alert ("You discover the leader of the goblins.")
                Goblin_Boss()
                Boss_Battle(10)
                if (Player.CurrentHP > 0)
                {
                    alert ("You sucessfully kill all the goblins and the villagers are grateful.")
                    QuestComplete(goblins,5)
                }
                else
                {
                    Death()
                }
            }
            else
            {
                alert ("You turn around and go back to town.")             
            }
        }
    }
    //rat extermination quest
    function Spider_Quest()
    {
        if (Player.CurrentHP <= 0)  
        {
            alert ("You can't go questing in your condition")
        } 
        else
        {   
            alert("You enter the attic of " + InnArray[inn] + " and see many spiders crawling around.")
            var sChoice = prompt("Are you afraid of spiders? (Y/N)")
            if (sChoice === "N")
            {
                Spider()
                var spiders = Math.floor(Math.random() * 10+1);
                Reg_Battle(spiders)
                if (Player.CurrentHP > 0)
                {
                    //quest completion
                    QuestComplete(spiders,3)
                }
                else
                {
                    Death()
                }
            }
            else
            {
                alert("You turn around and leave.")
            }
        }
    }
// rest functions
    function Rest()
    {
        Player.CurrentHP = Player.MaxHP;
        Player.CurrentAP = Player.MaxAP;
        Day =+ 1;
        document.getElementById("Day").innerHTML = Day;
        document.getElementById("CHP").innerHTML = Player.CurrentHP;
        document.getElementById("CAP").innerHTML = Player.CurrentAP;
    }
    function Bad_Rest()
    {
        Player.CurrentHP = Player.MaxHP*.5;
        Day =+ 1;
        document.getElementById("Day").innerHTML = Day;
        document.getElementById("CHP").innerHTML = Player.CurrentHP;
    }
    function Inn()
    {
        if (Player.Gold < 10)
        {
            alert ("You cannot afford to stay at the inn.")
        }
        else
        {
            Rest()
            RemoveGold(10)
            alert ("You spend the night at the Inn.")
        }
    }
    function Home()
    {
        if (Inventory.Home != true)
        {
            alert("You don't have a house.")
        }
        else
        {
            Rest()
            alert ("You sleep in your own bed.")
        }
    }
    function Street()
    {
        alert ("You sleep on the street but it isn't very restful.")
        Bad_Rest()

    }
//shop functions
    //Apothecary function
    function Pharm()
    {
        var dChoice = prompt("Buy (P)otion(s) or an (E)lixer of Life?")
        if (dChoice === "P")
        {
            if (Player.Gold < 50)
            {
                alert ("You can't afford a potion")
            }
            else
            {
                AddPotion(1)
                RemoveGold(50)
                alert ("You buy a potion")
            }
            
        }
        else if (dChoice === "E")
        {
            if (Player.Gold < 1000)
            {
                alert ("You can't afford an Elixer of Life")
            }
            else
            {
                RemoveGold(1000)
                alert ("You buy and drink an Elixer of Life.")
                GainLife()
            }
        }
        else
        {
            alert ("You decide not to buy any potions. ")
        }
    }
    var WepCost = 100;
    var ArmorCost = 100;
    //blacksmith functions
    var WeaponArray = ["Stick","Club", "Dagger", "Shortsword", "Longsword", "Magic Sword", "Hero Sword"]
    var ArmorArray = ["Naked", "Tightey Whities", "Peasant Garb", "Leather", "Studded Leather", "Chain Mail", "Plate" ]
    function Anvil()
    {
    var forge = prompt("Upgrade (W)eapon or (A)rmor?")
    if (forge === "W")
    {
            alert ("Cost of forging is " + WepCost + " Gold")
            if (Player.Gold < WepCost)
            {
                alert("You cannot afford to upgrade your weaapon.")
            }
            else
            {
                ImpWep(1)
                RemoveGold(WepCost)
                WepCost *= 2;
            }
    }
    else if (forge === "A")
    {
            alert ("Cost of forging is " + ArmorCost + " Gold")
            if (Player.Gold < ArmorCost)
            {
                alert("You cannot afford to upgrade your armor.")
            }
            else
            {
                ImpArmor(1)
                RemoveGold(WepCost)
                ArmorCost *= 2;
            }
    }
    else
    {
            alert ("You choose not to do anything.")
    }
    }
    function ImpWep(x)
    {
        Player.Atk += x;
        alert ("Your weapon improves by " + x)
        Player.Wep = WeaponArray[Player.Atk-1]
        alert ("Your weapon has been updgraded to a " + Player.Wep)
        document.getElementById("ATK").innerHTML = Player.Atk;
        document.getElementById("ATK").innerHTML = Player.Wep;

    }
    function ImpArmor(x)
    {
        Player.Def += x;
        alert ("Your armor improves by " + x)
        Player.Armor = ArmorArray[Player.Def]
        alert("You armor has now been upgraded to " + Player.Armor)
        document.getElementById("DEF").innerHTML = Player.Def;
    }
    //realtor function
    function Buy_House()
    {
    if (Inventory.Home != false)
    {
        alert ("You already have a house.")
    }
    else
    {
        var hChoice = prompt ("Buy a house? (Y/N)")
        if (hChoice === "Y")
        {
                if (Player.Gold < 1000)
                {
                    alert ("You can't afford a house.")
                }
                else
                {
                    RemoveGold(1000)
                    Inventory.Home = true;
                    alert ("You are now a proud homeowner.")
                }
        }
        else
        {
            alert("You decide not to buy a house.")
        }
    }
    }
//training functions
    //had to split into seperate functions
    function Learn_Combat()
    {
        if (Skills.Combat != true)
        {
            if (Player.Gold < 100)
            {
                alert ("You cannot afford this training.")
            }
            else
            {
                Skills.Combat = true;
                alert ("You gain a new skill.")
                RemoveGold(100)
            }
        }
        else
        {
            alert ("You already know this skill.")
        }
    }
    function Learn_Healing()
    {
        if (Skills.Healing != true)
        {
            if (Player.Gold < 100)
            {
                alert ("You cannot afford this training.")
            }
            else
            {
                Skills.Healing = true;
                alert ("You gain a new skill.")
                RemoveGold(100)
            }
        }
        else
        {
            alert ("You already know this skill.")
        }
    }
    function Learn_Hunting()
    {
        if (Skills.Hunting != true)
        {
            if (Player.Gold < 100)
            {
                alert ("You cannot afford this training.")
            }
            else
            {
                Skills.Hunting = true;
                alert ("You gain a new skill.")
                RemoveGold(100)
            }
        }
        else
        {
            alert ("You already know this skill.")
        }
    }
    function Learn_Magic()
    {
        if (Skills.Magic != true)
        {
            if (Player.Gold < 100)
            {
                alert ("You cannot afford this training.")
            }
            else
            {
                Skills.Magic = true;
                alert ("You gain a new skill.")
                RemoveGold(100)
            }
        }
        else
        {
            alert ("You already know this skill.")
        }
    }
    function Learn_Thievery()
    {
        if (Skills.Thievery != true)
        {
            if (Player.Gold < 100)
            {
                alert ("You cannot afford this training.")
            }
            else
            {
                Skills.Thievery = true;
                alert ("You gain a new skill.")
                RemoveGold(100)
            }
        }
        else
        {
            alert ("You already know this skill.")
        }
    }