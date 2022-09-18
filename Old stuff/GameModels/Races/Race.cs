using System;
namespace GameModels;

public class Race
{
    public string Name;
    public List<Type>? Immunities;
    public List<Type>? Resistances;
    public List<Type>? Vulnerabilities;
    public Race(string name)
    {
        Name = name;
    }
}