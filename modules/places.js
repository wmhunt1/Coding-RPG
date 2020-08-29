//for places other than dungeons or that aren't parts of quests.
class Place {
    constructor(name) {
        this.name = name;
    }
}
class Settlement extends Place {
    constructor(name) {
        super();
        this.name = name;
    }
}
//settlements
let villageDale = new Settlement("Village of Dale.");