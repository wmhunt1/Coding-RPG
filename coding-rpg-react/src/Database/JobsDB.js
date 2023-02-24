export class Job {
    Name;
    constructor(name) {
        this.Name = name;
    }
}
export class Cleric extends Job {
    constructor(name = "Cleric") {
        super(name)
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