using System.Text.Json.Serialization;
namespace GameModels;
public class RatKillQuest : KillQuest
{
    public RatKillQuest(string name = "Rats in the Cellar", string questDescription = "Kill Rats in the cellar", int goldReward = 10, int quantity = 3, string target = "Rat") : base(name, questDescription, goldReward, quantity, target)
    {
        Name = name;
        QuestDescription = questDescription;
        GoldReward = goldReward;
        Quantity = quantity;
        TargetMonster = target;
    }
}