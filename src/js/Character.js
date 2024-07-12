export class Character {
    constructor(name, type) {

        const conditionName = typeof name == "string" && name.length >= 2 && name.length <= 10;
        const conditionType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type);

        if (!conditionName) {
            throw new Error("Ошибка в имени");
        } 
        if (!conditionType) {
            throw new Error("Ошибка в типе");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (!(this.health > 0)) {
            throw new Error("Нельзя повысить левел умершего")
        } else {
            this.level++;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        }
    }

    damage (points) {
        if (!(this.health > 0)) {
            throw new Error("Нельзя нанести урон умершему")
        } else {
            this.health -= points * (1 - this.defence / 100)
        }
        
    }
}