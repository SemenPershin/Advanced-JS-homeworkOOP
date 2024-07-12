import { Bowman } from "../Bowman"


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