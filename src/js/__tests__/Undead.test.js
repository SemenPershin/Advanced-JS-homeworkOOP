import { Undead } from "../Undead";

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