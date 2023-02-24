import { FerraForgeHeart } from "./CharactersDB";

export class Relationship
{
    Name;Approval = 0; DisApproval= 0; Relationship= "Aquaintance";
    constructor(name)
    {
        this.Name = name;
    }
}
export class FerraForgeheartRelationship extends Relationship
{
    constructor(name =  new FerraForgeHeart().Name)
    {
        super(name)
    }
}