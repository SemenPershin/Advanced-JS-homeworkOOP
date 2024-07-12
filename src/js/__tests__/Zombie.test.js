import { Character } from "../Character";
import { Zombie } from "../Zombie";

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