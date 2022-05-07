using System;
namespace GameModels;

public class LetterMayor : QuestItem
{
    public LetterMayor(string name = "Letter to Lord Dale", int cost = 0):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}