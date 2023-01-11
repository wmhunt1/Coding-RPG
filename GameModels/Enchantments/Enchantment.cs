using System.Text.Json.Serialization;

namespace GameModels;
public class Enchantment
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    public Enchantment(string name)
    {
        Name = name;
    }
    public virtual Character ApplyEnchantmentOnEquip(Character hero)
    {
        return hero;
    }
    public virtual Character RemoveEnchantmentOnUnEquip(Character hero)
    {
        return hero;
    }
    public virtual void OnHitEnchantment(Character hero, Character target)
    {

    }
}