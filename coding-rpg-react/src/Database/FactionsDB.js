export class Faction
{
    Name; Rank;
    constructor(name, rank)
    {
        this.Name = name; this.Rank=rank;
    }
}
export class DaleTownFaction extends Faction
{
 constructor(name = "Dale Town", rank = "Non-Member")
 {
    super(name, rank)
 }
}
export class WhiteScalesFlockFaction extends Faction
{
    constructor(name = "Whitescale's Flock", rank = "Non-Member")
 {
    super(name, rank)
 }
}