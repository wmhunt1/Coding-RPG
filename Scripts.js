        //Need to save changes to variables
        var Day = 1;
        var Player = 
        {
            Name: "Character",
            Level: 1,
            XP: 100,
            Next_Level: 100,
            CurrentHP: 1000,
            MaxHP: 1000,
            Gold: 0,
            Atk: 5,
            Wep: "Stick",
            Def: 0,
            Armor: "None",
            Magic: false,
            Fame: 0,
            HomeOwner: false
        }
        // Need to figure out how to fill this for each enemy or make it a template
        var Enemy = 
        {
            Name: "N",
            CurrentHP: 0,
            MaxHP: 0,
            Atk: 0,
            Wep: "W",
            Def: 0,
            Armor: "N",
        }
    // functions
    // combat functions
        function DMGPlayer()
        {
            //Should reduce damage by armor amount
            Player.CurrentHP = Player.CurrentHP - (Enemy.Atk - Player.Def);
            alert ("The " + Enemy.Name + " attacks you with its " + Enemy.Wep)
            document.getElementById("CHP").innerHTML = Player.CurrentHP;
        }
        function DMGEnemy()
        {
            //should reduce damage by armor amount
            Enemy.CurrentHP = Enemy.CurrentHP - (Player.Atk - Enemy.Def);
            alert("You attack the " + Enemy.Name + " with your " + Player.Wep)
        }
        function Combat()
        {
            alert ("You face off against a " + Enemy.Name)
            var action = prompt("Attack (A)?")
            if (action === "A")
            {
                DMGEnemy()

            }
            else
            {
                alert ("you hesitated and lost your action.")
               
            }   
            DMGPlayer()
        }
        // Level Up Functions
        function LevelUp()
                {
                Player.Level += 1;
                Player.MaxHP += 10;
                Player.Next_Level = 100*Level;
                alert ("You Level up to Level " + Player.Level + " and gain 10 additional health")
                document.getElementById("Level").innerHTML = Player.Level;
                document.getElementById("MHP").innerHTML = Player.MaxHP;
                }
        function Ready_for_level()
        {
            if (Player.XP >= Player.Next_Level)
            {
                LevelUp()
            }
            else
            {
                alert("Not enough XP for level UP")
            }
        }
        // stat functions
        // update functions        
        function AddXP(x,y)
        {
            Player.XP += x*y;
            document.getElementById("XP").innerHTML = Player.XP;
        }
        function AddGold(x)
        {
            Player.Gold += x;
            document.getElementById("Gold").innerHTML = Player.Gold;
        }
        function RemoveGold(x)
        {
            Player.Gold -= x;
            document.getElementById("Gold").innerHTML = Player.Gold;
        }
        function AddFame(x)
        {
            Player.Fame += x;
            document.getElementById("Fame").innerHTML = Player.Fame;
        }
        // quest functions
        function QuestComplete(x,y)
        {
            AddXP(x,y)
            AddGold(x,y)
            AddFame(y)
            alert ("You gain: " + x*y + " XP")
            alert ("You gain: " + x*y + " Gold")
            alert ("You gain: " + y + " Fame")
        }
        function Rat_Quest()
        {
            if (Player.CurrentHP <= 0)  
            {
                alert ("You can't go questing in your condition")
            } 
            else
            {   
                Enemy = 
                    {
                        Name: "Rat",
                        CurrentHP: 2,
                        MaxHP: 2,
                        Atk: 1,
                        Wep: "Bite",
                        Def: 0,
                        Armor: "Fur",
                    }
                var rats = Math.floor(Math.random() * 5+1);
                alert ("You go down the tavern stairs into the cellar. Time to kill some rats")
                alert ("You must kill " + rats + " rats")
                for (var rats_killed = 0; rats_killed < rats && Player.CurrentHP > 0;)
                {
                    Combat()
                    if (Enemy.CurrentHP <= 0)
                    {
                        rats_killed += 1;
                        alert ("You managed to kill one of the rats.")
                    }
                    else 
                    {
                        alert ("You damage a rat")
                        //so nothing happens if rat alive
                    }
                    alert (Player.CurrentHP + " HP")
                    alert (rats_killed + " Rats Killed")
                }
                if (Player.CurrentHP > 0)
                {
                    QuestComplete(rats,5)
                }
                else
                {
                    alert ("you fall unconscious.")
                }
            }


        }
        function Goblin_Quest()
        {
            if (Player.CurrentHP <= 0)  
            {
                alert ("You can't go questing in your condition")
            } 
            else
            { 
                Enemy = 
                    {
                        Name: "Goblin",
                        CurrentHP: 4,
                        MaxHP: 4,
                        Atk: 2,
                        Wep: "Club",
                        Def: 0,
                        Armor: "None",
                    }
                alert ("You travel to the village and are pointed in the right direction.")
                alert ("You find the cave that the goblins have claimed as their lair.")
                var gChoice = prompt ("Do you enter the cave? (Y/N)")
                if (gChoice === "Y")
                {
                    alert ("You enter the cave.")
                    var goblins = Math.floor(Math.random() * 10+1);
                    alert ("You must kill " + goblins + " goblins")
                    for (var goblins_killed = 0; goblins_killed < goblins && Player.CurrentHP > 0;)
                    {
                        
                    Combat()
                    if (Enemy.CurrentHP <= 0)
                    {
                        goblins_killed += 1;
                        alert ("You managed to kill one of the goblins.")
                    }
                    else 
                    {
                        //
                    }
                        alert (Player.CurrentHP + " HP")
                        alert (goblins_killed + " goblins Killed")
                    }
                    alert ("You discover the leader of the goblins.")
                    var goblin_boss = 1;
                    Enemy = 
                    {
                        Name: "Goblin Boss",
                        CurrentHP: 10,
                        MaxHP: 10,
                        Atk: 5,
                        Wep: "Axe",
                        Def: 1,
                        Armor: "Pot",
                    }
                    for (var goblin_boss_killed = 0; goblin_boss_killed < goblin_boss && Player.CurrentHP > 0;)
                    {
                        Combat()
                        if (Enemy.CurrentHP <= 0)
                        {
                            goblin_boss_killed += 1;
                            alert ("You slay the Goblin Boss and gain 50 XP in the process.")
                            AddXP(1,50)
                            alert ("You loot the Goblin Boss and find 50 Gold")
                            AddGold(50)
                        }
                        else 
                        {
                            //
                        }
                            alert (Player.CurrentHP + " HP")
                    }
                    if (Player.CurrentHP > 0)
                    {
                        alert ("You sucessfully kill all the goblins and the villagers are grateful.")
                        QuestComplete(goblins,10)
                    }
                    else
                    {
                        alert ("you fall unconscious.")
                    }
                }
                else
                {
                    alert ("You turn around and go back to town.")             
                }
            }
        }
        // rest functions
        function Rest()
        {
            Player.CurrentHP = Player.MaxHP;
            Day =+ 1;
            document.getElementById("Day").innerHTML = Day;
            document.getElementById("CHP").innerHTML = Player.CurrentHP;
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
                console.log(Player.Gold)
                alert ("You spend the night at the Inn.")
            }
        }
        function Home()
        {
            if (Player.HomeOwner != true)
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
        // item functions
        function AddItem()
        {

        }
        function RemoveItem()
        {

        }
        function UseItem()
        {
            //Need to make items
        }
        function current_stats()
        {
            alert("Level: " + Player.Level)
            alert("XP: " + Player.XP)
            alert("HP is " + Player.CurrentHP + " out of " + (Player.MaxHP))
            alert("Gold: " + Player.Gold)
            alert("Attack: " + Player.Atk)
            alert("Armor: " + Player.Armor)
        }
        //figure it out
        function new_game()
        {

        }
        //figure it out
        function save_game()
        {

        }
        