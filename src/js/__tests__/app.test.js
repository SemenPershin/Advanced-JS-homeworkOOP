import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../app.js'

test('Summon daemon', () => {
    const daemon = new Daemon("daemon");
    expect(daemon).toEqual({
        "name": "daemon",
        "type": "Daemon",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    })
})

test('Summon zombie', () => {
    const zombie = new Zombie("zombie");
    expect(zombie).toEqual({
        "name": "zombie",
        "type": "Zombie",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    })
})

test('Summon undead', () => {
    const undead = new Undead("undead");
    expect(undead).toEqual({
        "name": "undead",
        "type": "Undead",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    })
})

test('Summon magician', () => {
    const magician = new Magician("magician");
    expect(magician).toEqual({
        "name": "magician",
        "type": "Magician",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    })
})

test('Summon swordsman', () => {
    const swordsman = new Swordsman("swordsman");
    expect(swordsman).toEqual({
        "name": "swordsman",
        "type": "Swordsman",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    })
})

test('Summon bowman', () => {
    const bowman = new Bowman("bowman");
    expect(bowman).toEqual({
        "name": "bowman",
        "type": "Bowman",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    })
})

test('Type error', () => {
    try {
        const character = new Character("MyName");
    } catch (error) {
        expect(error.message).toBe("Ошибка в типе");
    }
})

test('Name error', () => {
    try {
        const character = new Character("1");
    } catch (error) {
        expect(error.message).toBe("Ошибка в имени");
    }
})

test('Zombie get level', () => {
    const zombie = new Zombie("zombie");
    zombie.health = 10;
    zombie.levelUp();
    expect(zombie).toEqual({
        "name": "zombie",
        "type": "Zombie",
        "health": 100,
        "level": 2,
        "attack": 48,
        "defence": 12
    })
})

test('level up being dead', () => {
    const zombie = new Zombie("zombie");
    zombie.health = 0;
    try {
        zombie.levelUp();
    } catch (error) {
        expect(error.message).toBe("Нельзя повысить левел умершего");
    }
})

test('Bowman get damage', () => {
    const bowman = new Bowman("bowman");
    bowman.damage(12);
    expect(bowman.health).toBe(91);
})

test('Got damaged being dead', () => {
    const magician = new Magician("magician");
    magician.health = 0;
    try {
        magician.damage(12);
    } catch (error) {
        expect(error.message).toBe("Нельзя нанести урон умершему");
    }
})
