export class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {

        let conditionName = typeof name == "string" && name.length >= 2 && name.length <= 10;
        let conditionType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type);

        if (conditionName) {
            this.name = name;
        } else throw new Error("Ошибка в имени");

        if (conditionType) {
            this.type = type;
        } else throw new Error("Ошибка в типе");

        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        } else throw new Error("Нельзя повысить левел умершего")
    }

    damage (points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else throw new Error("Нельзя нанести урон умершему")
        
    }
}

export class Bowman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Bowman", health, level, attack = 25, defence = 25)
    }
}

export class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Swordsman", health, level, attack = 40, defence = 10)
    }
}

export class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Magician", health, level, attack = 10, defence = 40)
    }
}

export class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Undead", health, level, attack = 25, defence = 25)
    }
}

export class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Zombie", health, level, attack = 40, defence = 10)
    }
}

export class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type = "Daemon", health, level, attack = 10, defence = 40)
    }
}