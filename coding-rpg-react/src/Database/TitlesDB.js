export class Title
{
    Name; 
    titleApplyEffect(hero){}; titleRemoveEffect(hero){}
    constructor(name)
    {
        this.Name = name;
    }
}
export class NoTitle extends Title
{
    constructor(name)
    {
        super(name = "No Title")
    }
}