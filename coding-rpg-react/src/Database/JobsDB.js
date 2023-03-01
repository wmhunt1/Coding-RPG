import { LeatherTorso, IronTorso } from "./ItemsDB";
import { EquipItem } from "../Scripts/ItemScripts";

export class Job {
    Name;Equip=[]; ApplyJob(char){for (var i=0; i < this.Equip.length; i++){EquipItem(char, char.Inventory, this.Equip[i], char.Log)}}
    constructor(name) {
        this.Name = name;
    }
}
export class Bandit extends Job {
    constructor(name = "Bandit") {
        super(name)
        this.Equip=[new LeatherTorso()]
    }
}
export class Cleric extends Job {
    constructor(name = "Cleric") {
        super(name)
        this.Equip=[new IronTorso()]
    }
}
export class Freelancer extends Job {
    constructor(name = "Freelancer") {
        super(name)
    }
}
export class Pet extends Job {
    constructor(name = "Pet") {
        super(name)
    }
}
export class Wizard extends Job {
    constructor(name = "Wizard") {
        super(name)
    }
}