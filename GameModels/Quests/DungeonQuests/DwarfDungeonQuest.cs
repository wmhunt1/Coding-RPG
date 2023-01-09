namespace GameModels;
public class DwarfDungeonQuest : DungeonQuest
{
    public DwarfDungeonQuest(string name = "Clear the Dwarven Mine", string questDescription = "Clear out the goblins that have infested the Dwarven Mine", int goldReward = 50, string targetDungeon = "Dwarven Mine") : base(name, questDescription, goldReward, targetDungeon)
    {
        Name = name;
        GoldReward = goldReward;
        QuestDescription = questDescription;
        TargetDungeon = targetDungeon;
    }
}