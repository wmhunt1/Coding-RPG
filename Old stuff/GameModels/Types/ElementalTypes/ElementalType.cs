using System;
namespace GameModels;

public class ElementalType : Type
{
    public ElementalType(string name = "Elemental"):base(name)
    {
        Name = name;
    }
}