using System;
namespace GameModels;

public class QuestItem : Item
{
    public QuestItem(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}