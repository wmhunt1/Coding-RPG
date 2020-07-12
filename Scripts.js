// quest functions
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
    function spiderQuest()
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
//shop functions
   
  
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