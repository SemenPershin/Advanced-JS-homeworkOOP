import { Character } from "../Character";
import { Zombie } from "../Zombie";


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

test('Get level', () => {
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

test('Get damage', () => {
    const zombie = new Zombie("zombie");
    zombie.damage(12);
    expect(zombie.health).toBe(89.2);
})

test('Got damaged being dead', () => {
    const zombie = new Zombie("zombie");
    zombie.health = 0;
    try {
        zombie.damage(12);
    } catch (error) {
        expect(error.message).toBe("Нельзя нанести урон умершему");
    }
})


