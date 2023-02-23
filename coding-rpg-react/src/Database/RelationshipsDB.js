import { FerraForgeHeart } from "./CharactersDB";

export function ferraForgeheartRelationship()
{
    var rel = {Name: new FerraForgeHeart().Name, Approval: 0, DisApproval: 0, Relationship: "Aquaintance"}
    return rel;
}