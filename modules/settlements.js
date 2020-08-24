class Settlement {
    constructor() {
    }
}
class City extends Settlement {
    constructor() {
        super();
    }
}
class Town extends Settlement {
    constructor() {
        super();
    }
}
class Village extends Settlement {
    constructor() {
        super();
        this.name;
    }
}
let villageDale = new Village("Village of Dale.");