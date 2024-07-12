import { Character } from "../Character";
import { Magician } from "../Magician";

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