namespace GameModels;
public class DaleInnDialogue : InnDialogue
{
    public DaleInnDialogue(string name, Inn inn) : base(name, inn)
    {
        Name = name;
        AssociatedInn = inn;
    }
    public override void HaveDialogue(Character hero)
    {
        bool left = false;
        while (left == false)
        {
            Console.WriteLine($"[1] Rent Room {AssociatedInn.RoomCost} GP");
            Console.WriteLine("[2] Talk to Innkeeper (Quest)");
            Console.WriteLine("[3] Go to Cellar (Kill Rats)");
            Console.WriteLine("[0] Leave");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    AssociatedInn.RestAtInn(hero);
                    break;
                case "2":
                    RatKillQuest ratKillQuest = new RatKillQuest();
                    KillQuestDialogue ratDialogue = new KillQuestDialogue(ratKillQuest.Name, ratKillQuest);
                    ratDialogue.HaveDialogue(hero);
                    break;
                case "3":
                    CombatMenu cellarCombat = new CombatMenu();
                    List<Character> rats = new List<Character> { new Rat(), new Rat(), new Rat() };
                    cellarCombat.RunCombat(hero, rats);
                    break;
                case "0":
                    left = true;
                    break;
                default:
                    break;
            }
        }
    }
}