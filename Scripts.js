        //Need to save changes to variables
        var Day = 1;
        var Player = 
        {
            Name: "Character",
            Level: 1,
            XP: 0,
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
        var XP_to_next_level = Math.pow(100, Player.Level);
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
        function LevelUp()
                {
                Player.Level += 1;
                Player.MaxHP += 10;
                }
        function Ready_for_level()
        {
            if (Player.XP >= XP_to_next_level)
            {
                LevelUp()
            }
            else
            {
                alert("Not enough XP for level UP")
            }
        }

        
        function AddXP(x)
        {
            Player.XP += x;
        }
        function AddGold(x)
        {
            Player.Gold += x;
        }
        function RemoveGold(x)
        {
            Player.Gold -= x;
        }
        function AddFame(x)
        {
            Player.Fame += x;
        }
        function Rest()
        {
            Player.CurrentHP = Player.MaxHP;
            Day =+ 1;
        }
        function Bad_Rest()
        {
            Player.CurrentHP = Player.MaxHP*.5;
            Day =+ 1;
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
        